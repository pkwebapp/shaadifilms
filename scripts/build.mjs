// Builds the static prototype: src/pages/*.html fragments + shared layout -> prototype/*.html
// Run: node src/build.mjs   (from the prototype folder)
// Each fragment starts with <!--META {json} --> holding page metadata.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, cpSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { brotliCompressSync, gzipSync } from "node:zlib";
import { isPublishedPage, shouldNoindex } from "./publication.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const project = join(here, "..");
const root = join(project, "dist");
const PREVIEW = process.env.SITE_LAUNCH !== "true";
const SITE = "https://shaadifilms.com";
const assetVersion = file => createHash("sha256").update(readFileSync(join(project, "assets", file))).digest("hex").slice(0, 10);
const config = JSON.parse(readFileSync(join(project, "site.config.json"), "utf8"));
const PHONE = config.phone;            // from the Sands & Vows quotation; confirm before launch
const PHONE_INTL = config.phoneInternational;
const PHONE2 = config.phone2;          // second line on the Google Business Profile
const PHONE2_INTL = config.phone2International;
const fmtPhone = p => p.replace(/(\d{5})(\d{5})/, "$1 $2");
// WhatsApp opens with a message that tells the team the enquiry came from the website.
const WA = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(config.whatsappText)}`;
const ADDRESS = config.address;
const ADDRESS_TEXT = `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality} ${ADDRESS.postalCode}`;
const imageManifest = JSON.parse(readFileSync(join(project, "assets/image-manifest.json"), "utf8"));
function imageVariant(src, width) {
  const data = imageManifest[src.startsWith("/") ? src : "/" + src];
  return data ? data.variants.reduce((best, item) => Math.abs(item.width - width) < Math.abs(best.width - width) ? item : best).src : src;
}
function responsiveImages(html) {
  const stack = [];
  const voids = new Set(["img","link","meta","source","input","br","hr","area","base","embed","param","wbr"]);
  return html.replace(/<\/?[a-zA-Z][^>]*>/g, tag => {
    const closing = tag.match(/^<\/([a-z0-9-]+)/i);
    if (closing) { const index = stack.map(s => s.name).lastIndexOf(closing[1].toLowerCase()); if (index >= 0) stack.splice(index); return tag; }
    const name = tag.match(/^<([a-z0-9-]+)/i)[1].toLowerCase();
    const classes = (tag.match(/class="([^"]*)"/) || [," "])[1].split(/\s+/);
    const context = new Set(stack.flatMap(s => s.classes));
    if (name !== "img") {
      if (!voids.has(name) && !tag.endsWith("/>")) stack.push({name,classes});
      return tag;
    }
    const match = tag.match(/\bsrc="([^"]+)"/);
    const data = match && imageManifest[match[1]];
    if (!data) return tag;
    const thumb = /width="64"/.test(tag);
    const variants = data.variants.filter(v => thumb ? v.width <= 480 : v.width >= 480);
    const fallback = imageVariant(match[1], thumb ? 160 : 800);
    let sizes = "(min-width: 1440px) 1320px, calc(100vw - 8vw)";
    if (context.has("story-card") || context.has("tradition") || context.has("post")) sizes = "(max-width: 719px) calc(100vw - 40px), (max-width: 1099px) 44vw, (min-width: 1440px) 420px, 29vw";
    if (context.has("split") || context.has("home-feature") || context.has("core-item") || context.has("compare") || (context.has("page-journal") && context.has("feature"))) sizes = "(max-width: 899px) calc(100vw - 40px), (min-width: 1440px) 760px, 48vw";
    if (context.has("article-figure")) sizes = "(max-width: 719px) calc(100vw - 40px), (max-width: 1099px) 720px, 1040px";
    if (context.has("gallery")) sizes = context.has("g-2") ? "(max-width: 899px) 44vw, 29vw" : "(max-width: 899px) calc(100vw - 40px), 60vw";
    if (thumb) sizes="64px";
    let attrs=tag.slice(4,-1).replace(/\bsrc="[^"]+"/, `src="${fallback}"`).replace(/\s(?:width|height|sizes|srcset|decoding)="[^"]*"/g, "");
    return `<img${attrs} width="${data.width}" height="${data.height}" srcset="${variants.map(v => `${v.src} ${v.width}w`).join(", ")}" sizes="${sizes}" decoding="async">`;
  }).replace(/poster="([^"]+)"/g, (_,src) => `poster="${imageVariant(src,1200)}"`).replace(/url\((\/assets\/img\/[^)]+)\)/g,(_,src) => `url(${imageVariant(src,160)})`);
}
function lightbox() {
  return `<div class="modal" id="lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Photograph viewer"><button class="pill-ctl close" aria-label="Close photo">Close ×</button><div class="inner photo-view"><img alt="" class="lightbox-image"><div class="cap"><span class="lb-cap" aria-live="polite"></span><div class="btn-row"><button class="pill-ctl prev" aria-label="Previous photo">←</button><button class="pill-ctl next" aria-label="Next photo">→</button><a class="pill-ctl" id="photo-original" target="_blank" rel="noopener">Open original ↗</a></div></div></div></div>`;
}

// Prototype file -> production URL (see docs/02-sitemap-and-seo.md)
export const ROUTES = {
  "index.html": "/",
  "wedding-photography.html": "/wedding-photography-mumbai/",
  "wedding-films.html": "/wedding-films-mumbai/",
  "pre-wedding.html": "/pre-wedding-shoot-mumbai/",
  "wedding-stories.html": "/wedding-stories/",
  "story.html": "/wedding-stories/selected-wedding/",
  "events.html": "/events/",
  "experience.html": "/experience/",
  "about.html": "/about/",
  "journal.html": "/journal/",
  "article.html": "/journal/planning-your-wedding-photography/",
  "contact.html": "/contact/",
  "privacy.html": "/privacy-policy/",
  "terms.html": "/terms/",
  "design-system.html": "/design-system/",
};

// Brand logo (transparent PNG source in assets/brand); the alt text carries the name.
const logo = (eager = false) => `<img class="logo" src="/assets/brand/shaadi-films-logo-320.webp" srcset="/assets/brand/shaadi-films-logo-320.webp 320w, /assets/brand/shaadi-films-logo-640.webp 640w" sizes="260px" width="1963" height="631" alt="Shaadi Films"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;

