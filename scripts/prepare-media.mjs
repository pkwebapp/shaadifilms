import { createRequire } from 'node:module';
import { readdirSync, mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
let sharp;
try { sharp = require('sharp'); } catch { sharp = require('/Users/prabhakarkumar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp'); }
const dir = fileURLToPath(new URL('../assets/img/', import.meta.url));
const out = fileURLToPath(new URL('../assets/optimized/', import.meta.url));
mkdirSync(out, {recursive:true});
const manifest = {};
for (const file of readdirSync(dir).filter(f => /\.jpg$/.test(f))) {
 const source = join(dir,file), meta=await sharp(source).metadata(), stem=file.replace('.jpg','');
 const widths=[160,480,800,1200,1800].filter(w=>w<=meta.width);
 if(!widths.includes(meta.width) && meta.width<1800) widths.push(meta.width);
 const variants=[];
 for (const width of widths.sort((a,b)=>a-b)) {
   const name=`${stem}-${width}.webp`;
   if (!existsSync(join(out,name)) || statSync(source).mtimeMs > statSync(join(out,name)).mtimeMs) await sharp(source).rotate().resize({width,withoutEnlargement:true}).webp({quality:78,effort:5}).toFile(join(out,name));
   variants.push({width,src:'/assets/optimized/'+name,bytes:readFileSync(join(out,name)).length});
 }
 manifest['/assets/img/'+file]={width:meta.width,height:meta.height,variants};
}
writeFileSync(new URL('../assets/image-manifest.json',import.meta.url), JSON.stringify(manifest,null,2));
console.log(`Prepared responsive WebP variants for ${Object.keys(manifest).length} photographs.`);
