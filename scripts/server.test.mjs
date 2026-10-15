import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { server, validate } from './server.mjs';
import { readFileSync } from 'node:fs';
import { brotliDecompressSync } from 'node:zlib';
let base;
before(async()=>{await new Promise((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});base=`http://127.0.0.1:${server.address().port}`;});
after(()=>new Promise(resolve=>server.close(resolve)));
test('real home response has metadata, local fonts and responsive images',async()=>{
 const res=await fetch(base+'/');assert.equal(res.status,200);const html=await res.text();assert.match(html,/srcset=/);assert.match(html,/fonts\/fonts.css/);assert.match(html,/Wedding stories/);assert.equal(res.headers.get('x-robots-tag'),'noindex, nofollow');
});
test('Brotli negotiation returns a valid compressed representation',async()=>{
 const http=await import('node:http');
 const result=await new Promise((resolve,reject)=>{http.get(base+'/',{headers:{'Accept-Encoding':'br'}},res=>{let chunks=[];res.on('data',d=>chunks.push(d));res.on('end',()=>resolve({headers:res.headers,body:Buffer.concat(chunks)}));}).on('error',reject);});
 assert.equal(result.headers['content-encoding'],'br');assert.match(brotliDecompressSync(result.body).toString(),/<!doctype html>/i);
});
test('image content types, caching and conditional request',async()=>{
 const res=await fetch(base+'/assets/optimized/varmala-hindu-wedding-480.webp');assert.equal(res.status,200);assert.equal(res.headers.get('content-type'),'image/webp');const cached=await fetch(base+'/assets/optimized/varmala-hindu-wedding-480.webp',{headers:{'If-None-Match':res.headers.get('etag')}});assert.equal(cached.status,304);
});
test('video byte ranges work and invalid ranges are rejected',async()=>{
 const res=await fetch(base+'/assets/film/home-reel.mp4',{headers:{Range:'bytes=0-99'}});assert.equal(res.status,206);assert.equal((await res.arrayBuffer()).byteLength,100);const invalid=await fetch(base+'/assets/film/home-reel.mp4',{headers:{Range:'bytes=999999999-'}});assert.equal(invalid.status,416);
});
test('old article links redirect to the right published guide',async()=>{const res=await fetch(base+'/journal/planning-your-wedding-photography/',{redirect:'manual'});assert.equal(res.status,301);assert.equal(res.headers.get('location'),'/journal/candid-vs-traditional-wedding-photography/');});
test('missing pages are actual 404 responses',async()=>{const res=await fetch(base+'/not-a-page/');assert.equal(res.status,404);assert.match(await res.text(),/find your way back/);});
test('enquiry rejects wrong methods, content types, origins and malformed JSON',async()=>{
 assert.equal((await fetch(base+'/api/enquiry')).status,405);
 assert.equal((await fetch(base+'/api/enquiry',{method:'POST',body:'hello'})).status,415);
 assert.equal((await fetch(base+'/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://different.example'},body:'{}'})).status,403);
 assert.equal((await fetch(base+'/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:'{'})).status,400);
});
test('validation rejects impossible and past dates and matches contact requirements',()=>{
 const valid={type:'wedding',name:'QA Test',phone:'+91 9000000000',venue:'Mumbai',dateFlexible:true,pref:'WhatsApp',core:[],adds:[]};assert.equal(validate(valid),true);
 for(const patch of [{dateFlexible:false,date:'2001-01-01'},{dateFlexible:false,date:'2099-02-31'},{pref:'Email',email:''},{phone:'123'},{core:'Candid'}])assert.equal(validate({...valid,...patch}),false);
});
test('all editorial articles are in the sitemap',()=>{const sitemap=readFileSync('dist/sitemap.xml','utf8');const articles=JSON.parse(readFileSync('src/content/articles.json','utf8'));for(const article of articles)assert.ok(sitemap.includes(article.route));assert.ok(sitemap.includes('/journal/candid-vs-traditional-wedding-photography/'));});

test('approved article and collection templates are indexable in launch mode',async()=>{const { shouldNoindex, isPublishedPage }=await import('./publication.mjs');for(const name of ['article.html','story.html','timeline-guide.html']){assert.equal(shouldNoindex(name,{published:true},false),false);assert.equal(isPublishedPage(name,{published:true}),true);assert.equal(shouldNoindex(name,{published:true},true),true);}assert.equal(shouldNoindex('privacy.html',{noindex:true},false),true);assert.equal(shouldNoindex('design-system.html',{},false),true);});
