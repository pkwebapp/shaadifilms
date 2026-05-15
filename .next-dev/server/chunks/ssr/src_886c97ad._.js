module.exports = {

"[project]/src/components/common/page-header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageHeader": (()=>PageHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PageHeader({ title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-card text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-bold font-headline",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/common/page-header.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/components/common/page-header.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/page-header.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/page-header.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
}}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero-2\",\"title\":\"Timeless Stories, Artfully Told\",\"description\":\"Premium Wedding Photography & Cinematography Services in Mumbai\",\"imageUrl\":\"https://images.unsplash.com/photo-1695535074727-dd2c5a349f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYW1lcmElMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzU4NjMxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"camera equipment\"},{\"id\":\"hero-3\",\"title\":\"Cinematic & Unforgettable\",\"description\":\"Your wedding day, captured as a work of art that lasts a lifetime.\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"wedding-type-1\",\"description\":\"Hindu Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHdlZGRpbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"hindu wedding\"},{\"id\":\"wedding-type-2\",\"description\":\"Christian Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1474867985807-96ca17098cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODYyNDk2NHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"church wedding\"},{\"id\":\"wedding-type-3\",\"description\":\"Sikh Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1525135850648-b42365991054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzaWtoJTIwd2VkZGluZ3xlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"sikh wedding\"},{\"id\":\"wedding-type-4\",\"description\":\"Muslim Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtdXNsaW0lMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"muslim wedding\"},{\"id\":\"wedding-type-5\",\"description\":\"Destination Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1726682811289-968611755fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"destination wedding\"},{\"id\":\"wedding-type-6\",\"description\":\"Intimate Elopements\",\"imageUrl\":\"https://images.unsplash.com/photo-1721568818891-4a8e8d261232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlbG9wZW1lbnQlMjBjb3VwbGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"elopement couple\"},{\"id\":\"featured-1\",\"description\":\"Priya & Rohan's Goa Wedding\",\"imageUrl\":\"https://images.unsplash.com/photo-1576694667642-6f289dd54187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmVhY2h8ZW58MHx8fHwxNzU4NjUxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding beach\"},{\"id\":\"featured-2\",\"description\":\"Aisha & Sameer's Udaipur Celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1739295193565-a9137fd50451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwYWxhY2UlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"palace wedding\"},{\"id\":\"featured-3\",\"description\":\"Jasleen & Karan's Delhi Mehendi\",\"imageUrl\":\"https://images.unsplash.com/photo-1562508548-69377b81ab9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mehendi ceremony\"},{\"id\":\"featured-4\",\"description\":\"A Bride's Final Touches\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"featured-5\",\"description\":\"A Groom's Regal Portrait\",\"imageUrl\":\"https://images.unsplash.com/photo-1670291362999-00f36b631e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxncm9vbSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODYzMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"groom portrait\"},{\"id\":\"service-prewedding-1\",\"description\":\"Couple in a scenic pre-wedding shoot location\",\"imageUrl\":\"https://images.unsplash.com/photo-1617335048933-4efb94f812f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"service-prewedding-2\",\"description\":\"Candid moment during an engagement shoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1650983422936-232cacb6843f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlbmdhZ2VtZW50JTIwcGhvdG98ZW58MHx8fHwxNzU4NjM4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"engagement photo\"},{\"id\":\"service-hindu-1\",\"description\":\"Vibrant Haldi ceremony celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1671339911501-622930e159ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxoYWxkaSUyMGNlcmVtb255fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"haldi ceremony\"},{\"id\":\"service-hindu-2\",\"description\":\"Intricate Mehendi design on bride's hands\",\"imageUrl\":\"https://images.unsplash.com/photo-1757331446901-8f935a107bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWhlbmRpJTIwZGVzaWdufGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mehendi design\"},{\"id\":\"service-christian-1\",\"description\":\"Bride walking down the sunlit church aisle\",\"imageUrl\":\"https://images.unsplash.com/photo-1660286156087-911df708e663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwYWlzbGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding aisle\"},{\"id\":\"service-photo-1\",\"description\":\"Photographer capturing a wedding moment\",\"imageUrl\":\"https://images.unsplash.com/photo-1506355639690-a1f2a100689e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyfGVufDB8fHx8MTc1ODY0ODY2M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding photographer\"},{\"id\":\"service-film-1\",\"description\":\"A dramatic cinematic frame from a wedding film\",\"imageUrl\":\"https://images.unsplash.com/photo-1615632386447-50385a6b7fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwZmlsbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding film\"},{\"id\":\"service-live-1\",\"description\":\"Live streaming setup at a wedding\",\"imageUrl\":\"https://images.unsplash.com/photo-1685524989124-a14d282ae625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwbGl2ZXN0cmVhbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding livestream\"},{\"id\":\"service-guest-1\",\"description\":\"Guests enjoying a photo booth\",\"imageUrl\":\"https://images.unsplash.com/photo-1686853021307-e9e5b01cb85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwcGhvdG9ib290aHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding photobooth\"},{\"id\":\"service-deliverables-1\",\"description\":\"A beautiful luxury wedding album\",\"imageUrl\":\"https://images.unsplash.com/photo-1677658288290-2913716d4d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nJTIwYWxidW18ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding album\"},{\"id\":\"service-addons-1\",\"description\":\"Drone shot of a grand wedding venue\",\"imageUrl\":\"https://images.unsplash.com/photo-1657394399009-6da68d48cf7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZHJvbmV8ZW58MHx8fHwxNzU4NjUxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding drone\"},{\"id\":\"service-packages-1\",\"description\":\"Couple happily reviewing their wedding package options\",\"imageUrl\":\"https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWRkaW5nJTIwcGxhbm5pbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding planning\"},{\"id\":\"gallery-1\",\"description\":\"The first dance\",\"imageUrl\":\"https://images.unsplash.com/photo-1501601983405-7c7cabaa1581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nJTIwZGFuY2V8ZW58MHx8fHwxNzU4NjEwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding dance\"},{\"id\":\"gallery-2\",\"description\":\"Joyful moments with family\",\"imageUrl\":\"https://images.unsplash.com/photo-1654512721598-701864e913c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwZmFtaWx5fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding family\"},{\"id\":\"gallery-3\",\"description\":\"The grand exit\",\"imageUrl\":\"https://images.unsplash.com/photo-1731576089196-fe6c87b3287b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZXhpdHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding exit\"},{\"id\":\"gallery-4\",\"description\":\"Close-up of the wedding cake\",\"imageUrl\":\"https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwY2FrZXxlbnwwfHx8fDE3NTg2MTA0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding cake\"},{\"id\":\"gallery-5\",\"description\":\"The bride's stunning portrait\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691256999-45d69a11b197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"gallery-6\",\"description\":\"The groom looking dapper\",\"imageUrl\":\"https://images.unsplash.com/photo-1606217239566-1c893c2e110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxncm9vbSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODYzMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"groom portrait\"},{\"id\":\"about-philosophy\",\"description\":\"Premium Wedding Photography & Cinematography Services in Mumbai\",\"imageUrl\":\"https://images.unsplash.com/photo-1695535074727-dd2c5a349f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYW1lcmElMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzU4NjMxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"camera equipment\"},{\"id\":\"team-1\",\"name\":\"Prabhakar Kumar\",\"role\":\"Founder\",\"imageUrl\":\"https://picsum.photos/seed/team-pk/100/100\"},{\"id\":\"team-2\",\"name\":\"Aman Tiwari\",\"role\":\"Managing Head and Lead Cinematographer\",\"imageUrl\":\"https://picsum.photos/seed/team-aman/100/100\"},{\"id\":\"team-3\",\"name\":\"Ritik Kumar\",\"role\":\"Lead Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-ritik/100/100\"},{\"id\":\"team-4\",\"name\":\"Sumedh Marathe\",\"role\":\"DOP & Senior Cinematographer\",\"imageUrl\":\"https://picsum.photos/seed/team-sumedh/100/100\"},{\"id\":\"team-5\",\"name\":\"Haider Ali\",\"role\":\"Photo Retoucher\",\"imageUrl\":\"https://picsum.photos/seed/team-haider/100/100\"},{\"id\":\"team-6\",\"name\":\"Daniel Sutnga\",\"role\":\"Video Editor\",\"imageUrl\":\"https://picsum.photos/seed/team-daniel/100/100\"},{\"id\":\"team-7\",\"name\":\"Sai Ganesham\",\"role\":\"Candid Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-sai/100/100\"},{\"id\":\"team-8\",\"name\":\"Vinay Odnala\",\"role\":\"Videographer\",\"imageUrl\":\"https://picsum.photos/seed/team-vinay/100/100\"},{\"id\":\"team-9\",\"name\":\"Ajit Adhal\",\"role\":\"Traditional Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-ajit/100/100\"},{\"id\":\"team-10\",\"name\":\"MD Naseem Ahmad\",\"role\":\"Traditional Videographer\",\"imageUrl\":\"https://picsum.photos/seed/team-naseem/100/100\"},{\"id\":\"avatar-1\",\"description\":\"Priya & Rohan testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-priya/40/40\"},{\"id\":\"avatar-2\",\"description\":\"Aisha & Sameer testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-aisha/40/40\"},{\"id\":\"avatar-3\",\"description\":\"Jasleen & Karan testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-jasleen/40/40\"},{\"id\":\"avatar-4\",\"description\":\"Neha & Vikram testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-neha/40/40\"},{\"id\":\"avatar-5\",\"description\":\"Sunita & Raj testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-sunita/40/40\"},{\"id\":\"avatar-6\",\"description\":\"Meera & Aditya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-meera/40/40\"},{\"id\":\"avatar-7\",\"description\":\"Anjali & Dhruv testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-anjali/40/40\"},{\"id\":\"avatar-8\",\"description\":\"Kabir & Zara testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-kabir/40/40\"},{\"id\":\"avatar-9\",\"description\":\"The Sharma Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-sharma/40/40\"},{\"id\":\"avatar-10\",\"description\":\"Rohan & Sania testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-rohan-s/40/40\"},{\"id\":\"avatar-11\",\"description\":\"The Mehta Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-mehta/40/40\"},{\"id\":\"avatar-12\",\"description\":\"Alok & Divya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-alok/40/40\"},{\"id\":\"avatar-13\",\"description\":\"The Iyer Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-iyer/40/40\"},{\"id\":\"avatar-14\",\"description\":\"Mr. & Mrs. Gupta testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-gupta/40/40\"},{\"id\":\"avatar-15\",\"description\":\"Simran & Arjun testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-simran/40/40\"},{\"id\":\"avatar-16\",\"description\":\"The Khan Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-khan/40/40\"},{\"id\":\"avatar-17\",\"description\":\"Riya & Varun testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-riya/40/40\"},{\"id\":\"avatar-18\",\"description\":\"The Desai Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-desai/40/40\"},{\"id\":\"avatar-19\",\"description\":\"Pooja & Sameer testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-pooja/40/40\"},{\"id\":\"avatar-20\",\"description\":\"Nikhil & Ananya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-nikhil/40/40\"},{\"id\":\"avatar-21\",\"description\":\"Mr. & Mrs. Chatterjee testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-chatterjee/40/40\"},{\"id\":\"service-family-celebration\",\"description\":\"A joyous family birthday celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1631857455684-a54a2f03665f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5fGVufDB8fHx8MTc1ODU5MTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"birthday party\"},{\"id\":\"service-baby-kids\",\"description\":\"A tender moment from a maternity shoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1751882796518-b7ce43063643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYXRlcm5pdHklMjBzaG9vdHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"maternity shoot\"},{\"id\":\"service-religious-cultural\",\"description\":\"A sacred moment during a traditional thread ceremony\",\"imageUrl\":\"https://images.unsplash.com/photo-1551979122-3a33d9391335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjZXJlbW9ueXxlbnwwfHx8fDE3NTg2MjAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"religious ceremony\"},{\"id\":\"service-social-milestones\",\"description\":\"A surprise proposal captured beautifully\",\"imageUrl\":\"https://images.unsplash.com/photo-1758523419745-6df183fd5eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdXJwcmlzZSUyMHByb3Bvc2FsfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"surprise proposal\"},{\"id\":\"blog-1\",\"description\":\"Relaxed bride during a wedding photoshoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1742569283929-5203924e1e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWxheGVkJTIwYnJpZGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"relaxed bride\"},{\"id\":\"blog-2\",\"description\":\"Couple during a pre-wedding shoot in a palace\",\"imageUrl\":\"https://images.unsplash.com/photo-1596546458079-bceb0b6e17b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"blog-3\",\"description\":\"Cinematic shot from a wedding film\",\"imageUrl\":\"https://images.unsplash.com/photo-1716285274563-c18a1fefa17d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZmlsbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding film\"},{\"id\":\"blog-4\",\"description\":\"Bride looking radiant in her wedding photos\",\"imageUrl\":\"https://images.unsplash.com/photo-1633037387298-dc308ab1bce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"blog-5\",\"description\":\"Couple reviewing a wedding budget planner\",\"imageUrl\":\"https://images.unsplash.com/photo-1596352536485-85b79a7ea8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwYnVkZ2V0fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding budget\"},{\"id\":\"blog-6\",\"description\":\"Couple signing a contract document\",\"imageUrl\":\"https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzaWduaW5nJTIwY29udHJhY3R8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"signing contract\"},{\"id\":\"blog-7\",\"description\":\"Couple laughing during a pre-wedding photoshoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1597427681188-3ef80f2631ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"blog-8\",\"description\":\"Photographer checking the time during a wedding event\",\"imageUrl\":\"https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwZXZlbnR8ZW58MHx8fHwxNzU4NjQxMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding event\"},{\"id\":\"blog-9\",\"description\":\"Editor working on a wedding photo on a computer\",\"imageUrl\":\"https://images.unsplash.com/photo-1621600411688-4be93cd68504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmd8ZW58MHx8fHwxNzU4NjAwOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"photo editing\"},{\"id\":\"blog-10\",\"description\":\"Videographer filming a wedding ceremony\",\"imageUrl\":\"https://images.unsplash.com/photo-1737756512868-c9bba3afba1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHl8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding videography\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlaceHolderImages": (()=>PlaceHolderImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
}}),
"[project]/src/components/blog/share-buttons.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShareButtons": (()=>ShareButtons)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ShareButtons({ url, title }) {
    const [hasCopied, setHasCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fullUrl, setFullUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // This effect runs only on the client, where window is available.
        setFullUrl(window.location.origin + url);
    }, [
        url
    ]);
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(fullUrl);
        setHasCopied(true);
        setTimeout(()=>setHasCopied(false), 2000);
    };
    const encodedUrl = encodeURIComponent(fullUrl);
    const encodedTitle = encodeURIComponent(title);
    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium text-muted-foreground hidden sm:inline",
                children: "Share:"
            }, void 0, false, {
                fileName: "[project]/src/components/blog/share-buttons.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: shareLinks.facebook,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Share on Facebook",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/share-buttons.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/share-buttons.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blog/share-buttons.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: shareLinks.twitter,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Share on Twitter",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/share-buttons.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/share-buttons.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blog/share-buttons.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: shareLinks.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Share on LinkedIn",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/share-buttons.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/share-buttons.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blog/share-buttons.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "icon",
                onClick: copyToClipboard,
                "aria-label": "Copy link",
                children: hasCopied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "h-4 w-4 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/share-buttons.tsx",
                    lineNumber: 51,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/blog/share-buttons.tsx",
                    lineNumber: 51,
                    columnNumber: 69
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/blog/share-buttons.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/blog/share-buttons.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Separator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/blog/blog-post-client-content.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BlogPostClientContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$page$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/page-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$share$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/share-buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const allComments = {
    'top-10-luxury-wedding-venues-mumbai-photography': [
        {
            id: 1,
            name: "Sneha Patel",
            avatar: "https://picsum.photos/seed/comment-sneha/40/40",
            text: "This list is a lifesaver! We've been so confused about venues in Mumbai. The Taj Mahal Palace is a dream."
        },
        {
            id: 2,
            name: "Karan Malhotra",
            avatar: "https://picsum.photos/seed/comment-karan/40/40",
            text: "Great breakdown. We had our reception at the St. Regis, and the skyline views were absolutely worth it for the photos."
        },
        {
            id: 3,
            name: "Alisha Khan",
            avatar: "https://picsum.photos/seed/comment-alisha/40/40",
            text: "Thank you for including the Grand Hyatt. The modern architecture and water features look amazing. Definitely on our shortlist now."
        },
        {
            id: 4,
            name: "Rajat Verma",
            avatar: "https://picsum.photos/seed/comment-rajat/40/40",
            text: "As a wedding planner, I can vouch for this list. These venues not only look good but also have great service, which is crucial for a smooth event."
        },
        {
            id: 5,
            name: "Divya Sharma",
            avatar: "https://picsum.photos/seed/comment-divya-s/40/40",
            text: "The pictures are gorgeous! We're considering the JW Marriott in Juhu for the sunset pheras. This post just sealed the deal for us."
        },
        {
            id: 6,
            name: "Amit Desai",
            avatar: "https://picsum.photos/seed/comment-amit-d/40/40",
            text: "Four Seasons Worli has been on my mind for its rooftop views. It’s great to see it featured here. The vibe looks incredible for a cocktail night."
        },
        {
            id: 7,
            name: "Neha Singh",
            avatar: "https://picsum.photos/seed/comment-neha-s/40/40",
            text: "I attended a wedding at the Renaissance in Powai, and it truly feels like a getaway. The lakeside setting is so serene and beautiful."
        },
        {
            id: 8,
            name: "Vikram Mehta",
            avatar: "https://picsum.photos/seed/comment-vikram-m/40/40",
            text: "This is a very comprehensive list. It's helpful to get a photographer's perspective on what makes a venue photogenic."
        },
        {
            id: 9,
            name: "Priya Jain",
            avatar: "https://picsum.photos/seed/comment-priya-j/40/40",
            text: "I love the mix of iconic heritage properties and modern hotels. It gives a lot of options depending on the wedding style."
        },
        {
            id: 10,
            name: "Rahul Kapoor",
            avatar: "https://picsum.photos/seed/comment-rahul-k/40/40",
            text: "The Trident at Nariman Point at night is pure magic. That Queen's Necklace view is a priceless backdrop for any wedding."
        }
    ],
    'how-to-plan-wedding-day-timeline-for-best-photos': [
        {
            id: 1,
            name: "Priya Sharma",
            avatar: "https://picsum.photos/seed/comment-priya/40/40",
            text: "This is so helpful! We were just discussing our timeline. The tip about the Golden Hour is a game-changer."
        },
        {
            id: 2,
            name: "Ravi Kumar",
            avatar: "https://picsum.photos/seed/comment-ravi/40/40",
            text: "The advice on adding buffer time is gold. Our makeup artist ran 30 minutes late, and that buffer saved us from so much stress."
        },
        {
            id: 3,
            name: "Anjali Mehta",
            avatar: "https://picsum.photos/seed/comment-anjali/40/40",
            text: "I've been following your work for a while, and the insights you share are always so valuable. It shows how much you care about your clients."
        },
        {
            id: 4,
            name: "Vivek Singh",
            avatar: "https://picsum.photos/seed/comment-vivek/40/40",
            text: "The family portrait list idea is brilliant. It's going to save us so much chaos on the day. Thanks for the practical advice!"
        },
        {
            id: 5,
            name: "Sonia Rao",
            avatar: "https://picsum.photos/seed/comment-sonia-r/40/40",
            text: "I never would have thought to schedule time for detail shots. It makes so much sense to capture the lehenga and jewelry before the chaos begins."
        },
        {
            id: 6,
            name: "Arjun Khanna",
            avatar: "https://picsum.photos/seed/comment-arjun-k/40/40",
            text: "This timeline guide is more useful than half the articles I've read online. Super practical and from a pro's perspective. Thank you!"
        },
        {
            id: 7,
            name: "Mira Kapoor",
            avatar: "https://picsum.photos/seed/comment-mira-k/40/40",
            text: "We're having a Mumbai wedding, and the buffer time for traffic is such a real and necessary point. Glad you mentioned it."
        },
        {
            id: 8,
            name: "Jay Patel",
            avatar: "https://picsum.photos/seed/comment-jay-p/40/40",
            text: "The Golden Hour tip is so true. The best photos from my sister's wedding were taken during that time. It really does look magical."
        },
        {
            id: 9,
            name: "Rina Shah",
            avatar: "https://picsum.photos/seed/comment-rina-s/40/40",
            text: "The family portrait checklist is genius! It's going to save so much time and ensure we don't miss anyone important."
        },
        {
            id: 10,
            name: "Nikhil Gupta",
            avatar: "https://picsum.photos/seed/comment-nikhil-g/40/40",
            text: "This is a great reminder that a good timeline isn't restrictive, it's actually liberating. It allows you to be present and enjoy the day."
        }
    ],
    'cinematic-wedding-films-vs-traditional-videography': [
        {
            id: 1,
            name: "Sameer Joshi",
            avatar: "https://picsum.photos/seed/comment-sameer/40/40",
            text: "Finally, a clear explanation! We couldn't decide, but now we know we want both a cinematic film for sharing and a traditional one for the family."
        },
        {
            id: 2,
            name: "Deepika Rao",
            avatar: "https://picsum.photos/seed/comment-deepika/40/40",
            text: "The cinematic film from our wedding still gives me goosebumps. Best decision ever. Shaadifilms' work is pure art."
        },
        {
            id: 3,
            name: "Arjun Desai",
            avatar: "https://picsum.photos/seed/comment-arjun/40/40",
            text: "This article perfectly explains why we chose a cinematic film. It's about capturing the feeling, not just the events. Great post!"
        },
        {
            id: 4,
            name: "Neha Gupta",
            avatar: "https://picsum.photos/seed/comment-neha-g/40/40",
            text: "Your hybrid approach makes so much sense. I was worried I'd have to choose. It's great to know we can have both the artistic film and the full record."
        },
        {
            id: 5,
            name: "Kunal Varma",
            avatar: "https://picsum.photos/seed/comment-kunal-v/40/40",
            text: "The storytelling aspect of cinematic films is what draws me in. It feels so much more personal than just a recording of the day."
        },
        {
            id: 6,
            name: "Priya Reddy",
            avatar: "https://picsum.photos/seed/comment-priya-r/40/40",
            text: "I showed this to my parents to help them understand the difference. Now they're as excited about the cinematic highlight as I am!"
        },
        {
            id: 7,
            name: "Rajesh Kumar",
            avatar: "https://picsum.photos/seed/comment-rajesh-k/40/40",
            text: "The explanation of the editing process for cinematic films really highlights the artistry involved. It's clearly a lot more work for a reason."
        },
        {
            id: 8,
            name: "Ananya Iyer",
            avatar: "https://picsum.photos/seed/comment-ananya-i/40/40",
            text: "The 'shareable' aspect is so important. A 5-minute film is perfect for friends and social media, while the 3-hour video is for us and the family."
        },
        {
            id: 9,
            name: "Siddharth Menon",
            avatar: "https://picsum.photos/seed/comment-sid-m/40/40",
            text: "The use of drones and gimbals really does make a difference. The footage in cinematic films looks so professional and smooth."
        },
        {
            id: 10,
            name: "Ishika Singh",
            avatar: "https://picsum.photos/seed/comment-ishika-s/40/40",
            text: "Great article. It's so important for couples to understand what they are paying for. This transparency is fantastic."
        }
    ],
    'must-have-shots-for-your-mumbai-wedding-album': [
        {
            id: 1,
            name: "Nisha Agarwal",
            avatar: "https://picsum.photos/seed/comment-nisha/40/40",
            text: "Making a list of these right now for our photographer! The 'Details Shot' is something I would have totally forgotten about."
        },
        {
            id: 2,
            name: "Raj Singh",
            avatar: "https://picsum.photos/seed/comment-raj/40/40",
            text: "The 'Baraat's Energy' shot is so true. It's one of our favorite photos, captures the chaos and joy perfectly."
        },
        {
            id: 3,
            name: "Fatima Khan",
            avatar: "https://picsum.photos/seed/comment-fatima/40/40",
            text: "So glad you included the Vidaai. It was an emotional moment, but the photos are some of the most beautiful and meaningful ones we have."
        },
        {
            id: 4,
            name: "Simran Kaur",
            avatar: "https://picsum.photos/seed/comment-simran/40/40",
            text: "This is a fantastic checklist. I shared it with my fiance. We especially love the idea of capturing the groom's reaction to the bride's entrance."
        },
        {
            id: 5,
            name: "Rahul Verma",
            avatar: "https://picsum.photos/seed/comment-rahul-v/40/40",
            text: "The First Look photo is a must! We did one and it was such a special, private moment before the ceremony. The pictures are so emotional."
        },
        {
            id: 6,
            name: "Aarti Mishra",
            avatar: "https://picsum.photos/seed/comment-aarti-m/40/40",
            text: "I'm obsessed with candid shots. The point about capturing guest moments is so important. They are a huge part of the day!"
        },
        {
            id: 7,
            name: "Karan Sharma",
            avatar: "https://picsum.photos/seed/comment-karan-s/40/40",
            text: "The solo portraits are a great idea. It’s nice to have that one perfect shot of the bride and groom in all their glory."
        },
        {
            id: 8,
            name: "Sneha Reddy",
            avatar: "https://picsum.photos/seed/comment-sneha-r/40/40",
            text: "This list is so practical. It's a great blend of the traditional must-haves and the modern, emotional moments. Thank you!"
        },
        {
            id: 9,
            name: "Manoj Tiwari",
            avatar: "https://picsum.photos/seed/comment-manoj-t/40/40",
            text: "The Jaimala shot is always so fun and full of energy. Definitely a highlight of any wedding album."
        },
        {
            id: 10,
            name: "Jia Ali",
            avatar: "https://picsum.photos/seed/comment-jia-a/40/40",
            text: "Love the emphasis on storytelling through the photos. It's not just a checklist, but a guide to capturing the narrative of the day."
        }
    ],
    'how-to-budget-for-wedding-photography-videography': [
        {
            id: 1,
            name: "Aditya Verma",
            avatar: "https://picsum.photos/seed/comment-aditya/40/40",
            text: "The 10-15% rule is a really helpful starting point. It's easy to get lost in all the wedding expenses."
        },
        {
            id: 2,
            name: "Ishita Gupta",
            avatar: "https://picsum.photos/seed/comment-ishita/40/40",
            text: "This is great advice. We prioritized photography, and looking back, it was the best decision. The flowers wilt, but the photos are forever!"
        },
        {
            id: 3,
            name: "Rahul Bajaj",
            avatar: "https://picsum.photos/seed/comment-rahul/40/40",
            text: "Thank you for explaining what influences the cost. It helps to understand why different packages have different prices. Very transparent."
        },
        {
            id: 4,
            name: "Meera Krishnan",
            avatar: "https://picsum.photos/seed/comment-meera-k/40/40",
            text: "Booking in advance is a great tip. We secured our favorite photographer 14 months early and it saved us a lot of stress."
        },
        {
            id: 5,
            name: "Ankit Sharma",
            avatar: "https://picsum.photos/seed/comment-ankit-s/40/40",
            text: "The breakdown of what's included in different packages is super useful for comparing options between photographers."
        },
        {
            id: 6,
            name: "Pooja Mehta",
            avatar: "https://picsum.photos/seed/comment-pooja-m/40/40",
            text: "It's reassuring to see a studio be so open about pricing factors. Builds a lot of trust."
        },
        {
            id: 7,
            name: "Sameer Agarwal",
            avatar: "https://picsum.photos/seed/comment-sameer-a/40/40",
            text: "This article made me realize I need to think about deliverables more carefully. The album quality and film length are important details."
        },
        {
            id: 8,
            name: "Divya Patel",
            avatar: "https://picsum.photos/seed/comment-divya-p/40/40",
            text: "The advice to have a clear conversation about our needs is great. It's better to be upfront to get the right package."
        },
        {
            id: 9,
            name: "Rohan Desai",
            avatar: "https://picsum.photos/seed/comment-rohan-d/40/40",
            text: "I appreciate the point about brand reputation. You're not just paying for photos, you're paying for experience and peace of mind."
        },
        {
            id: 10,
            name: "Kavita Singh",
            avatar: "https://picsum.photos/seed/comment-kavita-s/40/40",
            text: "This is a must-read for any couple starting their wedding planning. Puts things into perspective."
        }
    ],
    'understanding-your-wedding-photography-contract': [
        {
            id: 1,
            name: "Kabir Shah",
            avatar: "https://picsum.photos/seed/comment-kabir/40/40",
            text: "Excellent article. The part about image rights and model release is something every couple should read carefully."
        },
        {
            id: 2,
            name: "Meera Iyer",
            avatar: "https://picsum.photos/seed/comment-meera/40/40",
            text: "The cancellation policy section gave us peace of mind. It's important to know what happens if plans change."
        },
        {
            id: 3,
            name: "Sanjay Kumar",
            avatar: "https://picsum.photos/seed/comment-sanjay/40/40",
            text: "This is so important. A clear contract is the sign of a true professional. Thanks for breaking it down so clearly."
        },
        {
            id: 4,
            name: "Pooja Singh",
            avatar: "https://picsum.photos/seed/comment-pooja-s/40/40",
            text: "I never thought about the delivery timeline clause. Adding that to my list of things to check! Super helpful."
        },
        {
            id: 5,
            name: "Alok Nath",
            avatar: "https://picsum.photos/seed/comment-alok-n/40/40",
            text: "The 'Services and Deliverables' section is crucial. It's so important to have everything in writing. No room for misunderstandings."
        },
        {
            id: 6,
            name: "Tanvi Desai",
            avatar: "https://picsum.photos/seed/comment-tanvi-d/40/40",
            text: "The point about the photographer's cancellation policy is vital. Knowing they have a backup plan is a huge relief."
        },
        {
            id: 7,
            name: "Rajiv Malhotra",
            avatar: "https://picsum.photos/seed/comment-rajiv-m/40/40",
            text: "This article empowered me to ask the right questions before signing. Thank you for this guide."
        },
        {
            id: 8,
            name: "Naina Verma",
            avatar: "https://picsum.photos/seed/comment-naina-v/40/40",
            text: "Understanding the copyright vs. usage rights is a game-changer. It's good to know what we can and can't do with our photos."
        },
        {
            id: 9,
            name: "Harish Gupta",
            avatar: "https://picsum.photos/seed/comment-harish-g/40/40",
            text: "This is a testament to your studio's professionalism. A transparent contract is a green flag."
        },
        {
            id: 10,
            name: "Sunita Sharma",
            avatar: "https://picsum.photos/seed/comment-sunita-s/40/40",
            text: "The payment schedule breakdown is a good reminder to get everything clearly documented. No one wants financial surprises."
        }
    ],
    'importance-of-pre-wedding-photoshoot': [
        {
            id: 1,
            name: "Aarav Desai",
            avatar: "https://picsum.photos/seed/comment-aarav/40/40",
            text: "We were on the fence about a pre-wedding shoot, but this convinced us. The 'camera rehearsal' idea makes so much sense."
        },
        {
            id: 2,
            name: "Zara Hussain",
            avatar: "https://picsum.photos/seed/comment-zara/40/40",
            text: "Our pre-wedding shoot was one of our favorite parts of the wedding experience! It was so much fun and the casual photos are beautiful."
        },
        {
            id: 3,
            name: "Vikram Choudhary",
            avatar: "https://picsum.photos/seed/comment-vikram-c/40/40",
            text: "The point about building a connection with the photographer is spot on. We were so much more relaxed on our wedding day because we already knew our photo team."
        },
        {
            id: 4,
            name: "Anika Reddy",
            avatar: "https://picsum.photos/seed/comment-anika/40/40",
            text: "We used our pre-wedding photos for our 'Save the Dates' and everyone loved them! It was a great way to set the tone for our wedding."
        },
        {
            id: 5,
            name: "Rohan Mehta",
            avatar: "https://picsum.photos/seed/comment-rohan-m/40/40",
            text: "It's a great excuse to have a fun, romantic day out during the stressful wedding planning period. I'm so glad we did it."
        },
        {
            id: 6,
            name: "Sana Khan",
            avatar: "https://picsum.photos/seed/comment-sana-k/40/40",
            text: "I was so nervous about being in front of the camera. The pre-wedding shoot was a lifesaver. It made me so much more confident for the big day."
        },
        {
            id: 7,
            name: "Aditi Singh",
            avatar: "https://picsum.photos/seed/comment-aditi-s/40/40",
            text: "We chose a location that was special to us, and it made the photos so much more meaningful. This article is right, it really adds to the story."
        },
        {
            id: 8,
            name: "Karan Gill",
            avatar: "https://picsum.photos/seed/comment-karan-g/40/40",
            text: "The casual, candid photos from our pre-wedding shoot are some of my favorites. They capture our real personalities."
        },
        {
            id: 9,
            name: "Natasha Kumar",
            avatar: "https://picsum.photos/seed/comment-natasha-k/40/40",
            text: "If you're debating it, just do it! It's an investment you won't regret. The experience and the photos are priceless."
        },
        {
            id: 10,
            name: "Yash Agarwal",
            avatar: "https://picsum.photos/seed/comment-yash-a/40/40",
            text: "Great article. It perfectly summarizes all the reasons why a pre-wedding shoot is more than just 'extra photos'."
        }
    ],
    'full-day-vs-half-day-coverage-mumbai-wedding': [
        {
            id: 1,
            name: "Rohan Kapoor",
            avatar: "https://picsum.photos/seed/comment-rohank/40/40",
            text: "Full-day coverage was essential for our Mumbai wedding. The getting ready shots and the late-night dance floor photos are priceless."
        },
        {
            id: 2,
            name: "Sonia Mehta",
            avatar: "https://picsum.photos/seed/comment-sonia/40/40",
            text: "We initially thought of half-day, but this article makes a great case for full-day. The story really is in the moments in between."
        },
        {
            id: 3,
            name: "Kunal Shah",
            avatar: "https://picsum.photos/seed/comment-kunal/40/40",
            text: "The point about Mumbai traffic is so true! Having that buffer with full-day coverage saved us. Highly recommend it."
        },
        {
            id: 4,
            name: "Diya Sharma",
            avatar: "https://picsum.photos/seed/comment-diya/40/40",
            text: "We went with full-day coverage and have zero regrets. The photos of my mom getting emotional during my 'getting ready' are some of my most cherished ones."
        },
        {
            id: 5,
            name: "Anuj Gupta",
            avatar: "https://picsum.photos/seed/comment-anuj-g/40/40",
            text: "This article helped us make our decision. Full-day coverage just seems less stressful and more comprehensive. You don't want to be a clock-watcher on your wedding day."
        },
        {
            id: 6,
            name: "Trisha Singh",
            avatar: "https://picsum.photos/seed/comment-trisha-s/40/40",
            text: "The getting ready shots were so important to me. That's where the story begins! Full-day coverage is the only way to capture that."
        },
        {
            id: 7,
            name: "Vivek Anand",
            avatar: "https://picsum.photos/seed/comment-vivek-a/40/40",
            text: "For a multi-location wedding in Mumbai, half-day seems impossible. Full-day is the only practical option."
        },
        {
            id: 8,
            name: "Neha Choudhury",
            avatar: "https://picsum.photos/seed/comment-neha-c/40/40",
            text: "The best candid moments happen when you're not rushing. Full-day coverage allows for that space and spontaneity."
        },
        {
            id: 9,
            name: "Saurabh Jain",
            avatar: "https://picsum.photos/seed/comment-saurabh-j/40/40",
            text: "Thank you for this clear comparison. It's a big decision and this helps a lot."
        },
        {
            id: 10,
            name: "Esha Verma",
            avatar: "https://picsum.photos/seed/comment-esha-v/40/40",
            text: "We were worried about the cost, but after reading this, we see full-day coverage as an investment in the complete story of our day."
        }
    ],
    'understanding-post-production-edit-photos-to-perfection': [
        {
            id: 1,
            name: "Vikram Rathore",
            avatar: "https://picsum.photos/seed/comment-vikram/40/40",
            text: "Fascinating to see the process! I never realized how much work goes into editing after the wedding day is over."
        },
        {
            id: 2,
            name: "Pooja Reddy",
            avatar: "https://picsum.photos/seed/comment-pooja/40/40",
            text: "The color grading makes such a huge difference. That signature style is exactly why we chose you guys!"
        },
        {
            id: 3,
            name: "Amitabh Ghosh",
            avatar: "https://picsum.photos/seed/comment-amitabh/40/40",
            text: "This explains why it takes time to get the photos back! It's great to see the level of care and artistry involved. Worth the wait."
        },
        {
            id: 4,
            name: "Sunita Narayan",
            avatar: "https://picsum.photos/seed/comment-sunita/40/40",
            text: "I love that you do advanced retouching on key portraits. It's the little details that make the photos look so polished and professional."
        },
        {
            id: 5,
            name: "Rajeev Kumar",
            avatar: "https://picsum.photos/seed/comment-rajeev-k/40/40",
            text: "The 'culling' process sounds intense! It's good to know that only the absolute best shots make it to the final gallery."
        },
        {
            id: 6,
            name: "Isha Malhotra",
            avatar: "https://picsum.photos/seed/comment-isha-m/40/40",
            text: "The distinction between color correction and color grading is so interesting. It's the grading that really creates the mood."
        },
        {
            id: 7,
            name: "Anil Kapoor",
            avatar: "https://picsum.photos/seed/comment-anil-k/40/40",
            text: "This post gives me a new appreciation for the art of photography. It's so much more than just pointing and shooting."
        },
        {
            id: 8,
            name: "Malaika Arora",
            avatar: "https://picsum.photos/seed/comment-malaika-a/40/40",
            text: "The goal of retouching being to look 'stunning without looking edited' is perfectly put. That's exactly what you want."
        },
        {
            id: 9,
            name: "Zoya Akhtar",
            avatar: "https://picsum.photos/seed/comment-zoya-a/40/40",
            text: "The final quality check shows a real commitment to excellence. It's that attention to detail that sets a luxury service apart."
        },
        {
            id: 10,
            name: "Farhan Siddiqui",
            avatar: "https://picsum.photos/seed/comment-farhan-s/40/40",
            text: "Great insight into the behind-the-scenes work. It helps manage expectations on delivery times too."
        }
    ],
    'decoding-wedding-videography-styles': [
        {
            id: 1,
            name: "Imran Ali",
            avatar: "https://picsum.photos/seed/comment-imran/40/40",
            text: "Great explanation of the different styles. The hybrid approach of cinematic + documentary sounds like the perfect combination."
        },
        {
            id: 2,
            name: "Divya Nair",
            avatar: "https://picsum.photos/seed/comment-divya/40/40",
            text: "We love our short cinematic film. It's so easy to share with friends, and we watch it all the time. The long video is great for our parents."
        },
        {
            id: 3,
            name: "Harsh Patel",
            avatar: "https://picsum.photos/seed/comment-harsh/40/40",
            text: "This article helped me finally understand what my fiancée meant by 'cinematic'. Now I'm excited about it too!"
        },
        {
            id: 4,
            name: "Tanvi Sharma",
            avatar: "https://picsum.photos/seed/comment-tanvi/40/40",
            text: "The 'storytelling' style sounds so personal and beautiful. I love the idea of using audio from letters or interviews."
        },
        {
            id: 5,
            name: "Ravi Goel",
            avatar: "https://picsum.photos/seed/comment-ravi-g/40/40",
            text: "The short-form social media style is a great add-on. We got a Reel and it was so fun to share it the next day."
        },
        {
            id: 6,
            name: "Aisha Khan",
            avatar: "https://picsum.photos/seed/comment-aisha-k/40/40",
            text: "This is a really helpful guide for couples who don't know the terminology. It makes it easier to find a videographer whose style matches your vision."
        },
        {
            id: 7,
            name: "Sanjay Reddy",
            avatar: "https://picsum.photos/seed/comment-sanjay-r/40/40",
            text: "The hybrid approach is the best of both worlds. You get the art and the archive. Smart."
        },
        {
            id: 8,
            name: "Priya Malik",
            avatar: "https://picsum.photos/seed/comment-priya-m/40/40",
            text: "I never realized how much the editing and music choice contribute to the final feel of the film. This is so insightful."
        },
        {
            id: 9,
            name: "Arun Kumar",
            avatar: "https://picsum.photos/seed/comment-arun-k/40/40",
            text: "Cinematic is definitely the way to go for us. We want a movie of our day, not just a recording."
        },
        {
            id: 10,
            name: "Nitya Rao",
            avatar: "https://picsum.photos/seed/comment-nitya-r/40/40",
            text: "I love that you offer a full documentary video as well. My parents will be so happy to have that."
        }
    ]
};
function BlogPostClientContent({ post, relatedPosts, slug }) {
    const [randomLikes, setRandomLikes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Generate random numbers and select comments only on the client side to avoid hydration mismatch
        setRandomLikes(Math.floor(Math.random() * (250 - 50 + 1) + 50));
        const postComments = allComments[slug] || [];
        const randomCommentCount = Math.floor(Math.random() * (10 - 4 + 1)) + 4;
        setComments(postComments.slice(0, randomCommentCount));
    }, [
        slug
    ]);
    const authorAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((img)=>img.id.startsWith('team-') && post.author.toLowerCase().includes(img.name?.split(' ')[0].toLowerCase() || ''));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$page$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageHeader"], {
                title: post.title,
                description: ""
            }, void 0, false, {
                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container max-w-4xl py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "prose lg:prose-lg max-w-none mx-auto",
                        children: [
                            post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: post.image.imageUrl,
                                    alt: post.title,
                                    fill: true,
                                    className: "object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                    lineNumber: 170,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                children: [
                                                    authorAvatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: authorAvatar.imageUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 42
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: post.author.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 182,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: post.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: new Date(post.date).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$share$2d$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareButtons"], {
                                        url: `/blog/${post.slug}`,
                                        title: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prose-p:text-muted-foreground prose-headings:text-foreground prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground",
                                dangerouslySetInnerHTML: {
                                    __html: post.content || ''
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "my-12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                    className: "w-4 h-4 text-pink-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        randomLikes || '...',
                                                        " Likes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                            lineNumber: 206,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-headline text-xl text-foreground",
                                                children: [
                                                    "Community Discussion (",
                                                    comments.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 211,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 space-y-6",
                                children: comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: comment.avatar,
                                                        alt: comment.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: comment.name.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 220,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-foreground",
                                                        children: comment.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground text-sm",
                                                        children: comment.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 224,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, comment.id, true, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 219,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "my-12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-headline text-3xl text-center mb-8",
                                children: "More From Our Journal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: relatedPosts.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${p.slug}`,
                                        className: "group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-hidden rounded-lg mb-4",
                                                children: p.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: p.image.imageUrl,
                                                    alt: p.title,
                                                    width: 400,
                                                    height: 250,
                                                    className: "object-cover aspect-[4/3] w-full transition-transform group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 40
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 240,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg group-hover:text-primary transition-colors",
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 243,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground line-clamp-2",
                                                children: p.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                                lineNumber: 244,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                        lineNumber: 239,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/blog/blog-post-client-content.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=src_886c97ad._.js.map