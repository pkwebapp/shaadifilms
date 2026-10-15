from pathlib import Path
from urllib.request import Request, urlopen
import re,hashlib
root=Path(__file__).resolve().parent.parent
out=root/'assets/fonts';out.mkdir(exist_ok=True)
url='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@400&family=Figtree:wght@400;500;600&display=swap'
headers={'User-Agent':'Mozilla/5.0 AppleWebKit/537.36 Chrome/132.0.0.0 Safari/537.36'}
css=urlopen(Request(url,headers=headers),timeout=30).read().decode()
blocks=re.findall(r'/\* latin \*/\s*(@font-face\s*\{[^}]+\})',css)
if not blocks: raise RuntimeError('Expected Latin font faces were not provided')
styles='\n'.join(blocks)
for remote in set(re.findall(r'url\((https://[^)]+)\)',styles)):
 if not remote.startswith('https://fonts.gstatic.com/'): raise RuntimeError('Unexpected font source')
 name=hashlib.sha256(remote.encode()).hexdigest()[:14]+'.woff2'
 if not (out/name).exists(): (out/name).write_bytes(urlopen(Request(remote,headers=headers),timeout=30).read())
 styles=styles.replace(remote,'/assets/fonts/'+name)
(out/'fonts.css').write_text(styles)
print('Saved',len(blocks),'Latin font faces for local delivery.')

for family in ['cormorantgaramond','figtree','dmmono']:
 license_url='https://raw.githubusercontent.com/google/fonts/main/ofl/'+family+'/OFL.txt'
 (out/(family+'-OFL.txt')).write_bytes(urlopen(Request(license_url,headers=headers),timeout=30).read())
print('Saved font license notices.')
