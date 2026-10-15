# Editorial upgrade — 14 October 2026

The current site replaces the main issues from the earlier audit with reviewable local improvements. Scores remain editorial judgments; a numeric target is not a substitute for verification.

## Design

The homepage now opens with a composed text-and-film layout on desktop and introduces the service and booking action before the film on mobile. Shared spacing, editorial heading measures, story cards, Journal layouts, service rows and forms have been refined. Images retain their full proportions. The existing brand palette, Book now label and fixed lower-right WhatsApp control remain.

## Content and navigation

Portfolio entries open the photograph actually selected, instead of sending every title to one unrelated collection. The portfolio is described honestly as selected photographs. No fictional couples, quotes, reviews, venues or client stories were created.

Six new guides join the original candid-versus-traditional article: wedding timelines, pre-wedding planning, film choices, nikah coverage, church wedding preparation and corporate-event briefs. Related links now lead to those guides. The service inventory remains intact.

## Enquiry and usability

The default journey reviews details and prepares a WhatsApp message, with an explicit visitor-controlled send step. No failed email integration or pretend success is presented. The previous optional webhook adapter remains available as a separately configured mode.

Required-field semantics and field-specific errors are connected. Dates and phone numbers have clearer validation. Photograph and film overlays receive focus when opened and return it when closed. Portfolio filters can be shared as query URLs. Desktop dropdowns use a consistent click/keyboard interaction.

## SEO

Approved article and collection templates no longer have a permanent noindex rule. Publication rules control both indexing and sitemap inclusion. All seven articles have accurate editorial markup and route-specific titles. The local preview intentionally remains protected from indexing until public launch is approved.

## Measured media changes

The earlier homepage referenced 5,366,277 bytes of JPEG files. The current homepage’s default image sources reference 911,170 bytes, approximately 83% less, despite the added editorial cards. These are referenced-file totals, including lazy images; they are not initial-transfer measurements.

Responsive variants are available for every content photograph. The image viewer opens original files only when requested. Mobile video does not load its source until Play is selected. Fonts are served locally (approximately 112 kB of distinct WOFF2 files). At the recorded build, the stylesheet was approximately 10.6 kB and application script 6.3 kB with Brotli compression. Sizes can change slightly after subsequent edits.

## Verification

- Structural checks pass across 22 HTML outputs, including the 404 page.
- Ten integration tests pass: document response, Brotli, image type/caching, conditional requests, video ranges, article redirect, real 404, enquiry rejection/validation and publication behaviour.
- 72 browser layout checks pass: 18 principal routes × four widths (360, 390, 768 and 1440px), with no horizontal overflow, draft markers or broken loaded images in the checked states.
- Gallery selection, filter URLs, modal focus/Escape, desktop navigation, adaptive form options and review generation were exercised in the browser.
- The WhatsApp review was tested with synthetic details. The final send link was not clicked and no message was sent.

## What still requires real business or production evidence

Confirm the contact number, public business information, imagery permissions and final booking/data-use policies before launch. Client quotes, team portraits and complete client case studies need real approved material. Optional email/webhook delivery needs a provider and inbox test if you choose that mode. Production network conditions, CDN, Search Console and field loading/interaction measurements must be checked after hosting. No invented Lighthouse score or performance certification is claimed.
