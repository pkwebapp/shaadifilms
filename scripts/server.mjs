import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT || 4173);
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.mp4':'video/mp4', '.webp':'image/webp', '.woff2':'font/woff2', '.json':'application/json', '.xml':'application/xml', '.txt':'text/plain' };
const limits = new Map();
setInterval(() => { for (const [ip, entry] of limits) if (Date.now() > entry.until) limits.delete(ip); }, 60000).unref();
function json(res, status, value) { res.writeHead(status, { 'Content-Type':'application/json', 'Cache-Control':'no-store' }); res.end(JSON.stringify(value)); }
export function validate(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return false;
  if (!['wedding','prewedding','family','corporate'].includes(data.type)) return false;
  if (typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.length > 120) return false;
  if (typeof data.phone !== 'string' || !/^\+?[\d\s().-]{10,30}$/.test(data.phone) || data.phone.replace(/\D/g,'').length < 10 || data.phone.replace(/\D/g,'').length > 15) return false;
  if (typeof data.venue !== 'string' || !data.venue.trim() || data.venue.length > 500) return false;
  if (data.email && (typeof data.email !== 'string' || data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))) return false;
  if (data.pref === 'Email' && !data.email) return false;
  if (!['WhatsApp','Phone call','Email'].includes(data.pref)) return false;
  if (typeof data.dateFlexible !== 'boolean') return false;
  if (!data.dateFlexible) {
    if (typeof data.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date))) return false;
    if (new Date(data.date).toISOString().slice(0,10) !== data.date || data.date < new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'})) return false;
  }
  for (const key of ['core','adds']) if (!Array.isArray(data[key]) || data[key].length > 20 || data[key].some(v => typeof v !== 'string' || v.length > 120)) return false;
  for (const key of ['notes','company','budget','events']) if (data[key] != null && (typeof data[key] !== 'string' || data[key].length > 4000)) return false;
  return true;
}
export const server = createServer(async (req,res) => {
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options','SAMEORIGIN');
  if (process.env.SITE_LAUNCH !== 'true') res.setHeader('X-Robots-Tag','noindex, nofollow');
  let url;
  try { url = new URL(req.url, 'http://localhost'); } catch { res.writeHead(400); return res.end(); }
  if (url.pathname === '/journal/planning-your-wedding-photography/') { res.writeHead(301,{Location:'/journal/candid-vs-traditional-wedding-photography/'+url.search}); return res.end(); }
  if (url.pathname === '/api/enquiry') {
    if (req.method !== 'POST') return json(res,405,{error:'Method not allowed'});
    if (req.headers.origin) {
      let origin; try { origin = new URL(req.headers.origin); } catch { return json(res,403,{error:'Invalid origin'}); }
      if (origin.host !== req.headers.host) return json(res,403,{error:'Invalid origin'});
    }
    if (!(req.headers['content-type'] || '').startsWith('application/json')) return json(res,415,{error:'JSON required'});
    const ip = req.socket.remoteAddress;
    const entry = limits.get(ip) || {count:0,until:Date.now()+600000};
    if (entry.count >= 10) return json(res,429,{error:'Please wait a few minutes before trying again.'});
    entry.count++; limits.set(ip,entry);
    try {
      let body=''; for await (const chunk of req) { body+=chunk; if (Buffer.byteLength(body)>16000) return json(res,413,{error:'Enquiry too long'}); }
      const data=JSON.parse(body);
      if (data.website || !validate(data)) return json(res,400,{error:'Please check your enquiry details.'});
      if (!process.env.ENQUIRY_WEBHOOK_URL) return json(res,503,{error:'Online enquiries are not connected yet. Please use WhatsApp or call. Your details remain in this form.'});
      const webhook = new URL(process.env.ENQUIRY_WEBHOOK_URL);
      if (webhook.protocol !== 'https:') throw new Error('HTTPS required');
      const response=await fetch(webhook,{ method:'POST',headers:{'Content-Type':'application/json', ...(process.env.ENQUIRY_WEBHOOK_TOKEN ? {'Authorization':`Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}`} : {})},body:JSON.stringify({...data,source:'shaadifilms.com',receivedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000),redirect:'error'});
      if (!response.ok) throw new Error('Delivery failed');
      return json(res,200,{ok:true});
    } catch (error) { if(error instanceof SyntaxError)return json(res,400,{error:'Invalid enquiry data'}); return json(res,502,{error:'We could not send this. Please try again or contact us on WhatsApp. Your details remain in this form.'}); }
  }
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);return res.end();}
  try {
    const path=resolve(root,'.'+decodeURIComponent(url.pathname));
    if (path !== resolve(root) && !path.startsWith(resolve(root)+sep)) {res.writeHead(403);return res.end();}
    let file=path;
    const info=await stat(file);
    if (info.isDirectory()) {
      if (!url.pathname.endsWith('/')) {res.writeHead(308,{Location:url.pathname+'/'+url.search});return res.end();}
      file=resolve(file,'index.html');
    }
    let content=await readFile(file);
    const etag='W/"'+createHash('sha256').update(content).digest('hex').slice(0,20)+'"';
    const headers={'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':extname(file)==='.html'?'no-cache': /\.(css|js|woff2)$/.test(file)?'public, max-age=31536000, immutable':'public, max-age=86400','ETag':etag};
    if(req.headers['if-none-match']===etag){res.writeHead(304,headers);return res.end();}
    if(/\.(html|css|js|json|xml|svg|txt)$/.test(file)) {
      headers['Vary']='Accept-Encoding';
      const encoding=String(req.headers['accept-encoding']||'');
      const accepted=name=>encoding.split(',').some(part=>{const [token,...params]=part.trim().split(';');if(token.trim()!==name)return false;const q=params.find(p=>p.trim().startsWith('q='));return !q||Number(q.trim().slice(2))>0;});
      const selected=accepted('br')?['br','.br']:accepted('gzip')?['gzip','.gz']:null;
      if(selected)try{content=await readFile(file+selected[1]);headers['Content-Encoding']=selected[0];}catch{}
    }
    if (extname(file)==='.mp4' && req.headers.range) {
      const match=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range);
      if (!match) {res.writeHead(416,{'Content-Range':`bytes */${content.length}`});return res.end();}
      const start=Number(match[1]),end=match[2]?Math.min(Number(match[2]),content.length-1):content.length-1;
      if (start>end || start>=content.length) {res.writeHead(416,{'Content-Range':`bytes */${content.length}`});return res.end();}
      res.writeHead(206,{...headers,'Accept-Ranges':'bytes','Content-Range':`bytes ${start}-${end}/${content.length}`,'Content-Length':end-start+1});return res.end(req.method==='HEAD'?undefined:content.subarray(start,end+1));
    }
    res.writeHead(200,{...headers,'Content-Length':content.length});res.end(req.method==='HEAD'?undefined:content);
  } catch {res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(req.method==='HEAD'?undefined:await readFile(resolve(root,'404.html')));}
});
if (process.argv[1] === fileURLToPath(import.meta.url)) server.listen(port,'127.0.0.1',()=>console.log(`Local: http://localhost:${port}`));
