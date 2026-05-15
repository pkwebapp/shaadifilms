(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__fcd3825d._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/lib/site.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/** Canonical production domain — all other hosts redirect here. */ __turbopack_context__.s({
    "ALTERNATE_HOSTS": (()=>ALTERNATE_HOSTS),
    "CANONICAL_HOST": (()=>CANONICAL_HOST),
    "CANONICAL_SITE_URL": (()=>CANONICAL_SITE_URL)
});
const CANONICAL_SITE_URL = "https://www.shaadifilms.com";
const CANONICAL_HOST = "www.shaadifilms.com";
const ALTERNATE_HOSTS = new Set([
    "shaadifilms.com",
    "shaadifilms.io",
    "www.shaadifilms.io"
]);
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/site.ts [middleware-edge] (ecmascript)");
;
;
function shouldSkipRedirect(host) {
    return host === "localhost" || host === "127.0.0.1" || host.endsWith(".vercel.app") || host.endsWith(".local");
}
function isKnownProductionHost(host) {
    return host === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CANONICAL_HOST"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ALTERNATE_HOSTS"].has(host);
}
function middleware(request) {
    const host = request.headers.get("x-forwarded-host")?.split(":")[0] ?? request.headers.get("host")?.split(":")[0] ?? "";
    if (!host || shouldSkipRedirect(host) || !isKnownProductionHost(host)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const proto = request.headers.get("x-forwarded-proto");
    const isHttps = proto === "https" || request.nextUrl.protocol === "https:";
    const isCanonicalHost = host === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CANONICAL_HOST"];
    if (isCanonicalHost && isHttps) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const destination = new URL(`${request.nextUrl.pathname}${request.nextUrl.search}`, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$site$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["CANONICAL_SITE_URL"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(destination, 308);
}
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|eot)$).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__fcd3825d._.js.map