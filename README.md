# Shaadi Films

A static-first, multipage Mumbai wedding photography, film and events website. The original Claude design folder remains separate and unchanged. The current editorial edition improves the shared design, content journeys, media delivery and enquiry flow.

## Preview

Requires Node.js 22.9 or later. All prepared media and local fonts are included; a normal build does not need a dependency installation.

```sh
npm run dev
```

Open http://localhost:4173. To rebuild content while the server is running, use `npm run build`, then refresh. Changes to `scripts/server.mjs` require restarting the server.

```sh
npm run build
npm run check
npm test
```

The test command creates a temporary loopback server. It does not send enquiries to external services.

## What is implemented

- Shared ivory, ink and sindoor identity with a new editorial homepage, shorter mobile opening, considered typography and full-photo framing.
- Wedding photography, films, pre-wedding sessions, family and corporate events, albums, keepsakes, drone, same-day edits, QR booth, PIK Connect delivery, live streaming and LED wall coverage.
- A photograph portfolio whose cards open the selected image in an accessible viewer. Keyboard arrows, Escape, touch swipes, focus restoration and original-image links are supported. This is a curated portfolio, not a set of invented client case studies.
- Shareable portfolio filters and a clearly identified Novotel Juhu reel.
- Seven complete planning articles with matching destinations, article metadata, real internal links and inclusion in the publication sitemap.
- Responsive WebP variants for 34 photographs, locally hosted fonts with license notices, deferred mobile video, precompressed text, image/film content types, conditional requests and cache policies.
- A three-step enquiry with accessible validation and an explicit review before sharing.

## Enquiry delivery

The default `enquiryMode` in `site.config.json` is `whatsapp`. The form prepares a summary locally. The visitor reviews it, chooses **Send on WhatsApp**, and presses Send within WhatsApp. The website does not claim that a message has already been delivered. The configured number is the contact inherited from the provided prototype.

No email account, webhook credential or external delivery provider is needed for this default handoff. The number and business details should be confirmed before public launch. No test message was sent to that number during development.

For an optional direct form-delivery integration, set `enquiryMode` to `webhook`, copy `.env.example` to `.env`, and configure an HTTPS adapter. The adapter must accept JSON and return 2xx after durable acceptance. This optional mode still requires an actual provider and an end-to-end inbox test. Update the public privacy information to reflect the integration you choose.

## Publishing

The owner requested public deployment on 2026-10-15, recorded with `contentApproved: true` in `site.config.json`. Local builds remain previews unless built with `SITE_LAUNCH=true`. The Amplify build uses that flag to publish indexable HTML and robots.txt. Webhook mode additionally requires `ENQUIRY_WEBHOOK_URL` and a server runtime; the deployed static website uses the WhatsApp handoff.

### AWS Amplify

Connect the `website-refresh` branch of `pkwebapp/shaadifilms` as a static web application (WEB platform). `amplify.yml` selects Node 22, builds the committed assets without installing media-generation dependencies, runs checks and integration tests, and publishes `dist/`. The Node development server is not deployed. `customHttp.yml` defines hosting headers. Apply `amplify-redirects.json` as the app's redirect rules; do not add an SPA rewrite to the home page, because this is a multipage website. The previous article URL redirects permanently and missing pages return the custom 404.

Approved article and portfolio templates are now indexable in launch mode; internal design-system and unapproved information pages remain excluded. The sitemap includes the published editorial routes. The old article URL redirects to the new candid-versus-traditional guide.

There has been no domain change or public deployment. Production HTTPS/CDN configuration, Search Console, actual traffic measurements and business-profile verification are outside the local preview.

## Editing

- `src/pages/`: page content, metadata and explicit optional routes.
- `scripts/build.mjs`: shared layout, responsive image markup, sitemap and compression.
- `scripts/publication.mjs`: indexing/publication rules.
- `assets/sf.css` and `assets/sf.js`: design and browser interactions.
- `site.config.json`: public contact and delivery-mode choices; keep credentials in environment variables.
- `src/content/articles.json`: editorial inventory.

To regenerate images after changing original photographs, install the development dependency (`npm install`) and run `npm run media`. The image helper can also use this desktop environment’s bundled image processor. `scripts/prepare-fonts.py` downloads the existing font families and their open-source notices; the saved files are already supplied.

## Verification and limits

See [UPGRADE.md](UPGRADE.md) for the implementation summary and measured asset changes. The existing structural check passes for 22 HTML outputs. Ten integration tests pass. Browser testing covers 18 principal pages at 360, 390, 768 and 1440px, plus gallery, film-player, navigation and enquiry-review interactions. This is not a complete screen-reader audit or a production Lighthouse/Core Web Vitals result.
