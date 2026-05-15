(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/pages/wedding-location/sections/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HERO_VIDEO_URL = "https://www.youtube.com/watch?v=Hx-t1NOsTJE";
const HeroSection = ({ content, videoLink })=>{
    _s();
    const embedSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSection.useMemo[embedSrc]": ()=>{
            const urlToUse = videoLink || HERO_VIDEO_URL;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYouTubeEmbedUrl"])(urlToUse);
        }
    }["HeroSection.useMemo[embedSrc]"], [
        videoLink
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[92vh] w-full overflow-hidden text-white bg-[#1A1A1A]",
        children: [
            embedSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: embedSrc,
                        title: "Shaadifilms hero video",
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none",
                        style: {
                            width: "100vw",
                            height: "56.25vw",
                            minHeight: "100vh",
                            minWidth: "177.77vh",
                            border: 0
                        },
                        frameBorder: "0",
                        allow: "autoplay; encrypted-media; picture-in-picture",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-20 flex items-center justify-center py-20 md:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-5xl px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b84b6a] md:text-sm",
                            children: content.tagline
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-headline text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
                            children: content.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/95",
                            children: content.description
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/book",
                                    className: "rounded-lg bg-[#b84b6a] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 inline-block",
                                    children: "Check Availability"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/packages",
                                    className: "rounded-lg border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-white/10",
                                    children: "Get Wedding Quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/wedding-location/sections/HeroSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(HeroSection, "TFYLF+17jDTjulWweZIBiOYyGEs=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DetailsOne = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-card py-20 md:py-28 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-headline text-3xl md:text-5xl font-bold text-[#333333] leading-tight",
                    children: content.title
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-[#666666] font-normal",
                    children: [
                        "Welcome to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            className: "font-semibold text-[#666666]",
                            children: content.welcomeBrand ?? "Shaadifilms"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx",
                            lineNumber: 16,
                            columnNumber: 22
                        }, this),
                        ", ",
                        content.paragraph
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
};
_c = DetailsOne;
const __TURBOPACK__default__export__ = DetailsOne;
var _c;
__turbopack_context__.k.register(_c, "DetailsOne");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
;
;
const iconMap = {
    users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    video: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"]
};
const WhyShaadifilms = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-20 md:pt-28 pb-16 md:pb-24 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-headline text-3xl md:text-5xl font-bold text-[#333333] leading-tight",
                            children: content.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#666666] font-normal",
                            children: content.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-20 md:space-y-24 pb-24 md:pb-32",
                    children: content.items.map((item, idx)=>{
                        const Icon = iconMap[item.iconKey];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid items-center gap-12 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[4/3] w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.img,
                                                alt: item.alt,
                                                fill: true,
                                                className: "object-cover",
                                                sizes: "(max-width: 768px) 100vw, 520px",
                                                priority: idx === 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                                lineNumber: 40,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                            lineNumber: 39,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                        lineNumber: 38,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-10 w-10 text-[#9b3c5c]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-6 font-headline text-2xl md:text-4xl font-bold text-[#2b2420]",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#6b778a]",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                            lineNumber: 33,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = WhyShaadifilms;
const __TURBOPACK__default__export__ = WhyShaadifilms;
var _c;
__turbopack_context__.k.register(_c, "WhyShaadifilms");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WeddingVenues = ({ content })=>{
    _s();
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hotels");
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startX, setStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollLeft, setScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const venues = activeTab === "hotels" ? content.luxuryHotels : content.farmhousesResorts;
    const handleMouseDown = (e)=>{
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 1.5;
        if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    const stopDragging = ()=>setIsDragging(false);
    const scrollByButton = (direction)=>{
        if (scrollRef.current) {
            const cardEl = scrollRef.current.querySelector("[data-venue-card]");
            const cardWidth = cardEl?.clientWidth || 320;
            const gap = 24;
            const moveAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
            scrollRef.current.scrollBy({
                left: moveAmount,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 py-20 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12 md:mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2420] leading-tight",
                            children: content.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-[#6b778a]",
                            children: content.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-2 mb-10 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab("hotels"),
                            className: `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "hotels" ? "bg-[#b84b6a] text-white shadow-md" : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#b84b6a] hover:text-white hover:shadow-md"}`,
                            children: content.tabHotelsLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab("farmhouses"),
                            className: `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "farmhouses" ? "bg-[#b84b6a] text-white shadow-md" : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#b84b6a] hover:text-white hover:shadow-md"}`,
                            children: content.tabFarmhousesLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-[1200px] mx-auto px-2 md:px-4 min-h-[450px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>scrollByButton("left"),
                            className: "absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100",
                            "aria-label": "Previous slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            onMouseDown: handleMouseDown,
                            onMouseMove: handleMouseMove,
                            onMouseUp: stopDragging,
                            onMouseLeave: stopDragging,
                            className: "flex gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing py-4 scrollbar-hide snap-x snap-mandatory items-stretch",
                            style: {
                                scrollbarWidth: "none",
                                msOverflowStyle: "none"
                            },
                            children: venues.map((venue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-venue-card": true,
                                    className: "min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] flex-shrink-0 snap-center h-[400px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 h-full flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3] w-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: venue.image,
                                                    alt: venue.name,
                                                    fill: true,
                                                    className: "object-cover",
                                                    sizes: "(max-width: 640px) 280px, (max-width: 768px) 300px, 340px"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5 md:p-6 flex-1 flex flex-col justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-headline text-xl md:text-2xl font-bold text-[#2b2420]",
                                                        children: venue.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[#6b778a] text-sm md:text-base",
                                                        children: venue.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)
                                }, venue.id, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this))
                        }, activeTab, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>scrollByButton("right"),
                            className: "absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100",
                            "aria-label": "Next slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
};
_s(WeddingVenues, "FUXB09SZC4UheTW3jYzcUtlxF20=");
_c = WeddingVenues;
const __TURBOPACK__default__export__ = WeddingVenues;
var _c;
__turbopack_context__.k.register(_c, "WeddingVenues");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/carousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Carousel": (()=>Carousel),
    "CarouselContent": (()=>CarouselContent),
    "CarouselItem": (()=>CarouselItem),
    "CarouselNext": (()=>CarouselNext),
    "CarouselPrevious": (()=>CarouselPrevious)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useCarousel() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
_s(useCarousel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const Carousel = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s1(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref)=>{
    _s1();
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollNext, setCanScrollNext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[onSelect]": (api)=>{
            if (!api) {
                return;
            }
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        }
    }["Carousel.useCallback[onSelect]"], []);
    const scrollPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollPrev]": ()=>{
            api?.scrollPrev();
        }
    }["Carousel.useCallback[scrollPrev]"], [
        api
    ]);
    const scrollNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[scrollNext]": ()=>{
            api?.scrollNext();
        }
    }["Carousel.useCallback[scrollNext]"], [
        api
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Carousel.useCallback[handleKeyDown]": (event)=>{
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        }
    }["Carousel.useCallback[handleKeyDown]"], [
        scrollPrev,
        scrollNext
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!api || !setApi) {
                return;
            }
            setApi(api);
        }
    }["Carousel.useEffect"], [
        api,
        setApi
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!api) {
                return;
            }
            onSelect(api);
            api.on("reInit", onSelect);
            api.on("select", onSelect);
            return ({
                "Carousel.useEffect": ()=>{
                    api?.off("select", onSelect);
                }
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            onKeyDownCapture: handleKeyDown,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 137,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.tsx",
        lineNumber: 124,
        columnNumber: 7
    }, this);
}, "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
})), "72w3/pym1wz2ZcTGqySg56b8KiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c1 = Carousel;
Carousel.displayName = "Carousel";
const CarouselContent = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/carousel.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}, "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
})), "YNqN7/p8l2NfYueiPechI4IqsYo=", false, function() {
    return [
        useCarousel
    ];
});
_c3 = CarouselContent;
CarouselContent.displayName = "CarouselContent";
const CarouselItem = /*#__PURE__*/ _s3((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = _s3(({ className, ...props }, ref)=>{
    _s3();
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/carousel.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}, "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
})), "bPPpMbUdjWnfcwMzP4altEp5ZJs=", false, function() {
    return [
        useCarousel
    ];
});
_c5 = CarouselItem;
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = /*#__PURE__*/ _s4((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = _s4(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s4();
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/carousel.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}, "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
})), "StVzzFT/dKvE6v0nHx014nh7DNA=", false, function() {
    return [
        useCarousel
    ];
});
_c7 = CarouselPrevious;
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = /*#__PURE__*/ _s5((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = _s5(({ className, variant = "outline", size = "icon", ...props }, ref)=>{
    _s5();
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/carousel.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/carousel.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}, "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
})), "VthXVrvg+0LPsG5FRGeAaBGswm4=", false, function() {
    return [
        useCarousel
    ];
});
_c9 = CarouselNext;
CarouselNext.displayName = "CarouselNext";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Carousel$React.forwardRef");
__turbopack_context__.k.register(_c1, "Carousel");
__turbopack_context__.k.register(_c2, "CarouselContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "CarouselContent");
__turbopack_context__.k.register(_c4, "CarouselItem$React.forwardRef");
__turbopack_context__.k.register(_c5, "CarouselItem");
__turbopack_context__.k.register(_c6, "CarouselPrevious$React.forwardRef");
__turbopack_context__.k.register(_c7, "CarouselPrevious");
__turbopack_context__.k.register(_c8, "CarouselNext$React.forwardRef");
__turbopack_context__.k.register(_c9, "CarouselNext");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
_c1 = Avatar;
Avatar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const AvatarImage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-full w-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
_c3 = AvatarImage;
AvatarImage.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"].displayName;
const AvatarFallback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/avatar.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this));
_c5 = AvatarFallback;
AvatarFallback.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Avatar$React.forwardRef");
__turbopack_context__.k.register(_c1, "Avatar");
__turbopack_context__.k.register(_c2, "AvatarImage$React.forwardRef");
__turbopack_context__.k.register(_c3, "AvatarImage");
__turbopack_context__.k.register(_c4, "AvatarFallback$React.forwardRef");
__turbopack_context__.k.register(_c5, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
"use client";
;
;
;
;
;
;
const ClientsSays = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full max-w-full overflow-x-hidden py-12 md:py-24 lg:py-32 bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container grid items-center justify-center gap-4 px-3 text-center sm:px-4 md:px-6 max-w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight font-headline",
                            children: content.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto max-w-[600px] min-w-0 px-1 text-muted-foreground text-sm leading-relaxed sm:text-base sm:px-0 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed break-words",
                            children: content.subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full min-w-0 max-w-6xl mx-auto mt-6 sm:mt-8 px-0 sm:px-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Carousel"], {
                        opts: {
                            align: "start",
                            loop: true
                        },
                        plugins: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                                delay: 5000,
                                stopOnInteraction: true
                            })
                        ],
                        className: "w-full min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselContent"], {
                                className: "-ml-2 sm:-ml-4",
                                children: content.testimonials.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                        className: "min-w-0 basis-full pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-1 h-full min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "h-full flex flex-col min-w-0 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        className: "pb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                            className: "w-8 h-8 shrink-0 text-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "flex-1 min-w-0 pt-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground text-sm sm:text-base break-words",
                                                            children: [
                                                                '"',
                                                                item.text,
                                                                '"'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                                        className: "flex items-center gap-3 sm:gap-4 mt-auto flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                className: "shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                        src: item.image,
                                                                        alt: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                        lineNumber: 65,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                        children: item.name.split(" ").map((n)=>n[0]).join("").slice(0, 2).toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                        lineNumber: 66,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold truncate",
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs sm:text-sm text-muted-foreground truncate",
                                                                        children: item.location
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                        lineNumber: 77,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselPrevious"], {
                                className: "hidden sm:flex -left-8 md:-left-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselNext"], {
                                className: "hidden sm:flex -right-8 md:-right-12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = ClientsSays;
const __TURBOPACK__default__export__ = ClientsSays;
var _c;
__turbopack_context__.k.register(_c, "ClientsSays");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/FaqSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FaqSection = ({ content })=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFaq = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-24 md:py-28 px-4 md:px-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-headline text-[2.5rem] md:text-5xl font-bold text-[#2b3149] text-center mb-4",
                    children: content.title
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-base md:text-lg font-normal text-[#5c677f] text-center mb-14 md:mb-16",
                    children: content.subtitle
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-[#e0e0e0]",
                    children: content.faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-[#e0e0e0]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>toggleFaq(index),
                                    className: "w-full py-5 md:py-6 px-0 flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-gray-50/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-body text-base md:text-lg font-semibold text-[#2b3149] pr-6 flex-1",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: `w-5 h-5 text-[#2b3149] flex-shrink-0 transition-transform duration-300 ease-out ${openIndex === index ? "rotate-180" : ""}`,
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                                lineNumber: 47,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pb-6 md:pb-8 pt-0 text-[#5c677f] leading-relaxed text-base md:text-lg font-normal",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/FaqSection.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_s(FaqSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FaqSection;
const __TURBOPACK__default__export__ = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/StorySection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
const StorySection = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#fbf7f2] py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-headline text-3xl md:text-4xl font-bold",
                    children: content.title
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c7a89] md:text-lg",
                    children: content.description
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/book",
                        className: "inline-block rounded-lg bg-[#7a2e46] px-10 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#68273c]",
                        children: content.ctaText
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/wedding-location/sections/StorySection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = StorySection;
const __TURBOPACK__default__export__ = StorySection;
var _c;
__turbopack_context__.k.register(_c, "StorySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/data:170b58 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"008fb80e75303f69e4b9732272dc369b617f1683ac":"getAllGalleryImages"},"src/services/gallery.service.ts",""] */ __turbopack_context__.s({
    "getAllGalleryImages": (()=>getAllGalleryImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAllGalleryImages = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("008fb80e75303f69e4b9732272dc369b617f1683ac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAllGalleryImages"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2FsbGVyeS5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IGZpcmVzdG9yZSwgaXNGaXJlYmFzZUVuYWJsZWQgfSBmcm9tICdAL2xpYi9maXJlYmFzZS1hZG1pbic7XHJcblxyXG5leHBvcnQgdHlwZSBHYWxsZXJ5SW1hZ2UgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpbWFnZVVybDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgY2F0ZWdvcnk6IHN0cmluZztcclxuICBpbWFnZUhpbnQ/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0Pzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgR0FMTEVSWV9DT0xMRUNUSU9OID0gJ2dhbGxlcnlJbWFnZXMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUNvbGxlY3Rpb24oKSB7XHJcbiAgaWYgKCFmaXJlc3RvcmUpIHRocm93IG5ldyBFcnJvcihcIkZpcmVzdG9yZSBpcyBub3QgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gIHJldHVybiBmaXJlc3RvcmUuY29sbGVjdGlvbihHQUxMRVJZX0NPTExFQ1RJT04pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb2NUb0dhbGxlcnlJbWFnZShkb2NTbmFwOiB7IGlkOiBzdHJpbmc7IGRhdGE6ICgpID0+IFJlY29yZDxzdHJpbmcsIHVua25vd24+IH0pOiBHYWxsZXJ5SW1hZ2Uge1xyXG4gIGNvbnN0IGRhdGEgPSBkb2NTbmFwLmRhdGEoKTtcclxuICBjb25zdCBjcmVhdGVkQXQgPSBkYXRhPy5jcmVhdGVkQXQgYXMgRmlyZWJhc2VGaXJlc3RvcmUuVGltZXN0YW1wIHwgeyB0b0RhdGU/OiAoKSA9PiBEYXRlIH0gfCB1bmRlZmluZWQ7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBkb2NTbmFwLmlkLFxyXG4gICAgaW1hZ2VVcmw6IChkYXRhPy5pbWFnZVVybCBhcyBzdHJpbmcpID8/ICcnLFxyXG4gICAgZGVzY3JpcHRpb246IChkYXRhPy5kZXNjcmlwdGlvbiBhcyBzdHJpbmcpID8/ICcnLFxyXG4gICAgY2F0ZWdvcnk6IChkYXRhPy5jYXRlZ29yeSBhcyBzdHJpbmcpID8/ICcnLFxyXG4gICAgaW1hZ2VIaW50OiBkYXRhPy5pbWFnZUhpbnQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgY3JlYXRlZEF0OiB0eXBlb2YgY3JlYXRlZEF0Py50b0RhdGUgPT09ICdmdW5jdGlvbicgPyBjcmVhdGVkQXQudG9EYXRlKCkudG9JU09TdHJpbmcoKSA6IChkYXRhPy5jcmVhdGVkQXQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSxcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTVEFUSUNfR0FMTEVSWV9JTUFHRVM6IEdhbGxlcnlJbWFnZVtdID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTFcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiU29mdCwgY2FuZGlkIHBvcnRyYWl0IG9mIHRoZSBicmlkZSBwcmVwYXJpbmcgZm9yIHRoZSBjZXJlbW9ueS5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFVQkp1YkJySE5ZejRJLWxTanY1cUpfT1hDdmhVdmlBd1wiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiYnJpZGFsIHByZXBhcmF0aW9uXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUm9tYW50aWMgcHJlLXdlZGRpbmcgbW9tZW50IGNhcHR1cmVkIGF0IGdvbGRlbiBob3VyLlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MWg5TVNVWHlfUk5tZzg4VzJUY011S0dGTzNjSGxQU1QwXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJjb3VwbGUgZ29sZGVuIGhvdXJcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicHJlLXdlZGRpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0zXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNpbmVtYXRpYyB3aWRlIHNob3Qgb2YgdGhlIHZlbnVlIGZpbGxlZCB3aXRoIGNlbGVicmF0aW9uLlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MWpJZklfVElNQTZCR2h2OWF1Z2JHOWlnN0loRnhwQjg3XCIsXHJcbiAgICAgIGltYWdlSGludDogXCJ2ZW51ZSB3aWRlIHNob3RcIixcclxuICAgICAgY2F0ZWdvcnk6IFwid2VkZGluZ3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS00XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcXVpZXQgcml0dWFsIG1vbWVudCDigJQgaGFuZHMgYW5kIGNlcmVtb25pYWwgZGV0YWlsIGluIGZvY3VzLlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MU1sZG55MFh4Nllnc01kOW5SbG9QODZKZGVGbXpkTmpWXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJyaXR1YWwgZGV0YWlsXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInJpdHVhbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS01XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkVsZWdhbnQgcG9ydHJhaXQgd2l0aCBuYXR1cmFsIGxpZ2h0IGFuZCBzb2Z0IGV4cHJlc3Npb24uXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xWGVfNm5HdlpyUHN3eldBSjhpMndvcjM4SUhwRGszMTdcIixcclxuICAgICAgaW1hZ2VIaW50OiBcInN0dWRpbyBzdHlsZSBwb3J0cmFpdFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS02XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkpveWZ1bCBmYW1pbHkgbW9tZW50IOKAlCBnZW5lcmF0aW9ucyBzaGFyaW5nIGEgd2FybSBlbWJyYWNlLlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MTBYcnRYTkFiTTMwRzFaalcwMS1uQWZzaUo4VUV4d0EyXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJmYW1pbHkgZW1icmFjZVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJmYW1pbHktZXZlbnRzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktN1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb3VwbGUgbGF1Z2hpbmcgdG9nZXRoZXIgZHVyaW5nIGEgY2FuZGlkIHByZS13ZWRkaW5nIHNob290LlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MVhWUFhIN1FiT19vREFMUkRtWllOZ1RySVRLaDcyRERWXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJwcmUtd2VkZGluZyBjYW5kaWRcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicHJlLXdlZGRpbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS04XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNsb3NlLXVwIHBvcnRyYWl0IGZvY3VzaW5nIG9uIGV4cHJlc3Npb24gYW5kIGZpbmUgZGV0YWlsLlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MV9mMkFoV1M5eFFNMzlCUXYxaWY4ZHVUZ01MVGM3QldJXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJjbG9zZS11cCBwb3J0cmFpdFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0xMFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDYW5kaWQgcmVjZXB0aW9uIHNob3Qg4oCUIHNwb250YW5lb3VzIGpveSBvbiB0aGUgZGFuY2UgZmxvb3IuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xS3JwSno1UlMzYTJLcUhFNUJTODVraG5reTI0UUZiT3lcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImRhbmNlIGZsb29yIGNhbmRpZFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJ3ZWRkaW5nc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTExXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkludGltYXRlIHByZS13ZWRkaW5nIHBvcnRyYWl0IHdpdGggc29mdCBiYWNrbGlnaHQuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xdWRfbVNBcmRwdWNQMnpCalVKMmJ2VzBKMmQ1ZkY2UGxcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImJhY2tsaXQgY291cGxlXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInByZS13ZWRkaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMTJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUG9ydHJhaXQgc2hvd2Nhc2luZyBlbGVnYW50IHN0eWxpbmcgYW5kIGNvbXBvc2VkIGZyYW1pbmcuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xd1c2WmV2Z0FfMDlnVzBwa3BpbG5FbmVIdjRFdEtGU0VcIixcclxuICAgICAgaW1hZ2VIaW50OiBcInN0eWxlZCBwb3J0cmFpdFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJwb3J0cmFpdHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0xM1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJSaXR1YWwgZGV0YWlsIOKAlCBzeW1ib2xpYyBvYmplY3RzIGFuZCBoYW5kcyBpbiBtb3Rpb24uXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xY3lxNTJUYXRKdXgwODZZTmdfRl92NzFITDk4RnNLaHZcIixcclxuICAgICAgaW1hZ2VIaW50OiBcInN5bWJvbGljIHJpdHVhbFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJyaXR1YWxzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMTRcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHBvcnRyYWl0IGZ1bGwgb2Ygd2FybXRoIGFuZCBjYW5kaWQgaW50ZXJhY3Rpb24uXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xTldheW14amlRWlRrZkhqdC1iQlY4WG9TSlRkYnhYUDNcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImZhbWlseSBjYW5kaWQgcG9ydHJhaXRcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiZmFtaWx5LWV2ZW50c1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTE1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJvbWFudGljIHByZS13ZWRkaW5nIGZyYW1lIOKAlCBhbiBpbnRpbWF0ZSBzdG9sZW4gbW9tZW50LlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MUdUSU5Ebk40QnVJUDhEbjVfQmlFbllMX202MUxUMXNPXCIsXHJcbiAgICAgIGltYWdlSGludDogXCJpbnRpbWF0ZSBjb3VwbGUgbW9tZW50XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInByZS13ZWRkaW5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMTZcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiV2lkZSB3ZWRkaW5nIGNvbXBvc2l0aW9uIGNhcHR1cmluZyBhcmNoaXRlY3R1cmUgYW5kIGF0bW9zcGhlcmUuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xUVMyTWJnNm1CZUFkcEZXRmg4Z0lCVUVrWE1jRmFFWGFcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImFyY2hpdGVjdHVyYWwgd2VkZGluZyB3aWRlXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcIndlZGRpbmdzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMTdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiUG9ydHJhaXQgd2l0aCBjaW5lbWF0aWMgbGlnaHRpbmcgYW5kIHRob3VnaHRmdWwgZXhwcmVzc2lvbi5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFocGxDczFoTGVIZ0dDWXBHajRaeDFudWRkWVRsRzNaTVwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiY2luZW1hdGljIHBvcnRyYWl0XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTE4XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRyYWRpdGlvbmFsIHJpdHVhbCBjYXB0dXJlZCBpbiBhbiBlbW90aW9uYWwsIGF1dGhlbnRpYyBtb21lbnQuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xSVF3VHVqMk4xRFMtNFBCd1Rtdlh2OHBlZEpxbGtOd2RcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImVtb3Rpb25hbCByaXR1YWxcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicml0dWFsc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTE5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkhhcHB5IGZhbWlseSBnYXRoZXJpbmcg4oCUIGNhbmRpZCBsYXVnaHRlciBhbmQgY29ubmVjdGlvbi5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTE5bG9ReUNvbUpNckthV2hKNF94WmpuSi01MC1GYTlBa1wiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiZmFtaWx5IGdhdGhlcmluZ1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJmYW1pbHktZXZlbnRzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMjBcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQ291cGxlIHBvcnRyYWl0IGZyYW1lZCBieSBuYXR1cmFsIGVsZW1lbnRzIGFuZCBzb2Z0IGxpZ2h0LlwiLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MTVpcWFxRlB6V01sVDBPWHV5aEU0Y1hreThzR1EtQi13XCIsXHJcbiAgICAgIGltYWdlSGludDogXCJuYXR1cmUgZnJhbWVkIGNvdXBsZVwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJwcmUtd2VkZGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTIxXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRldGFpbHMgb2YgdGhlIGNlcmVtb255IOKAlCB0ZXh0dXJlcyBhbmQgZGVjb3JhdGl2ZSBlbGVtZW50cy5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTE1YnAtWGhjelQ5VHFjLV9CSkQ2Z200bWFEUlMwdVhkbFwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiY2VyZW1vbnkgZGV0YWlsc1wiLFxyXG4gICAgICBjYXRlZ29yeTogXCJyaXR1YWxzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMjJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTmF0dXJhbCwgcG9zZWQgcG9ydHJhaXQgaGlnaGxpZ2h0aW5nIHBlcnNvbmFsaXR5IGFuZCBzdHlsZS5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFBLURHOUlJUmpOa191VkNDYmtJUkhWT3FOTVh6WXBxelwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwicG9zZWQgcG9ydHJhaXRcIixcclxuICAgICAgY2F0ZWdvcnk6IFwicG9ydHJhaXRzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiBcImdhbGxlcnktMjNcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRW1vdGlvbmFsIG1vbWVudCBiZXR3ZWVuIGZhbWlseSBtZW1iZXJzIGR1cmluZyB0aGUgZXZlbnQuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xYlIwVzZiTU9vbEdNdGdQMlBEbW9yMWhHNUFmV01mMVNcIixcclxuICAgICAgaW1hZ2VIaW50OiBcImVtb3Rpb25hbCBmYW1pbHkgbW9tZW50XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcImZhbWlseS1ldmVudHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0yNFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb3VwbGUgc3RlYWxpbmcgYSBxdWlldCBsYXVnaCDigJQgcmVsYXhlZCBhbmQgZ2VudWluZS5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTEzVk5pS1E5QmFrODZHVHdTN2UzSzNraFkxNWJ1a0RCWFwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiY2FuZGlkIGNvdXBsZSBsYXVnaFwiLFxyXG4gICAgICBjYXRlZ29yeTogXCJwcmUtd2VkZGluZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTI1XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIldlZGRpbmcgcmVjZXB0aW9uIGhpZ2hsaWdodCDigJQgc21pbGVzIGFuZCBjZWxlYnJhdG9yeSBlbmVyZ3kuXCIsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xSkw3ZmMycTFTSlNSQkVUaG9Lek9kMk1PWHQtdnZCMmZcIixcclxuICAgICAgaW1hZ2VIaW50OiBcInJlY2VwdGlvbiBoaWdobGlnaHRcIixcclxuICAgICAgY2F0ZWdvcnk6IFwid2VkZGluZ3NcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0yNlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBcnRmdWwgcG9ydHJhaXQgd2l0aCBlbXBoYXNpcyBvbiBjb21wb3NpdGlvbiBhbmQgdG9uZS5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFJSGRnVkp4blF6RkN5VWNURTNkajRwZF9zaWMzMWExVlwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiYXJ0ZnVsIHBvcnRyYWl0XCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogXCJnYWxsZXJ5LTI3XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcXVpZXQgcml0dWFsIGNhcHR1cmVkIHdpdGggaW50aW1hY3kgYW5kIGN1bHR1cmFsIGRldGFpbC5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTEwQnZsQTd6RjNuVDV3VS1FdV8wVEF0ZER1NFpZQjdoTlwiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiaW50aW1hdGUgcml0dWFsXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcInJpdHVhbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IFwiZ2FsbGVyeS0yOFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgY2FuZGlkIOKAlCBjYW5kaWQgc21pbGVzIGFuZCB1bnNjcmlwdGVkIGpveS5cIixcclxuICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTF1M3dDRkxITVBoRTdCelhfY29iTnJ0NW12S2tSVHdES1wiLFxyXG4gICAgICBpbWFnZUhpbnQ6IFwiZmFtaWx5IGNhbmRpZCBqb3lcIixcclxuICAgICAgY2F0ZWdvcnk6IFwiZmFtaWx5LWV2ZW50c1wiXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZ2FsbGVyeS0yOVwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiTW9vZHkgcG9ydHJhaXQgd2l0aCBkcmFtYXRpYyBsaWdodGluZyBhbmQgcG9pc2VkIGV4cHJlc3Npb24uXCIsXHJcbiAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MVNpSE5GU1NsZ1pfbFNTQTYwQzlzV1BNVDRZOVQyTUhEXCIsXHJcbiAgICAgICAgICBpbWFnZUhpbnQ6IFwiZHJhbWF0aWMgcG9ydHJhaXRcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJnYWxsZXJ5LTMwXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDYW5kaWQgbW9tZW50IG9mIGxhdWdodGVyIGR1cmluZyB0aGUgcHJlLXdlZGRpbmcgc2Vzc2lvbi5cIixcclxuICAgICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xQnEyUlFnRU83Y2lKbld3bDJZOHp6Z3B6dkJPalNIdEJcIixcclxuICAgICAgICAgIGltYWdlSGludDogXCJwcmUtd2VkZGluZyBsYXVnaHRlclwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwicHJlLXdlZGRpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZ2FsbGVyeS0zMVwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQW5vdGhlciBjYW5kaWQgZnJhbWUgZnJvbSB0aGUgc2FtZSBzaG9vdCwgY2FwdHVyaW5nIGdlbnVpbmUgam95LlwiLFxyXG4gICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFCcTJSUWdFTzdjaUpuV3dsMlk4enpncHp2Qk9qU0h0QlwiLFxyXG4gICAgICAgICAgaW1hZ2VIaW50OiBcInByZS13ZWRkaW5nIGNhbmRpZFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwicHJlLXdlZGRpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZ2FsbGVyeS0zMlwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVHJhZGl0aW9uYWwgcml0dWFsIHNob3Qg4oCUIGNsb3NlIGZyYW1pbmcgb24gY2VyZW1vbmlhbCBhY3Rpb24uXCIsXHJcbiAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MU5wQTU1OGcxazA0d2UyMkZmNWRvU2RMcXZ5U2ZJNHdoXCIsXHJcbiAgICAgICAgICBpbWFnZUhpbnQ6IFwiY2VyZW1vbmlhbCBjbG9zZS11cFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwicml0dWFsc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogXCJnYWxsZXJ5LTMzXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3J0cmFpdCB3aXRoIHNvZnQsIG5hdHVyYWwgdG9uZXMgYW5kIGFuIGludGltYXRlIGZlZWwuXCIsXHJcbiAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MVp3aGZPMW9PMzFrXzNXRFZ6Z3laeVBqbkxTUkFpRzZvXCIsXHJcbiAgICAgICAgICBpbWFnZUhpbnQ6IFwic29mdCBwb3J0cmFpdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwicG9ydHJhaXRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImdhbGxlcnktMzRcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgam95ZnVsIGZhbWlseSBzbmFwc2hvdCDigJQgY2FuZGlkIHNtaWxlcyBhbmQgd2FybSBpbnRlcmFjdGlvbi5cIixcclxuICAgICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9dmlldyZpZD0xbVRPNjdfSURVOVRLcWw4RnNCWnI3Nnh5b0R4LTJsWWVcIixcclxuICAgICAgICAgIGltYWdlSGludDogXCJmYW1pbHkgc25hcHNob3RcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcImZhbWlseS1ldmVudHNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZ2FsbGVyeS0zNVwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiUml0dWFsIG1vbWVudCBjYXB0dXJlZCB3aXRoIGNsb3NlIGF0dGVudGlvbiB0byBjdWx0dXJhbCBkZXRhaWwuXCIsXHJcbiAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MS1NODdJY0lUXzBCU2FqbW90emd0QTdnN29iQTNMblQtXCIsXHJcbiAgICAgICAgICBpbWFnZUhpbnQ6IFwiY3VsdHVyYWwgcml0dWFsXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJyaXR1YWxzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImdhbGxlcnktMzZcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlByZS13ZWRkaW5nIGZyYW1lIHdpdGggYSByZWxheGVkLCBuYXR1cmFsIHBvc2UgYW5kIGxvY2F0aW9uIGNoYXJtLlwiLFxyXG4gICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTE1NDl4WFUyNC1YZm5YS0t2ZW5xQUdkX0ZZOElWTmZQelwiLFxyXG4gICAgICAgICAgaW1hZ2VIaW50OiBcImxvY2F0aW9uIGNvdXBsZSBwb3J0cmFpdFwiLFxyXG4gICAgICAgICAgY2F0ZWdvcnk6IFwicHJlLXdlZGRpbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IFwiZ2FsbGVyeS0zN1wiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiQ2FuZGlkIGNhcHR1cmUgb2YgZ3Vlc3RzIGVuam95aW5nIGEgc3BlY2lhbCBtb21lbnQgdG9nZXRoZXIuXCIsXHJcbiAgICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PXZpZXcmaWQ9MXlQTmwxTXcwY2tWYjN0OVpRTXFYSmJnWjRZWU5XeGRxXCIsXHJcbiAgICAgICAgICBpbWFnZUhpbnQ6IFwiZ3Vlc3QgY2FuZGlkXCIsXHJcbiAgICAgICAgICBjYXRlZ29yeTogXCJmYW1pbHktZXZlbnRzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiBcImdhbGxlcnktMzhcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBvcnRyYWl0IGhpZ2hsaWdodGluZyBleHByZXNzaW9uIGFuZCByZWZpbmVkIGNvbXBvc2l0aW9uLlwiLFxyXG4gICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL3VjP2V4cG9ydD12aWV3JmlkPTFUak9pdkg3VFN1NFk2Y0hPSTJQb09OY0ZVUFMtR2gxMVwiLFxyXG4gICAgICAgICAgaW1hZ2VIaW50OiBcInJlZmluZWQgcG9ydHJhaXRcIixcclxuICAgICAgICAgIGNhdGVnb3J5OiBcInBvcnRyYWl0c1wiXHJcbiAgICAgICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEdhbGxlcnlJbWFnZXMoKTogUHJvbWlzZTxHYWxsZXJ5SW1hZ2VbXT4ge1xyXG4gIGlmICghaXNGaXJlYmFzZUVuYWJsZWQgfHwgIWZpcmVzdG9yZSkge1xyXG4gICAgcmV0dXJuIFNUQVRJQ19HQUxMRVJZX0lNQUdFUztcclxuICB9XHJcbiAgY29uc3QgZ2FsbGVyeVJlZiA9IGdldEdhbGxlcnlDb2xsZWN0aW9uKCk7XHJcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnYWxsZXJ5UmVmLmdldCgpO1xyXG4gIGNvbnN0IGltYWdlcyA9IHNuYXBzaG90LmRvY3MubWFwKChkKSA9PiBkb2NUb0dhbGxlcnlJbWFnZSh7IGlkOiBkLmlkLCBkYXRhOiAoKSA9PiBkLmRhdGEoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9KSk7XHJcbiAgcmV0dXJuIGltYWdlcy5sZW5ndGggPiAwID8gaW1hZ2VzLnNvcnQoKGEsIGIpID0+IGEuaWQubG9jYWxlQ29tcGFyZShiLmlkKSkgOiBTVEFUSUNfR0FMTEVSWV9JTUFHRVM7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVHYWxsZXJ5SW1hZ2UoZGF0YToge1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gIGltYWdlSGludD86IHN0cmluZztcclxufSk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghaXNGaXJlYmFzZUVuYWJsZWQgfHwgIWZpcmVzdG9yZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FsbGVyeSB3cml0ZSBvcGVyYXRpb25zIHJlcXVpcmUgRmlyZWJhc2UuIENvbmZpZ3VyZSBGaXJlYmFzZSBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICB9XHJcbiAgY29uc3QgZ2FsbGVyeVJlZiA9IGdldEdhbGxlcnlDb2xsZWN0aW9uKCk7XHJcbiAgYXdhaXQgZ2FsbGVyeVJlZi5hZGQoe1xyXG4gICAgaW1hZ2VVcmw6IGRhdGEuaW1hZ2VVcmwsXHJcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcclxuICAgIGNhdGVnb3J5OiBkYXRhLmNhdGVnb3J5LFxyXG4gICAgaW1hZ2VIaW50OiBkYXRhLmltYWdlSGludCA/PyBudWxsLFxyXG4gICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FsbGVyeUltYWdlKFxyXG4gIGlkOiBzdHJpbmcsXHJcbiAgZGF0YTogeyBkZXNjcmlwdGlvbj86IHN0cmluZzsgY2F0ZWdvcnk/OiBzdHJpbmc7IGltYWdlSGludD86IHN0cmluZyB9XHJcbik6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghaXNGaXJlYmFzZUVuYWJsZWQgfHwgIWZpcmVzdG9yZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FsbGVyeSB3cml0ZSBvcGVyYXRpb25zIHJlcXVpcmUgRmlyZWJhc2UuIENvbmZpZ3VyZSBGaXJlYmFzZSBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICB9XHJcbiAgY29uc3QgZ2FsbGVyeVJlZiA9IGdldEdhbGxlcnlDb2xsZWN0aW9uKCk7XHJcbiAgY29uc3QgZG9jUmVmID0gZ2FsbGVyeVJlZi5kb2MoaWQpO1xyXG4gIGF3YWl0IGRvY1JlZi51cGRhdGUoZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVHYWxsZXJ5SW1hZ2UoaWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gIGlmICghaXNGaXJlYmFzZUVuYWJsZWQgfHwgIWZpcmVzdG9yZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR2FsbGVyeSB3cml0ZSBvcGVyYXRpb25zIHJlcXVpcmUgRmlyZWJhc2UuIENvbmZpZ3VyZSBGaXJlYmFzZSBpbiB5b3VyIGVudmlyb25tZW50LlwiKTtcclxuICB9XHJcbiAgY29uc3QgZ2FsbGVyeVJlZiA9IGdldEdhbGxlcnlDb2xsZWN0aW9uKCk7XHJcbiAgY29uc3QgZG9jUmVmID0gZ2FsbGVyeVJlZi5kb2MoaWQpO1xyXG4gIGF3YWl0IGRvY1JlZi5kZWxldGUoKTtcclxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFNBd1NzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/sections/GallerySection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GallerySection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$170b58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/services/data:170b58 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PAGE_SIZE = 16;
async function fetchGalleryImages(category, offset, limit) {
    const allImages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$data$3a$170b58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAllGalleryImages"])();
    const filtered = category === "All" ? allImages : allImages.filter((img)=>img.category === category.toLowerCase().replace(" ", "-"));
    return filtered.slice(offset, offset + limit);
}
function GallerySection({ title = "Our Gallery", description, photos = [] }) {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [broken, setBroken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySection.useEffect": ()=>{
            let mounted = true;
            // If initial photos are provided, map them and set as initial images
            if (photos.length > 0) {
                const initial = photos.map({
                    "GallerySection.useEffect.initial": (p)=>({
                            id: String(p.id),
                            imageUrl: p.src,
                            description: p.alt,
                            category: "all",
                            imageHint: p.alt
                        })
                }["GallerySection.useEffect.initial"]);
                setImages(initial);
                setHasMore(false); // Assume we only show these if provided
                setLoading(false);
                return;
            }
            setImages([]);
            setOffset(0);
            setHasMore(true);
            setLoading(true);
            fetchGalleryImages("All", 0, PAGE_SIZE).then({
                "GallerySection.useEffect": (newImages)=>{
                    if (!mounted) return;
                    setImages(newImages);
                    setHasMore(newImages.length === PAGE_SIZE);
                    setLoading(false);
                }
            }["GallerySection.useEffect"]);
            return ({
                "GallerySection.useEffect": ()=>{
                    mounted = false;
                }
            })["GallerySection.useEffect"];
        }
    }["GallerySection.useEffect"], [
        photos
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySection.useEffect": ()=>{
            if (offset === 0 || photos.length > 0) return;
            let mounted = true;
            setLoading(true);
            fetchGalleryImages("All", offset, PAGE_SIZE).then({
                "GallerySection.useEffect": (newImages)=>{
                    if (!mounted) return;
                    setImages({
                        "GallerySection.useEffect": (prev)=>[
                                ...prev,
                                ...newImages
                            ]
                    }["GallerySection.useEffect"]);
                    setHasMore(newImages.length === PAGE_SIZE);
                    setLoading(false);
                }
            }["GallerySection.useEffect"]);
            return ({
                "GallerySection.useEffect": ()=>{
                    mounted = false;
                }
            })["GallerySection.useEffect"];
        }
    }["GallerySection.useEffect"], [
        offset,
        photos.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GallerySection.useEffect": ()=>{
            if (!hasMore || loading || photos.length > 0) return;
            const node = loaderRef.current;
            if (!node) return;
            const observer = new window.IntersectionObserver({
                "GallerySection.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setOffset({
                            "GallerySection.useEffect": (prev)=>prev + PAGE_SIZE
                        }["GallerySection.useEffect"]);
                    }
                }
            }["GallerySection.useEffect"], {
                threshold: 1
            });
            observer.observe(node);
            return ({
                "GallerySection.useEffect": ()=>observer.disconnect()
            })["GallerySection.useEffect"];
        }
    }["GallerySection.useEffect"], [
        hasMore,
        loading,
        photos.length
    ]);
    const handleImageError = (id)=>{
        setBroken((s)=>({
                ...s,
                [id]: true
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "gallery-section-title",
        className: "jsx-29f59f61b26a9ec6" + " " + "bg-card py-12 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-29f59f61b26a9ec6" + " " + "container px-5 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-29f59f61b26a9ec6" + " " + "mx-auto max-w-4xl px-6 text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "gallery-section-title",
                                className: "jsx-29f59f61b26a9ec6" + " " + "font-headline text-3xl md:text-4xl font-bold",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-29f59f61b26a9ec6" + " " + "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c7a89] md:text-lg",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-live": "polite",
                        className: "jsx-29f59f61b26a9ec6" + " " + "masonry-container gallery-section-masonry",
                        children: images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                style: {
                                    breakInside: "avoid",
                                    pageBreakInside: "avoid"
                                },
                                "aria-describedby": `${image.id}-caption`,
                                className: "jsx-29f59f61b26a9ec6" + " " + "masonry-item relative group overflow-hidden rounded-lg mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-29f59f61b26a9ec6" + " " + "relative w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: broken[image.id] ? "/fallback.jpg" : image.imageUrl,
                                            alt: image.description || image.imageHint || "Gallery image",
                                            width: 800,
                                            height: 600,
                                            loading: "lazy",
                                            sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                            className: "object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105",
                                            onError: ()=>handleImageError(image.id),
                                            "data-ai-hint": image.imageHint,
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                        id: `${image.id}-caption`,
                                        className: "jsx-29f59f61b26a9ec6" + " " + "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-29f59f61b26a9ec6" + " " + "text-white text-sm font-semibold mb-2",
                                            children: image.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, image.id, true, {
                                fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: loaderRef,
                        "aria-hidden": "true",
                        className: "jsx-29f59f61b26a9ec6" + " " + "flex justify-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-29f59f61b26a9ec6" + " " + "text-muted-foreground",
                            children: loading ? "Loading more images..." : "Scroll to load more"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "29f59f61b26a9ec6",
                children: ".gallery-section-masonry.masonry-container.jsx-29f59f61b26a9ec6{column-width:280px;column-gap:1rem}@media (width>=640px){.gallery-section-masonry.masonry-container.jsx-29f59f61b26a9ec6{column-width:320px}}@media (width>=1024px){.gallery-section-masonry.masonry-container.jsx-29f59f61b26a9ec6{column-width:300px}}.gallery-section-masonry.jsx-29f59f61b26a9ec6 .masonry-item.jsx-29f59f61b26a9ec6 img.jsx-29f59f61b26a9ec6{width:100%;height:auto;display:block}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/wedding-location/sections/GallerySection.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(GallerySection, "9r5YgWYMTVAH43APp6+cwZQ4Ebk=");
_c = GallerySection;
var _c;
__turbopack_context__.k.register(_c, "GallerySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$DetailsOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/DetailsOne.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$WhyShaadifilms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/WhyShaadifilms.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$WeddingVenues$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/WeddingVenues.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$ClientsSays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/ClientsSays.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/FaqSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$StorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/StorySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$GallerySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/sections/GallerySection.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const WeddingLocationPage = ({ content })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.hero,
                videoLink: content.videoLink
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$DetailsOne$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.detailsOne
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$WhyShaadifilms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.whyShaadifilms
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$WeddingVenues$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.weddingVenues
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$GallerySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: content.gallerySection?.title || "Wedding Photography Gallery",
                description: content.gallerySection?.description || "Explore our portfolio of candid wedding photography, pre-wedding photoshoots, and cinematic films.",
                photos: content.photographyPortfolio?.photos
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            content.clientsSays?.testimonials?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$ClientsSays$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.clientsSays
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.faqSection
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$sections$2f$StorySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                content: content.storySection
            }, void 0, false, {
                fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = WeddingLocationPage;
const __TURBOPACK__default__export__ = WeddingLocationPage;
var _c;
__turbopack_context__.k.register(_c, "WeddingLocationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/wedding-location/content/goa.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "goaContent": (()=>goaContent)
});
const goaContent = {
    hero: {
        tagline: "Sand & Vows",
        title: "Goa Destination Wedding Photography & Cinematography",
        description: "As Goa's premier destination wedding photographers, we craft cinematic, candid, and timeless love stories through expert photography, videography, and drone cinematography.",
        imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
    },
    detailsOne: {
        title: "Your Love Story, Painted in Goan Hues",
        welcomeBrand: "Sand & Vows",
        paragraph: "the exclusive Goa destination wedding wing of Shaadifilms. We blend cinematic storytelling with Goa's unique charm, creating an effortless and elegant experience."
    },
    whyShaadifilms: {
        title: "Goa Wedding Cinematography & Photography",
        subtitle: "We don't just take photos; we create art. Our process is built on three pillars to ensure your Goa wedding album and film are masterpieces.",
        items: [
            {
                title: "Cinematic Storytelling",
                desc: "Your wedding is a story. We use cinematic techniques, including breathtaking drone cinematography, to create a wedding film that feels like a movie.",
                iconKey: "video",
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
                alt: "Cinematic beach wedding shot"
            },
            {
                title: "Candid Photography & Artistry",
                desc: "As masters of candid photography, our unobtrusive approach lets you live in the moment. We capture genuine, unposed emotions—the stolen kisses and joyful laughter.",
                iconKey: "sparkles",
                img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&h=900&fit=crop",
                alt: "Candid wedding laughter"
            },
            {
                title: "A Luxury Videography Experience",
                desc: "We provide a seamless, high-end experience. Our dedicated team handles all complexities of a destination shoot so you can relax and enjoy your celebration.",
                iconKey: "users",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=900&fit=crop",
                alt: "Luxury Goa resort"
            }
        ]
    },
    weddingVenues: {
        title: "Goa's Most Booked Wedding Locations",
        subtitle: "As seasoned Goa wedding photographers and cinematographers, we have extensive experience with the region's most sought-after properties. Whether you dream of a serene South Goa resort or a vibrant North Goa villa, we know the perfect angles for stunning photography and videography.",
        tabHotelsLabel: "South Goa",
        tabFarmhousesLabel: "North Goa",
        luxuryHotels: [
            {
                id: 1,
                name: "The Leela Goa",
                location: "Cavelossim",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
            },
            {
                id: 2,
                name: "Alila Diwa Goa",
                location: "Majorda",
                image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop"
            },
            {
                id: 3,
                name: "Taj Exotica Resort & Spa",
                location: "Benaulim",
                image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop"
            },
            {
                id: 4,
                name: "Park Hyatt Goa Resort and Spa",
                location: "Cansaulim",
                image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop"
            },
            {
                id: 5,
                name: "ITC Grand Goa Resort & Spa",
                location: "Cansaulim",
                image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
            },
            {
                id: 6,
                name: "Caravela Beach Resort",
                location: "Varca",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
            }
        ],
        farmhousesResorts: [
            {
                id: 7,
                name: "W Goa",
                location: "Vagator",
                image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
            },
            {
                id: 8,
                name: "Vivenda dos Palhaços",
                location: "Majorda",
                image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
            },
            {
                id: 9,
                name: "Casa Palacio",
                location: "Aldona",
                image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop"
            },
            {
                id: 10,
                name: "Casa Susegad",
                location: "South Goa",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
            },
            {
                id: 11,
                name: "Acron Waterfront Resort",
                location: "Cansaulim",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
            },
            {
                id: 12,
                name: "Grand Hyatt Goa",
                location: "Bambolim",
                image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop"
            }
        ]
    },
    photographyPortfolio: {
        title: "Goa Wedding Photography Portfolio",
        subtitle: "Moments of love, laughter, and cinematic beauty from our recent work as a destination wedding photographer in Goa.",
        photos: [
            {
                id: 1,
                src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop",
                alt: "Candid laugh during a Goa beach wedding"
            },
            {
                id: 2,
                src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&h=500&fit=crop",
                alt: "A stunning bride against a Goa sunset"
            },
            {
                id: 3,
                src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
                alt: "Pre-wedding shoot on a quiet South Goa beach"
            },
            {
                id: 4,
                src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
                alt: "Drone shot of a luxury resort wedding in Goa"
            },
            {
                id: 5,
                src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
                alt: "Vibrant Mehendi party by the pool in Goa"
            },
            {
                id: 6,
                src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
                alt: "A quiet moment in a beautiful Goan church"
            }
        ]
    },
    clientsSays: {
        title: "What Our Goa Couples Say",
        subtitle: "Read reviews from couples who chose us for their Goa wedding photography and cinematography.",
        testimonials: [
            {
                id: 1,
                text: "Choosing Sand and Vows was the best decision for our destination wedding in Goa. They are, without a doubt, the best wedding photographers in Goa. The cinematic film, with its stunning drone cinematography over the beach at sunset, is something we'll treasure forever.",
                name: "Anika & Rohan",
                location: "South Goa Beach Wedding",
                image: "https://images.unsplash.com/photo-1519741497684-3fda9a06a2b4?w=144&h=144&fit=crop"
            },
            {
                id: 2,
                text: "The team understood the vibe of our North Goa resort wedding completely. Their candid wedding photography is phenomenal, and the drone cinematography gave us a stunning perspective of the property. They knew all the secret beautiful spots for our pre-wedding shoot!",
                name: "Sameer & Diya",
                location: "North Goa Resort Wedding",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=144&h=144&fit=crop"
            },
            {
                id: 3,
                text: "From planning to execution, their professionalism was outstanding. They made us feel so comfortable, and the results, including the incredible drone cinematography, are breathtaking. Their wedding photography packages for Goa are transparent and worth every penny.",
                name: "Misha & Kabir",
                location: "Heritage Villa Wedding, Assagao",
                image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=144&h=144&fit=crop"
            },
            {
                id: 4,
                text: "The drone shots of our Cavelossim beach wedding are out of this world! Sand and Vows captured the scale and beauty of Goa perfectly. Their cinematic wedding film feels like a Bollywood movie. Truly the top wedding photographers in Goa.",
                name: "Nikhil & Sanjana",
                location: "Cavelossim, South Goa",
                image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=144&h=144&fit=crop"
            },
            {
                id: 5,
                text: "We wanted a photographer who understood the sanctity of a church wedding. The team was respectful, discreet, and captured the most beautiful, candid moments during our vows in Panjim. The premium feel of the photography is exactly what we wanted.",
                name: "David & Sarah Fernandes",
                location: "Church Wedding, Panjim",
                image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=144&h=144&fit=crop"
            }
        ]
    },
    faqSection: {
        title: "Goa Destination Wedding FAQs",
        subtitle: "Your questions about booking a \"wedding photographer in Goa\" answered.",
        faqs: [
            {
                question: "How far in advance should we book a destination wedding photographer in Goa?",
                answer: "For Goa, especially during the peak season (November to February), we recommend booking your photographer 12-18 months in advance. This ensures our availability and gives us ample time for creative planning, like location scouting for your pre-wedding shoot in Goa."
            },
            {
                question: "Your cinematic wedding films of Goa look amazing. Is that included in all packages?",
                answer: "Thank you! Our signature cinematic wedding films are a key part of our Gold and Platinum packages. We also offer it as an add-on. We believe it's the best way to tell your story. Let's discuss a package that fits your needs."
            },
            {
                question: "Do you help with location scouting for pre-wedding shoots in Goa?",
                answer: "Absolutely! We have extensive experience shooting across Goa. Whether you want the dramatic cliffs of Vagator, the serene beaches of Cavelossim, or the charming streets of Fontainhas, we can recommend stunning locations that match the vibe you're looking for."
            },
            {
                question: "Are travel and accommodation costs included in your Goa wedding photography packages?",
                answer: "Our packages are tailored for destination weddings. We provide transparent quotes that can either include our team's travel and accommodation, or you can choose to arrange it separately. We'll discuss the most convenient and cost-effective option during our consultation."
            },
            {
                question: "What's the best time of year for a beach wedding in Goa to get the best photos?",
                answer: "The post-monsoon period from late October to May is ideal. The 'golden hour' light from November to February is particularly magical for beach wedding photography. March to May is warmer but can be great for securing off-season deals at luxury South Goa resorts."
            }
        ]
    },
    storySection: {
        title: "Let's Create Your Goa Love Story",
        description: "Your once-in-a-lifetime celebration deserves to be captured with artistry and passion. Reach out to get our \"wedding photography packages for Goa,\" check our availability, and receive a personalized proposal for our photography, videography, and drone cinematography services.",
        ctaText: "Check Availability for Goa"
    },
    gallerySection: {
        title: "Goa Weddings Gallery",
        description: "Explore our portfolio of Goa destination weddings, candid photography, pre-wedding shoots, and cinematic films."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$WeddingLocationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/WeddingLocationPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/wedding-location/content/goa.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const API_URL = "https://pk.thetechthingy.com/api/v1/wedding-pages/goa";
/**
 * Maps the API's imagesWithContent array to the page sections.
 *
 * API imagesWithContent index mapping:
 * [0] → Hero section (title, description, image)
 * [1] → DetailsOne section (title, description)
 * [2] → WhyShaadifilms section header (title, description)
 * [3] → WhyShaadifilms item 1 (title, description, image)
 * [4] → WhyShaadifilms item 2 (title, description, image)
 * [5] → WhyShaadifilms item 3 (title, description, image)
 * [6] → WeddingVenues section header (title, description)
 * [7] → GallerySection (title, description)
 * [8] → ClientsSays section header (title, description)
 */ function mergeApiData(apiData) {
    const items = apiData.imagesWithContent || [];
    const optionalText = apiData.imagesWithOptionalText || [];
    const getItem = (index)=>items[index] || null;
    const hero = getItem(0);
    const details = getItem(1);
    const whyHeader = getItem(2);
    const whyItem1 = getItem(3);
    const whyItem2 = getItem(4);
    const whyItem3 = getItem(5);
    const venuesHeader = getItem(6);
    // Flexible lookup for the remaining sections based on keywords
    const remainingItems = items.slice(7);
    const findItem = (keywords)=>remainingItems.find((item)=>keywords.some((k)=>item.title?.toLowerCase().includes(k))) || null;
    const gallery = findItem([
        "gallery",
        "portfolio"
    ]);
    const clientsHeader = findItem([
        "client",
        "say",
        "couple",
        "testimonial"
    ]);
    const faqsHeader = findItem([
        "faq",
        "question"
    ]);
    const storyHeader = findItem([
        "story",
        "capture",
        "create",
        "availability"
    ]);
    // Map Hotels (Indices 11-16 in Goa sample)
    const apiHotels = items.slice(11, 17).map((item, idx)=>({
            id: idx + 1,
            name: item.title,
            location: item.description,
            image: item.image
        }));
    // Map FAQs (Starting from index 17 in Goa sample)
    const apiFaqs = items.slice(17).filter((item)=>item.title?.includes("?")).map((item)=>({
            question: item.title,
            answer: item.description
        }));
    // Handle DetailsOne paragraph: try to extract and avoid "Welcome to" duplication
    let refinedParagraph = details?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].detailsOne.paragraph;
    let welcomeBrand = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].detailsOne.welcomeBrand;
    if (details?.description?.toLowerCase().startsWith("welcome to")) {
        const match = details.description.match(/welcome to\s+([^,]+),\s*(.*)/i);
        if (match) {
            welcomeBrand = match[1].trim();
            refinedParagraph = match[2].trim();
        }
    }
    const fallbackItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].whyShaadifilms.items;
    const whyItems = [
        whyItem1,
        whyItem2,
        whyItem3
    ].map((apiItem, idx)=>{
        const fallback = fallbackItems[idx];
        if (!apiItem && !fallback) return null;
        return {
            title: apiItem?.title || fallback?.title || "",
            desc: apiItem?.description || fallback?.desc || "",
            iconKey: fallback?.iconKey || "users",
            img: apiItem?.image || fallback?.img || "",
            alt: apiItem?.title || fallback?.alt || ""
        };
    }).filter(Boolean);
    return {
        videoLink: apiData.videoLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].videoLink,
        hero: {
            tagline: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].hero.tagline,
            title: hero?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].hero.title,
            description: hero?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].hero.description
        },
        detailsOne: {
            title: details?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].detailsOne.title,
            paragraph: refinedParagraph,
            welcomeBrand: welcomeBrand
        },
        whyShaadifilms: {
            title: whyHeader?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].whyShaadifilms.title,
            subtitle: whyHeader?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].whyShaadifilms.subtitle,
            items: whyItems.length > 0 ? whyItems : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].whyShaadifilms.items
        },
        weddingVenues: {
            title: venuesHeader?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.title,
            subtitle: venuesHeader?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.subtitle,
            tabHotelsLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.tabHotelsLabel,
            tabFarmhousesLabel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.tabFarmhousesLabel,
            luxuryHotels: apiHotels.length > 0 ? apiHotels : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.luxuryHotels,
            farmhousesResorts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].weddingVenues.farmhousesResorts
        },
        photographyPortfolio: {
            title: gallery?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].photographyPortfolio.title,
            subtitle: gallery?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].photographyPortfolio.subtitle,
            photos: optionalText.length > 0 ? optionalText.map((item, idx)=>({
                    id: idx + 1,
                    src: item.image,
                    alt: item.text || "Goa Wedding Photography"
                })) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].photographyPortfolio.photos
        },
        clientsSays: {
            title: clientsHeader?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].clientsSays.title,
            subtitle: clientsHeader?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].clientsSays.subtitle,
            testimonials: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].clientsSays.testimonials
        },
        faqSection: {
            title: faqsHeader?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].faqSection.title,
            subtitle: faqsHeader?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].faqSection.subtitle,
            faqs: apiFaqs.length > 0 ? apiFaqs : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].faqSection.faqs
        },
        storySection: {
            title: storyHeader?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].storySection.title,
            description: storyHeader?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].storySection.description,
            ctaText: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].storySection.ctaText
        },
        gallerySection: {
            title: gallery?.title || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].gallerySection?.title || "Wedding Photography Gallery",
            description: gallery?.description || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"].gallerySection?.description || ""
        }
    };
}
const GoaWeddingsPage = ()=>{
    _s();
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$content$2f$goa$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goaContent"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoaWeddingsPage.useEffect": ()=>{
            const fetchData = {
                "GoaWeddingsPage.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch(API_URL);
                        if (!response.ok) throw new Error("API request failed");
                        const json = await response.json();
                        if (json.success && json.data) {
                            setContent(mergeApiData(json.data));
                        }
                    } catch (err) {
                        console.error("Failed to fetch Goa wedding data, using fallback:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["GoaWeddingsPage.useEffect.fetchData"];
            fetchData();
        }
    }["GoaWeddingsPage.useEffect"], []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#b84b6a] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-white/60 text-sm",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx",
            lineNumber: 182,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$wedding$2d$location$2f$WeddingLocationPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        content: content
    }, void 0, false, {
        fileName: "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx",
        lineNumber: 191,
        columnNumber: 10
    }, this);
};
_s(GoaWeddingsPage, "7dmdX8KeSwq4RCJoZNVw2eW2RQg=");
_c = GoaWeddingsPage;
const __TURBOPACK__default__export__ = GoaWeddingsPage;
var _c;
__turbopack_context__.k.register(_c, "GoaWeddingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bcbb4d72._.js.map