const icon = {
  chev: '<svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
  menu: '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 6h14M2 12h14" stroke="currentColor" stroke-width="1.4"/></svg>',
  close: '<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 3l12 12M15 3L3 15" stroke="currentColor" stroke-width="1.4"/></svg>',
  wa: '<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z"/></svg>',
};

function header(nav) {
  const cur = (k) => (nav === k ? ' aria-current="page"' : "");
  const curLi = (k) => (nav === k ? ' class="has-menu is-current"' : ' class="has-menu"');
  return `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap bar">
    <a href="index.html" class="wordmark" aria-label="Shaadi Films home">${logo(true)}</a>
    <nav class="primary-nav" aria-label="Main">
      <ul>
        <li><a href="wedding-stories.html"${cur("stories")}>Wedding Stories</a></li>
        <li${curLi("weddings")}>
          <button class="navbtn" aria-expanded="false" aria-controls="menu-weddings">Weddings ${icon.chev}</button>
          <div class="menu" id="menu-weddings">
            <a href="wedding-photography.html"><img src="assets/img/couple-mandap-joy.jpg" alt="" width="64" height="64" loading="lazy"><div><strong>Wedding Photography</strong><span>Candid and traditional, every ritual and every relative</span></div></a>
            <a href="wedding-films.html"><img src="assets/img/first-dance-light.jpg" alt="" width="64" height="64" loading="lazy"><div><strong>Wedding Films</strong><span>Cinematic films, traditional video, drone, same-day edits</span></div></a>
            <a href="pre-wedding.html"><img src="assets/img/prewedding-garden.jpg" alt="" width="64" height="64" loading="lazy"><div><strong>Pre-Wedding</strong><span>Photos and films before the big day</span></div></a>
            <a href="experience.html"><img src="assets/img/album-layflat.jpg" alt="" width="64" height="64" loading="lazy"><div><strong>Albums and Additions</strong><span>Albums, guest photo delivery, live streaming, LED wall</span></div></a>
          </div>
        </li>
        <li><a href="events.html"${cur("events")}>Events</a></li>
        <li><a href="experience.html"${cur("experience")}>Experience</a></li>
        <li><a href="journal.html"${cur("journal")}>Journal</a></li>
        <li><a href="about.html"${cur("about")}>About</a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <a class="btn btn-primary" href="contact.html">Book now</a>
      <button class="burger" aria-expanded="false" aria-controls="menu-sheet" aria-label="Open menu">${icon.menu}</button>
    </div>
  </div>
</header>
<div class="sheet" id="menu-sheet" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Menu">
  <div class="sheet-top">
    <a href="index.html" class="wordmark" aria-label="Shaadi Films home">${logo()}</a>
    <button class="burger sheet-close" aria-label="Close menu">${icon.close}</button>
  </div>
  <nav aria-label="Mobile">
    <ul>
      <li><a href="wedding-stories.html">Wedding Stories</a></li>
      <li><a href="wedding-photography.html">Weddings</a>
        <div class="sub"><a href="wedding-photography.html">Photography</a><a href="wedding-films.html">Films</a><a href="pre-wedding.html">Pre-wedding</a></div></li>
      <li><a href="events.html">Events</a>
        <div class="sub"><a href="events.html#family">Family</a><a href="events.html#corporate">Corporate</a></div></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="journal.html">Journal</a></li>
      <li><a href="about.html">About</a></li>
    </ul>
  </nav>
  <div class="sheet-cta">
    <a class="btn btn-primary" href="contact.html">Book now</a>
    <a class="btn btn-ghost" href="${WA}" rel="noopener">${icon.wa} WhatsApp us</a>
  </div>
</div>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a href="index.html" class="wordmark" aria-label="Shaadi Films home">${logo()}</a>
        <p class="muted foot-intro">Wedding photography, films and event coverage for families across Mumbai.</p>
        <div class="family">
          <span>Getting married in Goa? <a href="https://sandsandvows.com" rel="noopener">Sands &amp; Vows</a> is our Goa wedding studio.</span>
          <span>Portraits, brands and editorial: <a href="https://pkphotography.in" rel="noopener">PK Photography</a>.</span>
        </div>
      </div>
      <div><h2 class="foot-h">Weddings</h2><ul>
        <li><a href="wedding-photography.html">Wedding photography</a></li>
        <li><a href="wedding-films.html">Wedding films</a></li>
        <li><a href="pre-wedding.html">Pre-wedding</a></li>
        <li><a href="wedding-stories.html">Wedding stories</a></li>
        <li><a href="experience.html">Albums and additions</a></li>
      </ul></div>
      <div><h2 class="foot-h">Events and more</h2><ul>
        <li><a href="events.html#family">Family events</a></li>
        <li><a href="events.html#corporate">Corporate events</a></li>
        <li><a href="journal.html">Journal</a></li>
        <li><a href="about.html">About us</a></li>
      </ul></div>
      <div><h2 class="foot-h">Talk to us</h2><ul>
        <li><a href="contact.html">Send an enquiry</a></li>
        <li><a href="${WA}" rel="noopener">WhatsApp +91 ${fmtPhone(PHONE)}</a></li>
        <li>Call <a href="tel:+${PHONE_INTL}">+91 ${fmtPhone(PHONE)}</a> · <a href="tel:+${PHONE2_INTL}">+91 ${fmtPhone(PHONE2)}</a></li>
        <li><a href="${config.mapUrl}" rel="noopener">${ADDRESS_TEXT}</a></li>
        <li><a href="https://instagram.com/shaadifilms.in" rel="noopener">Instagram</a> · <a href="https://youtube.com/channel/UCHUjv7y02uVJ8Hh_IvjSw0g" rel="noopener">YouTube</a></li>
      </ul></div>
    </div>
    <div class="legal">
      <span>© 2026 Shaadi Films </span>
      <ul><li><a href="privacy.html">Privacy policy</a></li><li><a href="terms.html">Terms</a></li></ul>
    </div>
  </div>
</footer>
<a class="sr-only" href="#main">Back to top</a>
<div class="dock" aria-label="WhatsApp contact">
  <a class="wa" href="${WA}" rel="noopener" aria-label="Chat with Shaadi Films on WhatsApp" title="Chat on WhatsApp" target="_blank">${icon.wa}</a>
</div>
<div class="modal" id="film-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Film player">
  <button class="pill-ctl close" aria-label="Close film">${icon.close} Close</button>
  <div class="inner">
    <video controls playsinline preload="none"></video>
    <div class="cap"><span class="cap-title">Film</span><span>Films load only when you press play.</span></div>
  </div>
</div>`;
}

