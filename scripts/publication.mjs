// Publication is explicit and independent of the route's template filename.
export function isPublishedPage(file, meta) {
  return file !== 'design-system.html' && !meta.noindex && !meta.draft;
}
export function shouldNoindex(file, meta, preview) {
  return preview || !isPublishedPage(file, meta);
}
