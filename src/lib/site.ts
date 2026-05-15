/** Canonical production domain — all other hosts redirect here. */
export const CANONICAL_SITE_URL = "https://www.shaadifilms.com";
export const CANONICAL_HOST = "www.shaadifilms.com";

/** Hostnames that should 308-redirect to the canonical www domain. */
export const ALTERNATE_HOSTS = new Set([
  "shaadifilms.com",
  "shaadifilms.io",
  "www.shaadifilms.io",
]);