// Closing enquiry band. Variant decides the heading and which path leads.
function cta(type) {
  const heads = {
    wedding: ["Tell us the date.", "We will tell you if we are free, and how we would cover it."],
    prewedding: ["Planning a pre-wedding shoot?", "Share a few ideas and a rough date. We will suggest places and a plan."],
    events: ["Planning a celebration or a company event?", "Tell us what is happening and when. We will put together the right team."],
    default: ["Tell us the date.", "We will tell you if we are free, and how we would cover it."],
  };
  const [h, p] = heads[type] || heads.default;
  const paths = [
    ["wedding", "A wedding", "Photography, films, or both"],
    ["prewedding", "A pre-wedding shoot", "Photos or a short film"],
    ["family", "A family celebration", "Engagements, anniversaries, birthdays"],
    ["corporate", "A corporate event", "Conferences, launches, awards"],
  ];
  return `
<section class="cta-band" aria-labelledby="cta-h">
  <div class="wrap cta-grid">
    <div class="stack">
      <span class="slate"><span class="rec" aria-hidden="true"></span>Final scene · Your enquiry</span>
      <h2 class="display" id="cta-h">${h}</h2>
      <p class="lead">${p}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="contact.html${type && type !== "default" ? "#" + (type === "events" ? "family" : type) : ""}">Book now <span class="arrow" aria-hidden="true">→</span></a>
        <a class="btn btn-ghost" href="${WA}" rel="noopener">${icon.wa} WhatsApp us</a>
      </div>
    </div>
    <div>
      <p class="eyebrow cta-paths-label">Or start with what you are planning</p>
      <div class="cta-paths">
        ${paths.map(([k, t, s]) => `<a href="contact.html#${k}"><span>${t}<br><small>${s}</small></span><span aria-hidden="true">→</span></a>`).join("")}
      </div>
    </div>
  </div>
</section>`;
}

