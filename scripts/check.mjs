import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import assert from 'node:assert/strict';
import { validate } from './server.mjs';
const root=resolve('dist');
function walk(dir) {return readdirSync(dir).flatMap(f=>statSync(join(dir,f)).isDirectory()?walk(join(dir,f)):[join(dir,f)]);}
const pages=walk(root).filter(p=>p.endsWith('.html'));
const errors=[]; const titles=new Set();
for(const path of pages) {
 const html=readFileSync(path,'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length) errors.push(`${path}: duplicate IDs`);
 if(!path.endsWith('404.html') && !html.includes('http-equiv="refresh"')) { // forwarding pages for old URLs have no content
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  if(!title||titles.has(title)) errors.push(`${path}: missing/duplicate title`);titles.add(title);
  if((html.match(/<h1\b/g)||[]).length!==1) errors.push(`${path}: expected one H1`);
  if(!html.includes('rel="canonical"')) errors.push(`${path}: missing canonical`);
 }
 for(const match of html.matchAll(/(?:href|src|poster|data-film|data-poster|data-full)="([^"]+)"/g)) {
  const value=match[1]; if(!value.startsWith('/')||value.startsWith('//')) continue;
  const [pathname,hash]=value.split('#');
  const target=join(root,pathname.split('?')[0]);
  const file=existsSync(target)&&statSync(target).isDirectory()?join(target,'index.html'):target;
  if(!existsSync(file)) errors.push(`${path}: missing ${value}`);
  else if(hash&&file.endsWith('.html')&&!readFileSync(file,'utf8').includes(`id="${hash}"`) && !['wedding','family','corporate','prewedding','hindu','muslim','christian','film','photo'].includes(hash)) errors.push(`${path}: missing anchor ${value}`);
 }
 for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
  try {JSON.parse(match[1]);if(/\[[a-zA-Z][^\]]*\]/.test(match[1])) errors.push(`${path}: placeholder schema`);}catch {errors.push(`${path}: invalid JSON-LD`);}
 }
}
const valid={type:'wedding',name:'Test Couple',phone:'+91 90000 00000',venue:'Mumbai',dateFlexible:true,pref:'WhatsApp',core:['Candid photography'],adds:[]};
assert.equal(validate(valid),true);
for(const change of [{type:'invalid'},{name:''},{phone:'123'},{venue:''},{email:'wrong'},{pref:'Email',email:''},{dateFlexible:false,date:'invalid'},{core:'invalid'},{notes:'x'.repeat(4001)}]) assert.equal(validate({...valid,...change}),false,JSON.stringify(change).slice(0,100));
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`Passed: ${pages.length} HTML pages, local links/assets/anchors, titles, headings, JSON-LD, and enquiry validation cases.`);