function crumbsLD(crumbs, file) {
  if (!crumbs || !crumbs.length) return null;
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: /\[.*\]/.test(c[0]) ? "Selected wedding" : c[0], item: SITE + (ROUTES[c[1]] || "/") })),
  };
}

// FAQPage markup from the visible <details> questions on the page.
function faqLD(body) {
  const items = [...body.matchAll(/<details><summary>(.*?)<\/summary><div class="ans">([\s\S]*?)<\/div><\/details>/g)];
  if (!items.length) return null;
  const text = html => html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: items.map(([, q, a]) => ({ "@type": "Question", name: text(q), acceptedAnswer: { "@type": "Answer", text: text(a) } })),
  };
}

// Small enough to inline: removes both render-blocking stylesheet requests.
const inlineCSS = readFileSync(join(project, "assets/fonts/fonts.css"), "utf8") + "\n" + readFileSync(join(project, "assets/sf.css"), "utf8");
const BUILD_DATE = new Date().toISOString().slice(0, 10);

function page(file, meta, body) {
  const url = SITE + (ROUTES[file] || "/");
  const lds = [];
  if (meta.schema) lds.push(...[].concat(meta.schema).filter(s => !/\[[a-zA-Z][^\]]*\]/.test(JSON.stringify(s)) && s["@type"] !== "VideoObject"));
  lds.forEach(s => { if (s["@type"] === "ProfessionalService") Object.assign(s, {
    address: { "@type": "PostalAddress", ...ADDRESS },
    hasMap: config.mapUrl,
    logo: SITE + "/assets/brand/shaadi-films-logo.png",
    image: SITE + "/assets/brand/shaadi-films-logo.png",
    contactPoint: [PHONE_INTL, PHONE2_INTL].map(n => ({ "@type": "ContactPoint", telephone: "+" + n, contactType: "customer service", areaServed: "IN" })),
  }); });
  const bc = crumbsLD(meta.crumbs, file); if (bc) lds.push(bc);
  const faq = faqLD(body); if (faq) lds.push(faq);
  const ogImg = meta.og || "assets/img/seaside-mandap-mumbai.jpg";
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<link rel="canonical" href="${url}">
${shouldNoindex(file, meta, PREVIEW) ? '<meta name="robots" content="noindex, follow">' : ""}
<meta property="og:type" content="${meta.ogType || "website"}">
<meta property="og:site_name" content="Shaadi Films">
<meta property="og:title" content="${meta.ogTitle || meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<meta name="theme-color" content="#12100D">
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/2e4538dc4eb334.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/d9ec821052ff94.woff2" crossorigin>
<style>${inlineCSS}</style>
${meta.preload ? `<link rel="preload" as="image" href="${imageVariant(meta.preload,1200)}">` : ""}
${lds.map((l) => `<script type="application/ld+json">${JSON.stringify(l)}</script>`).join("\n")}
</head>
<body class="page-${file.replace(".html", "")}" data-enquiry-mode="${config.enquiryMode || "whatsapp"}" data-contact-phone="${PHONE_INTL}">
${header(meta.nav)}
<main id="main">
${body}
</main>
${footer()}
${lightbox()}
<script src="assets/sf.js?v=${assetVersion("sf.js")}" defer></script>
</body>
</html>
`;
}

const dir = join(project, "src/pages");
const files = readdirSync(dir).filter((f) => f.endsWith(".html"));
const pageMeta = new Map(files.map(file => {
 const source = readFileSync(join(dir,file), "utf8");
 const meta = JSON.parse(source.match(/^<!--META\s*([\s\S]*?)-->/)[1]);
 if (meta.route) ROUTES[file] = meta.route;
 return [file, meta];
}));
if (!PREVIEW && (config.contentApproved !== true || (config.enquiryMode === "webhook" && !process.env.ENQUIRY_WEBHOOK_URL))) {
  throw new Error("Launch blocked: approve content in site.config.json; webhook mode also requires ENQUIRY_WEBHOOK_URL. Preview builds remain available.");
}
rmSync(root, { recursive: true, force: true });
mkdirSync(root, { recursive: true });
cpSync(join(project, "assets"), join(root, "assets"), { recursive: true });
cpSync(join(project, "assets/favicon.ico"), join(root, "favicon.ico")); // browsers and Google ask for /favicon.ico
for (const f of files) {
  const src = readFileSync(join(dir, f), "utf8");
  const m = src.match(/^<!--META\s*([\s\S]*?)-->/);
  if (!m) throw new Error("Missing META in " + f);
  const meta = JSON.parse(m[1]);
  const body = src.slice(m[0].length)
    .replace(/\{\{CTA(?::(\w+))?\}\}/g, (_, t) => cta(t))
    .replaceAll("{{PHONE}}", PHONE.replace(/(\d{5})(\d{5})/, "$1 $2"))
    .replaceAll("https://wa.me/{{PHONE_INTL}}", WA)
    .replaceAll("{{PHONE2}}", fmtPhone(PHONE2))
    .replaceAll("{{PHONE2_INTL}}", PHONE2_INTL)
    .replaceAll("{{ADDRESS}}", ADDRESS_TEXT)
    .replaceAll("{{MAP_URL}}", config.mapUrl)
    .replaceAll("{{PHONE_INTL}}", PHONE_INTL);
  let html = page(f, meta, body).replace(/(href|src|poster|data-film|data-poster|data-full)="assets\//g, '$1="/assets/');
  html = html.replace(/href="([a-z-]+\.html)([?#][^"]*)?"/g, (match, file, suffix = "") => ROUTES[file] ? `href="${ROUTES[file]}${suffix}"` : match);
  html = html.replace(/href="assets\//g, 'href="/assets/').replaceAll("url(assets/", "url(/assets/");
  html = responsiveImages(html);
  const target = join(root, ROUTES[f]);
  mkdirSync(target, { recursive: true });
  writeFileSync(join(target, "index.html"), html);
  console.log("built", f, "->", ROUTES[f]);
}

const publicRoutes = files.filter(f => isPublishedPage(f, pageMeta.get(f)));
writeFileSync(join(root, "sitemap.xml"), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + publicRoutes.map(f => `<url><loc>${SITE}${ROUTES[f]}</loc><lastmod>${BUILD_DATE}</lastmod></url>`).join("") + '</urlset>');
writeFileSync(join(root, "robots.txt"), PREVIEW ? "User-agent: *\nDisallow: /\n" : `User-agent: *\nAllow: /\nDisallow: /design-system/\nSitemap: ${SITE}/sitemap.xml\n`);
if (!PREVIEW) {
  const line = f => `- [${pageMeta.get(f).title.replace(/ \| Shaadi Films$/, "")}](${SITE}${ROUTES[f]}): ${pageMeta.get(f).description}`;
  const isGuide = f => ROUTES[f].startsWith("/journal/") && ROUTES[f] !== "/journal/";
  writeFileSync(join(root, "llms.txt"), `# Shaadi Films

> Wedding photography, wedding films and event coverage in Mumbai, led by founder and creative director Prabhakar Kumar. Candid and traditional photography, cinematic and traditional videography, pre-wedding shoots, albums, guest photo delivery, live streaming and LED walls for Hindu, Muslim and Christian weddings, family celebrations and corporate events.

Studio: ${ADDRESS_TEXT}. Enquiries: WhatsApp +91 ${fmtPhone(PHONE)}, call +91 ${fmtPhone(PHONE)} or +91 ${fmtPhone(PHONE2)}, or ${SITE}/contact/. Goa weddings are handled by the sister studio Sands & Vows (https://sandsandvows.com).

## Services and pages

${publicRoutes.filter(f => !isGuide(f)).map(line).join("\n")}

## Planning guides

${publicRoutes.filter(isGuide).map(line).join("\n")}
`);
}
writeFileSync(join(root, "404.html"), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Page not found | Shaadi Films</title><link rel="icon" href="/assets/favicon.ico"><link rel="stylesheet" href="/assets/sf.css"><main class="wrap section"><p class="eyebrow">404 · A scene missing</p><h1 class="display">Let’s find your way back.</h1><p>This page could not be found.</p><div class="btn-row"><a class="btn btn-primary" href="/">Home</a><a class="btn btn-ghost" href="/contact/">Enquire</a></div></main></html>`);

function compressText(dir) {
 for (const file of readdirSync(dir, {withFileTypes:true})) {
  const path=join(dir,file.name);
  if (file.isDirectory()) compressText(path);
  else if (/\.(html|css|js|json|xml|svg|txt)$/.test(file.name)) {
   const data=readFileSync(path);writeFileSync(path+".br",brotliCompressSync(data));writeFileSync(path+".gz",gzipSync(data));
  }
 }
}
compressText(root);
