module.exports = {

"[externals]/firebase-admin [external] (firebase-admin, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("firebase-admin", () => require("firebase-admin"));

module.exports = mod;
}}),
"[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/firestore");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("firebase-admin/storage");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/firebase-admin.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "auth": (()=>auth),
    "firestore": (()=>firestore),
    "isFirebaseEnabled": (()=>isFirebaseEnabled),
    "storageBucket": (()=>storageBucket)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/firebase-admin [external] (firebase-admin, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/firestore [external] (firebase-admin/firestore, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/firebase-admin/storage [external] (firebase-admin/storage, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
let initialized = false;
if (serviceAccountKey) {
    try {
        const parsedServiceAccount = JSON.parse(serviceAccountKey);
        const serviceAccount = {
            projectId: parsedServiceAccount.project_id ?? parsedServiceAccount.projectId,
            clientEmail: parsedServiceAccount.client_email ?? parsedServiceAccount.clientEmail,
            privateKey: parsedServiceAccount.private_key ?? parsedServiceAccount.privateKey
        };
        if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
            if (!__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["apps"].length) {
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["initializeApp"])({
                    credential: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["credential"].cert(serviceAccount),
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.projectId}.appspot.com`
                });
            }
            initialized = true;
        }
    } catch (e) {
        console.error('Failed to parse Firebase service account key:', e);
    }
} else if (process.env.FIREBASE_PROJECT_ID) {
    const serviceAccount = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL
    };
    if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["apps"].length) {
            (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["initializeApp"])({
                credential: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["credential"].cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.projectId}.appspot.com`
            });
        }
        initialized = true;
    }
}
const firestore = initialized ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$firestore__$5b$external$5d$__$28$firebase$2d$admin$2f$firestore$2c$__esm_import$29$__["getFirestore"])() : null;
const auth = initialized ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$29$__["auth"])() : null;
const storageBucket = initialized ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin$2f$storage__$5b$external$5d$__$28$firebase$2d$admin$2f$storage$2c$__esm_import$29$__["getStorage"])().bucket() : null;
const isFirebaseEnabled = initialized;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/placeholder-images.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"hero-2\",\"title\":\"Timeless Stories, Artfully Told\",\"description\":\"Premium Wedding Photography & Cinematography Services in Mumbai\",\"imageUrl\":\"https://images.unsplash.com/photo-1695535074727-dd2c5a349f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYW1lcmElMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzU4NjMxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"camera equipment\"},{\"id\":\"hero-3\",\"title\":\"Cinematic & Unforgettable\",\"description\":\"Your wedding day, captured as a work of art that lasts a lifetime.\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"wedding-type-1\",\"description\":\"Hindu Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHdlZGRpbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"hindu wedding\"},{\"id\":\"wedding-type-2\",\"description\":\"Christian Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1474867985807-96ca17098cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODYyNDk2NHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"church wedding\"},{\"id\":\"wedding-type-3\",\"description\":\"Sikh Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1525135850648-b42365991054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzaWtoJTIwd2VkZGluZ3xlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"sikh wedding\"},{\"id\":\"wedding-type-4\",\"description\":\"Muslim Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1644337111604-aa1816b542a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtdXNsaW0lMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"muslim wedding\"},{\"id\":\"wedding-type-5\",\"description\":\"Destination Weddings\",\"imageUrl\":\"https://images.unsplash.com/photo-1726682811289-968611755fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxkZXN0aW5hdGlvbiUyMHdlZGRpbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"destination wedding\"},{\"id\":\"wedding-type-6\",\"description\":\"Intimate Elopements\",\"imageUrl\":\"https://images.unsplash.com/photo-1721568818891-4a8e8d261232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxlbG9wZW1lbnQlMjBjb3VwbGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"elopement couple\"},{\"id\":\"featured-1\",\"description\":\"Priya & Rohan's Goa Wedding\",\"imageUrl\":\"https://images.unsplash.com/photo-1576694667642-6f289dd54187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmVhY2h8ZW58MHx8fHwxNzU4NjUxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding beach\"},{\"id\":\"featured-2\",\"description\":\"Aisha & Sameer's Udaipur Celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1739295193565-a9137fd50451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwYWxhY2UlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"palace wedding\"},{\"id\":\"featured-3\",\"description\":\"Jasleen & Karan's Delhi Mehendi\",\"imageUrl\":\"https://images.unsplash.com/photo-1562508548-69377b81ab9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mehendi ceremony\"},{\"id\":\"featured-4\",\"description\":\"A Bride's Final Touches\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"featured-5\",\"description\":\"A Groom's Regal Portrait\",\"imageUrl\":\"https://images.unsplash.com/photo-1670291362999-00f36b631e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxncm9vbSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODYzMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"groom portrait\"},{\"id\":\"service-prewedding-1\",\"description\":\"Couple in a scenic pre-wedding shoot location\",\"imageUrl\":\"https://images.unsplash.com/photo-1617335048933-4efb94f812f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"service-prewedding-2\",\"description\":\"Candid moment during an engagement shoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1650983422936-232cacb6843f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlbmdhZ2VtZW50JTIwcGhvdG98ZW58MHx8fHwxNzU4NjM4Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"engagement photo\"},{\"id\":\"service-hindu-1\",\"description\":\"Vibrant Haldi ceremony celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1671339911501-622930e159ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxoYWxkaSUyMGNlcmVtb255fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"haldi ceremony\"},{\"id\":\"service-hindu-2\",\"description\":\"Intricate Mehendi design on bride's hands\",\"imageUrl\":\"https://images.unsplash.com/photo-1757331446901-8f935a107bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWhlbmRpJTIwZGVzaWdufGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"mehendi design\"},{\"id\":\"service-christian-1\",\"description\":\"Bride walking down the sunlit church aisle\",\"imageUrl\":\"https://images.unsplash.com/photo-1660286156087-911df708e663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwYWlzbGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding aisle\"},{\"id\":\"service-photo-1\",\"description\":\"Photographer capturing a wedding moment\",\"imageUrl\":\"https://images.unsplash.com/photo-1506355639690-a1f2a100689e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwcGhvdG9ncmFwaGVyfGVufDB8fHx8MTc1ODY0ODY2M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding photographer\"},{\"id\":\"service-film-1\",\"description\":\"A dramatic cinematic frame from a wedding film\",\"imageUrl\":\"https://images.unsplash.com/photo-1615632386447-50385a6b7fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwZmlsbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding film\"},{\"id\":\"service-live-1\",\"description\":\"Live streaming setup at a wedding\",\"imageUrl\":\"https://images.unsplash.com/photo-1685524989124-a14d282ae625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwbGl2ZXN0cmVhbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding livestream\"},{\"id\":\"service-guest-1\",\"description\":\"Guests enjoying a photo booth\",\"imageUrl\":\"https://images.unsplash.com/photo-1686853021307-e9e5b01cb85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwcGhvdG9ib290aHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding photobooth\"},{\"id\":\"service-deliverables-1\",\"description\":\"A beautiful luxury wedding album\",\"imageUrl\":\"https://images.unsplash.com/photo-1677658288290-2913716d4d74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nJTIwYWxidW18ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding album\"},{\"id\":\"service-addons-1\",\"description\":\"Drone shot of a grand wedding venue\",\"imageUrl\":\"https://images.unsplash.com/photo-1657394399009-6da68d48cf7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZHJvbmV8ZW58MHx8fHwxNzU4NjUxNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding drone\"},{\"id\":\"service-packages-1\",\"description\":\"Couple happily reviewing their wedding package options\",\"imageUrl\":\"https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3ZWRkaW5nJTIwcGxhbm5pbmd8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding planning\"},{\"id\":\"gallery-1\",\"description\":\"The first dance\",\"imageUrl\":\"https://images.unsplash.com/photo-1501601983405-7c7cabaa1581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx3ZWRkaW5nJTIwZGFuY2V8ZW58MHx8fHwxNzU4NjEwNDA4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding dance\"},{\"id\":\"gallery-2\",\"description\":\"Joyful moments with family\",\"imageUrl\":\"https://images.unsplash.com/photo-1654512721598-701864e913c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWRkaW5nJTIwZmFtaWx5fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding family\"},{\"id\":\"gallery-3\",\"description\":\"The grand exit\",\"imageUrl\":\"https://images.unsplash.com/photo-1731576089196-fe6c87b3287b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZXhpdHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding exit\"},{\"id\":\"gallery-4\",\"description\":\"Close-up of the wedding cake\",\"imageUrl\":\"https://images.unsplash.com/photo-1519654793190-2e8a4806f1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwY2FrZXxlbnwwfHx8fDE3NTg2MTA0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding cake\"},{\"id\":\"gallery-5\",\"description\":\"The bride's stunning portrait\",\"imageUrl\":\"https://images.unsplash.com/photo-1677691256999-45d69a11b197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"gallery-6\",\"description\":\"The groom looking dapper\",\"imageUrl\":\"https://images.unsplash.com/photo-1606217239566-1c893c2e110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxncm9vbSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODYzMjY0Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"groom portrait\"},{\"id\":\"about-philosophy\",\"description\":\"Premium Wedding Photography & Cinematography Services in Mumbai\",\"imageUrl\":\"https://images.unsplash.com/photo-1695535074727-dd2c5a349f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYW1lcmElMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzU4NjMxMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"camera equipment\"},{\"id\":\"team-1\",\"name\":\"Prabhakar Kumar\",\"role\":\"Founder\",\"imageUrl\":\"https://picsum.photos/seed/team-pk/100/100\"},{\"id\":\"team-2\",\"name\":\"Aman Tiwari\",\"role\":\"Managing Head and Lead Cinematographer\",\"imageUrl\":\"https://picsum.photos/seed/team-aman/100/100\"},{\"id\":\"team-3\",\"name\":\"Ritik Kumar\",\"role\":\"Lead Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-ritik/100/100\"},{\"id\":\"team-4\",\"name\":\"Sumedh Marathe\",\"role\":\"DOP & Senior Cinematographer\",\"imageUrl\":\"https://picsum.photos/seed/team-sumedh/100/100\"},{\"id\":\"team-5\",\"name\":\"Haider Ali\",\"role\":\"Photo Retoucher\",\"imageUrl\":\"https://picsum.photos/seed/team-haider/100/100\"},{\"id\":\"team-6\",\"name\":\"Daniel Sutnga\",\"role\":\"Video Editor\",\"imageUrl\":\"https://picsum.photos/seed/team-daniel/100/100\"},{\"id\":\"team-7\",\"name\":\"Sai Ganesham\",\"role\":\"Candid Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-sai/100/100\"},{\"id\":\"team-8\",\"name\":\"Vinay Odnala\",\"role\":\"Videographer\",\"imageUrl\":\"https://picsum.photos/seed/team-vinay/100/100\"},{\"id\":\"team-9\",\"name\":\"Ajit Adhal\",\"role\":\"Traditional Photographer\",\"imageUrl\":\"https://picsum.photos/seed/team-ajit/100/100\"},{\"id\":\"team-10\",\"name\":\"MD Naseem Ahmad\",\"role\":\"Traditional Videographer\",\"imageUrl\":\"https://picsum.photos/seed/team-naseem/100/100\"},{\"id\":\"avatar-1\",\"description\":\"Priya & Rohan testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-priya/40/40\"},{\"id\":\"avatar-2\",\"description\":\"Aisha & Sameer testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-aisha/40/40\"},{\"id\":\"avatar-3\",\"description\":\"Jasleen & Karan testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-jasleen/40/40\"},{\"id\":\"avatar-4\",\"description\":\"Neha & Vikram testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-neha/40/40\"},{\"id\":\"avatar-5\",\"description\":\"Sunita & Raj testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-sunita/40/40\"},{\"id\":\"avatar-6\",\"description\":\"Meera & Aditya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-meera/40/40\"},{\"id\":\"avatar-7\",\"description\":\"Anjali & Dhruv testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-anjali/40/40\"},{\"id\":\"avatar-8\",\"description\":\"Kabir & Zara testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-kabir/40/40\"},{\"id\":\"avatar-9\",\"description\":\"The Sharma Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-sharma/40/40\"},{\"id\":\"avatar-10\",\"description\":\"Rohan & Sania testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-rohan-s/40/40\"},{\"id\":\"avatar-11\",\"description\":\"The Mehta Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-mehta/40/40\"},{\"id\":\"avatar-12\",\"description\":\"Alok & Divya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-alok/40/40\"},{\"id\":\"avatar-13\",\"description\":\"The Iyer Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-iyer/40/40\"},{\"id\":\"avatar-14\",\"description\":\"Mr. & Mrs. Gupta testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-gupta/40/40\"},{\"id\":\"avatar-15\",\"description\":\"Simran & Arjun testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-simran/40/40\"},{\"id\":\"avatar-16\",\"description\":\"The Khan Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-khan/40/40\"},{\"id\":\"avatar-17\",\"description\":\"Riya & Varun testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-riya/40/40\"},{\"id\":\"avatar-18\",\"description\":\"The Desai Family testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-desai/40/40\"},{\"id\":\"avatar-19\",\"description\":\"Pooja & Sameer testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-pooja/40/40\"},{\"id\":\"avatar-20\",\"description\":\"Nikhil & Ananya testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-nikhil/40/40\"},{\"id\":\"avatar-21\",\"description\":\"Mr. & Mrs. Chatterjee testimonial\",\"imageUrl\":\"https://picsum.photos/seed/avatar-chatterjee/40/40\"},{\"id\":\"service-family-celebration\",\"description\":\"A joyous family birthday celebration\",\"imageUrl\":\"https://images.unsplash.com/photo-1631857455684-a54a2f03665f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5fGVufDB8fHx8MTc1ODU5MTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"birthday party\"},{\"id\":\"service-baby-kids\",\"description\":\"A tender moment from a maternity shoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1751882796518-b7ce43063643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYXRlcm5pdHklMjBzaG9vdHxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"maternity shoot\"},{\"id\":\"service-religious-cultural\",\"description\":\"A sacred moment during a traditional thread ceremony\",\"imageUrl\":\"https://images.unsplash.com/photo-1551979122-3a33d9391335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWxpZ2lvdXMlMjBjZXJlbW9ueXxlbnwwfHx8fDE3NTg2MjAxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"religious ceremony\"},{\"id\":\"service-social-milestones\",\"description\":\"A surprise proposal captured beautifully\",\"imageUrl\":\"https://images.unsplash.com/photo-1758523419745-6df183fd5eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdXJwcmlzZSUyMHByb3Bvc2FsfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"surprise proposal\"},{\"id\":\"blog-1\",\"description\":\"Relaxed bride during a wedding photoshoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1742569283929-5203924e1e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWxheGVkJTIwYnJpZGV8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"relaxed bride\"},{\"id\":\"blog-2\",\"description\":\"Couple during a pre-wedding shoot in a palace\",\"imageUrl\":\"https://images.unsplash.com/photo-1596546458079-bceb0b6e17b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"blog-3\",\"description\":\"Cinematic shot from a wedding film\",\"imageUrl\":\"https://images.unsplash.com/photo-1716285274563-c18a1fefa17d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwZmlsbXxlbnwwfHx8fDE3NTg2NTE3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding film\"},{\"id\":\"blog-4\",\"description\":\"Bride looking radiant in her wedding photos\",\"imageUrl\":\"https://images.unsplash.com/photo-1633037387298-dc308ab1bce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxicmlkZSUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODU4Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"bride portrait\"},{\"id\":\"blog-5\",\"description\":\"Couple reviewing a wedding budget planner\",\"imageUrl\":\"https://images.unsplash.com/photo-1596352536485-85b79a7ea8e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3ZWRkaW5nJTIwYnVkZ2V0fGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding budget\"},{\"id\":\"blog-6\",\"description\":\"Couple signing a contract document\",\"imageUrl\":\"https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzaWduaW5nJTIwY29udHJhY3R8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"signing contract\"},{\"id\":\"blog-7\",\"description\":\"Couple laughing during a pre-wedding photoshoot\",\"imageUrl\":\"https://images.unsplash.com/photo-1597427681188-3ef80f2631ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxwcmUlMjB3ZWRkaW5nfGVufDB8fHx8MTc1ODY1MTc5OHww&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"pre wedding\"},{\"id\":\"blog-8\",\"description\":\"Photographer checking the time during a wedding event\",\"imageUrl\":\"https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHx3ZWRkaW5nJTIwZXZlbnR8ZW58MHx8fHwxNzU4NjQxMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding event\"},{\"id\":\"blog-9\",\"description\":\"Editor working on a wedding photo on a computer\",\"imageUrl\":\"https://images.unsplash.com/photo-1621600411688-4be93cd68504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwaG90byUyMGVkaXRpbmd8ZW58MHx8fHwxNzU4NjAwOTUyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"photo editing\"},{\"id\":\"blog-10\",\"description\":\"Videographer filming a wedding ceremony\",\"imageUrl\":\"https://images.unsplash.com/photo-1737756512868-c9bba3afba1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHl8ZW58MHx8fHwxNzU4NjUxNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"imageHint\":\"wedding videography\"}]}"));}}),
"[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"00b0bf44e9e3d6fa7ceff12635df960ac4ad84ea5a":"getAllBlogPosts","4047a58d26854f8913581f7b2676598553daa54891":"deleteBlogPost","404f196e3dc68c1d4eb551af3f899ec99014b042f4":"getBlogPostBySlug","40a27d9bd25f4ba26293bc9b566cad715e1b4f30ca":"createBlogPost","605b0b12eaa5d0b3f3f231f82643c204b1b91b7243":"updateBlogPost"},"",""] */ __turbopack_context__.s({
    "createBlogPost": (()=>createBlogPost),
    "deleteBlogPost": (()=>deleteBlogPost),
    "getAllBlogPosts": (()=>getAllBlogPosts),
    "getBlogPostBySlug": (()=>getBlogPostBySlug),
    "updateBlogPost": (()=>updateBlogPost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const getBlogCollection = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Firestore is not initialized.");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"].collection('blogPosts');
};
function docToBlogPost(doc) {
    const data = doc.data();
    const dateValue = data.date;
    const parsedDate = dateValue && typeof dateValue.toDate === "function" ? dateValue.toDate().toISOString() : dateValue instanceof Date ? dateValue.toISOString() : typeof dateValue === "string" ? dateValue : new Date().toISOString();
    return {
        id: doc.id,
        slug: data.slug,
        title: data.title,
        date: parsedDate,
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
        content: data.content
    };
}
async function getAllBlogPosts() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        const posts = [
            {
                id: '1',
                slug: 'top-10-luxury-wedding-venues-mumbai-photography',
                title: 'Top 10 Luxury Wedding Venues in Goa for Stunning Photography',
                date: '2024-08-05T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Discover Goa\'s most photogenic luxury wedding venues. From grand sea-facing hotels in Colaba to exclusive properties in Morjim, Goa, we unveil the best backdrops for your wedding photos.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-1'),
                content: `
                <p>Choosing a venue is one of the most significant decisions in wedding planning, setting the stage for your entire celebration. For a city as vibrant and glamorous as Goa, the options are as diverse as they are stunning. As wedding photographers and filmmakers at Shaadifilms, we have a unique perspective on what makes a venue truly photogenic. It's more than just a beautiful space; it’s about the light, the architecture, the ambiance, and the variety of backdrops it offers.</p>
                <p>Here’s our curated list of the top 10 luxury wedding venues in Goa that provide a breathtaking canvas for your wedding story, ensuring every photo and frame is a work of art.</p>
                
                <h2>1. The Taj Mahal Palace, Colaba</h2>
                <p><strong>Why we love it:</strong> An icon of luxury, its heritage architecture and breathtaking views of the Gateway of India are unparalleled. The grand ballrooms, dramatic staircases, and seaside lawns offer a variety of classic and majestic photo opportunities that are simply timeless. Every corner tells a story of elegance and history.</p>
                
                <h2>2. JW Marriott, Juhu</h2>
                <p><strong>Why we love it:</strong> Famous for its prime beachfront location near Morjim, Goa, this hotel is perfect for capturing romantic sunset pheras against the backdrop of the Arabian Sea. The Lotus Cafe, with its expansive lily pond, provides a serene and beautiful setting for post-ceremony couple shots, creating a tranquil oasis amidst the city's hustle.</p>
                
                <h2>3. The St. Regis, Lower Parel</h2>
                <p><strong>Why we love it:</strong> Offering some of the most spectacular panoramic views of the city skyline from its higher floors, The St. Regis is the epitome of urban sophistication. Its opulent interiors, crystal chandeliers, and grand ballroom are perfect for a glamorous, high-society wedding. The modern luxury here is a photographer's dream.</p>
                
                <h2>4. Grand Hyatt, Santacruz</h2>
                <p><strong>Why we love it:</strong> A modern palace with vast event spaces, stunning water features, and contemporary art installations. The expansive, pillarless ballroom is a blank canvas for grand decorations, and the garden areas are lovely for vibrant outdoor rituals like Mehendi or Haldi ceremonies.</p>
                
                <h2>5. Trident, Nariman Point</h2>
                <p><strong>Why we love it:</strong> With its coveted location on Marine Drive, the Trident offers stunning, unobstructed views of the Queen's Necklace. Photos against the backdrop of the Arabian Sea and the glittering city lights at night are simply magical here. It’s a quintessential Goa experience.</p>
                
                <h2>6. Four Seasons Hotel, Worli</h2>
                <p><strong>Why we love it:</strong> Home to Goa's highest rooftop bar, Aer, this venue provides a modern, chic, and incredibly stylish setting. Imagine your pre-wedding shoot or cocktail party with the entire city spread out beneath you. The indoor spaces are equally luxurious and offer sleek, contemporary backdrops.</p>
                
                <h2>7. ITC Grand Central, Parel</h2>
                <p><strong>Why we love it:</strong> Inspired by British Colonial architecture, this hotel offers a unique blend of old-world charm and modern luxury. The beautiful terrace gardens and the grand 'Hall of Poets' provide a distinguished and elegant backdrop for photography, adding a touch of classic romance to your album.</p>

                <h2>8. Sofitel, BKC</h2>
                <p><strong>Why we love it:</strong> Bringing a touch of French elegance to Goa, the Sofitel in the Bandra Kurla Complex is known for its chic interiors and versatile event spaces. The lobby's grand chandelier and the hotel's artistic details make for unique and stylish photo compositions that stand out.</p>

                <h2>9. Sun-n-Sand, Juhu</h2>
                <p><strong>Why we love it:</strong> As Goa's first beachfront hotel, Sun-n-Sand has a classic, nostalgic charm. It offers direct access to Juhu Beach, making it ideal for couples who want the sea as a backdrop without the travel. The poolside area is perfect for vibrant and fun-filled Mehendi or Sangeet functions.</p>

                <h2>10. Renaissance Goa Convention Centre Hotel, Powai</h2>
                <p><strong>Why we love it:</strong> Nestled on the banks of Powai Lake, this venue feels like a serene retreat from the city. The sprawling lawns, lakeside views, and beautiful architecture provide a tranquil and picturesque setting that's a rare find in Goa, offering a perfect blend of nature and luxury.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Your venue choice is the canvas upon which your wedding story is painted. Each of these Goa venues offers a unique blend of luxury, character, and photographic potential. The right location not only enhances your celebration but also elevates your wedding album and film from a collection of memories to a true work of art.</p>
                <p><strong>Ready to find the perfect venue and have it captured beautifully? <a href="/book">Contact Shaadifilms today</a> to discuss your vision and book a consultation with our expert team of wedding photographers in Goa.</strong></p>
            `
            },
            {
                id: '2',
                slug: 'how-to-plan-wedding-day-timeline-for-best-photos',
                title: 'How to Plan Your Wedding Day Timeline for the Best Photos',
                date: '2024-07-28T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'Your wedding day will fly by. A well-planned timeline is key to ensuring we capture every important moment without the stress. Here’s a guide from a top wedding photographer in Goa to scheduling your day for beautiful, relaxed photos.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-2'),
                content: `
                <p>As photographers and filmmakers, we know that the secret to a relaxed and photogenic wedding day is a well-thought-out timeline. Your wedding day will be a whirlwind of emotions, rituals, and celebrations. Rushing from one event to another can create stress, which can show in your photos and film. A good timeline isn't just a schedule; it's a plan for a joyful, stress-free day that allows us the space to capture your story beautifully.</p>
                <p>Here’s our expert guide to structuring your day to get those dreamy, unhurried shots that you'll cherish forever.</p>
                
                <h2>The "Golden Hour" is Everything for Wedding Photography</h2>
                <p>If there's one piece of advice we can't stress enough, it's this. The "golden hour"—the hour just after sunrise and before sunset—provides a soft, warm, and magical light. We always recommend scheduling your main couple portrait session during this time. The light is incredibly flattering, forgiving, and creates a romantic, ethereal glow. Talk to your wedding photographer in Goa about the sunset timing on your wedding date, and let's block that hour out for just the two of you. It's a perfect moment to breathe, connect, and let us capture the pure magic of your love before the reception madness begins.</p>
                
                <h2>Buffer, Buffer, and More Buffer!</h2>
                <p>On a wedding day, everything takes longer than you think. Hair and makeup can run late, relatives might pull you aside for a chat, and in a city like Goa, traffic can be unpredictable. Add 20-30 minute buffers between major events (like getting ready and leaving for the venue, or the ceremony and the reception). This extra time is a lifesaver. It ensures you're not flustered, gives you moments to relax, and provides us photographers with the space to capture those beautiful, candid, unscripted moments that often become the most treasured memories.</p>

                <h2>Detail Shots Set the Scene</h2>
                <p>You've spent months meticulously choosing your outfits, jewelry, invitations, and decor. We want to capture it all! Schedule about 30-45 minutes for your photography team to photograph these details before things get hectic. This means having your lehenga/gown, shoes, rings, and invitation suite ready in one place. It also allows us to get clean shots of the venue decor before guests arrive. These photos add richness and context to your wedding story.</p>

                <h2>Don't Rush Getting Ready</h2>
                <p>This is where your story begins. Allocate at least 2 to 2.5 hours for the bride's getting-ready photos and about 1.5 hours for the groom. This isn't just about makeup and hair; it's about capturing the anticipation, the final touches, and the beautiful moments with your parents, siblings, and bridal party. Rushing this part means missing out on some of the most emotional and intimate pictures of the day.</p>

                <h2>Family Portraits: Make a List, Check It Twice</h2>
                <p>Formal family photos are incredibly important, but they can be chaotic if not planned. Before the wedding, make a list of the exact groupings you want (e.g., Couple with Bride's Parents, Couple with both sets of Parents & Siblings). Allocate 2-3 minutes per group. A well-organized list, coordinated by a family member who knows everyone, can get this done in 20-30 minutes, freeing you up to enjoy your party instead of spending an hour gathering relatives.</p>
                
                <hr>
                <h3>Conclusion</h3>
                <p>A great wedding timeline is the unsung hero of a beautiful wedding album. By planning ahead and building in time for both the big events and the quiet moments, you give yourself the gift of a relaxed day and provide your photography team the opportunity to create truly magical images.</p>
                <p><strong>Feeling overwhelmed? Don't be. As part of our luxury service, we work closely with you to craft the perfect timeline. <a href="/book">Book a consultation with Shaadifilms</a> and let's plan your perfect day, together.</strong></p>
            `
            },
            {
                id: '3',
                slug: 'cinematic-wedding-films-vs-traditional-videography',
                title: 'Cinematic Wedding Film Goa: What\'s the Difference vs. Traditional?',
                date: '2024-07-20T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'You’ve heard the terms, but what do they really mean? We break down the difference between a cinematic film and a traditional video to help you decide what’s right for your big day in Goa.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-3'),
                content: `
                <p>When it comes to capturing your wedding in motion, you'll often encounter two main styles: traditional videography and cinematic wedding films. While both document your day, their approach, equipment, and the final product are vastly different. At Shaadifilms, a leading wedding videographer in Goa, we specialize in the latter. Understanding the distinction is key to choosing the right coverage for your celebration.</p>
                
                <h2>What is Traditional Wedding Videography?</h2>
                <p>Think of this as a comprehensive, linear documentary. A traditional wedding video aims to capture the event as it unfolds, from start to finish. It's typically a long-form video (often 1-3 hours) that covers every ritual, speech, and performance in chronological order. The focus is on recording, not necessarily storytelling. The editing is straightforward, often with basic transitions and the natural audio from the day.</p>
                <ul>
                    <li><strong>Goal:</strong> To document everything.</li>
                    <li><strong>Length:</strong> 1 to 3 hours.</li>
                    <li><strong>Style:</strong> Chronological and observational.</li>
                    <li><strong>Best for:</strong> Archiving every single moment for family records.</li>
                </ul>
                
                <h2>What is a Cinematic Wedding Film?</h2>
                <p>This is our passion and specialty at Shaadifilms. A cinematic wedding film is a shorter, beautifully crafted, story-driven highlight reel that feels more like a movie than a recording. We use artistic camera angles, sophisticated equipment like drones, gimbals, and sliders, and a multi-camera setup to capture dynamic, visually stunning shots. The magic happens in the edit. We non-linearly weave together the most impactful visual moments with emotional audio—vows, speeches, letters, or interviews—to tell the <strong>story</strong> of your day. It’s about capturing the <strong>feeling and emotion</strong>, not just the events.</p>
                    <ul>
                        <li><strong>Goal:</strong> To tell a story and evoke emotion.</li>
                        <li><strong>Length:</strong> 5 to 15 minutes for a highlight film.</li>
                        <li><strong>Style:</strong> Artistic, emotional, and story-driven with high production value.</li>
                        <li><strong>Best for:</strong> A powerful, shareable keepsake that you'll watch for years to come.</li>
                    </ul>

                    <h3>Key Differences at a Glance</h3>
                    <ol>
                      <li><strong>Storytelling vs. Recording:</strong> The biggest difference is the narrative. Cinematic films are edited to tell a compelling story, focusing on the emotional arc of your day. Traditional videos provide a chronological record.</li>
                      <li><strong>Equipment and Techniques:</strong> Cinematic filmmaking employs tools and techniques from cinema—like slow motion, aerial drone shots, and stabilized camera movements—to create visually engaging footage.</li>
                      <li><strong>Editing and Post-Production:</strong> A cinematic edit is far more intensive. It involves meticulous color grading (to achieve a specific look and feel), sound design, and carefully chosen licensed music to enhance the emotional impact.</li>
                      <li><strong>Length and Purpose:</strong> A traditional video is an archive. A cinematic film is a piece of art you'll want to watch over and over and proudly share with friends and family.</li>
                    </ol>

                    <h3>Why Not Both? The Shaadifilms Approach</h3>
                    <p>We believe you shouldn't have to choose between art and archive. That's why our popular Gold and Platinum packages include a stunning cinematic highlight film (perfect for sharing on social media) <strong>and</strong> a comprehensive traditional video for your family archives. You get the best of both worlds: a powerful, emotional film that captures the soul of your wedding, and a complete record of your entire celebration for posterity.</p>
                    
                    <hr>
                    <h3>Conclusion</h3>
                    <p>Understanding the difference helps you appreciate the artistry and effort that goes into creating a wedding film that truly feels like you. A cinematic film isn't just a video; it's the story of your beginning, told with the beauty and emotion it deserves.</p>
                    <p><strong>Want to see how we can turn your wedding day into a cinematic masterpiece? <a href="/contact">Get in touch with Shaadifilms</a> and let's talk about your love story.</strong></p>
                `
            },
            {
                id: '4',
                slug: 'must-have-shots-for-your-mumbai-wedding-album',
                title: '10 Must-Have Shots for Your Goa Wedding Album',
                date: '2024-07-12T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'From the detailed shots of your lehenga to the candid moments of the vidaai, here are 10 photos you absolutely need to tell the complete story of your Goa wedding.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-4'),
                content: `
                <p>Your wedding album is more than just a collection of photos; it's a timeless keepsake, a tangible storybook of one of the most important days of your life. It deserves to be perfect. While every wedding is unique, there are certain quintessential moments that form the narrative backbone of a compelling wedding story. To make sure it tells the full, vibrant story of your day, here is our definitive list of 10 essential shots every Goa wedding album should include to be truly complete.</p>
                
                <h2>1. The Details Shot</h2>
                <p>It all starts here. A beautifully composed shot of your meticulously chosen lehenga or gown hanging in the morning light, the intricate details of your jewelry, your custom invitations, and your wedding shoes. These images set the scene, establish the aesthetic of your day, and highlight the thought you put into every element.</p>
                    
                <h2>2. The Getting Ready Moments</h2>
                <p>These are the quiet, emotional moments before the grand celebration begins. We look for candid shots of the nervous excitement and laughter with your closest friends and family, the final touch of lipstick, your mother helping with your dupatta, or the groom sharing a quiet moment with his father. These are the heartfelt memories that add depth to your story.</p>
                    
                <h2>3. The Bride & Groom Portraits (Solo)</h2>
                <p>A stunning, calm portrait of both the bride and groom, fully ready, before they see each other. This is a moment to capture the anticipation and showcase each of your complete looks in all their glory. It's a powerful portrait that stands on its own and celebrates the individual before they become a pair.</p>
                    
                <h2>4. The First Look</h2>
                <p>The first look is pure, unscripted emotion. Whether it's with your partner before the ceremony or with your parents as they see you for the first time as a bride, this raw, emotional moment is priceless and always a favorite in any wedding album. We capture it discreetly to preserve its authenticity and the genuine reactions.</p>
                    
                <h2>5. The Baraat's Energy</h2>
                <p>The vibrant, chaotic energy of the groom's procession is a quintessential part of an Indian wedding. A wide, dynamic shot capturing the dancing, the music, the colors, and the joyous energy of friends and family is an absolute must-have. It’s a snapshot of pure celebration.</p>

                <h2>6. The Bride's Grand Entrance</h2>
                <p>This is a show-stopping moment. All eyes on the bride. A shot capturing her entrance, whether under a floral phoolon ki chadar or walking down the aisle, is iconic. We love to capture the groom's reaction at this very moment, too—it's often a frame filled with love and awe.</p>

                <h2>7. The Varmala / Jaimala</h2>
                <p>The playful and pivotal moment of the garland exchange. A dynamic shot that freezes the action, the smiles, the laughter, and the shower of petals is essential. We use multiple angles to ensure we capture the full energy of this tradition, a perfect blend of fun and ritual.</p>

                <h2>8. The Sacred Rituals (Pheras or Vows)</h2>
                <p>This is the sacred heart of the ceremony. A respectful, intimate shot that captures the solemnity and connection between the couple as they take their pheras around the holy fire or exchange their vows. It's about capturing the quiet intensity of the promises you're making to each other.</p>

                <h2>9. Candid Guest Moments</h2>
                <p>Your loved ones are a huge part of your story. We're always on the lookout for those candid laughs, happy tears from parents watching the ceremony, and crazy dance-floor antics from friends. These photos show the joy of the people who came to celebrate with you and add life and context to your album.</p>

                <h2>10. The Vidaai / Grand Exit</h2>
                <p>This is the emotional climax of the wedding. The Vidaai, with its poignant goodbyes and bittersweet tears, or a celebratory grand exit as a newly married couple amidst sparklers or flower petals. This powerful, story-ending shot is the perfect closing image for your wedding album.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>A great wedding album is a blend of iconic portraits and unscripted moments. By ensuring these key shots are on your photographer's radar, you're not just getting photos—you're curating a complete and emotional story that you can relive for a lifetime.</p>
                <p><strong>Let us tell your story. <a href="/book">Schedule a consultation with Shaadifilms</a>, and let's create a wedding album that is as timeless and beautiful as your love.</strong></p>
            `
            },
            {
                id: '5',
                slug: 'how-to-budget-for-wedding-photography-videography',
                title: 'How Much Does a Wedding Photographer Cost in Goa?',
                date: '2024-06-10T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'Setting a budget for photo and video can be tricky. We break down wedding photography prices in Goa and offer tips on how to allocate your funds for the best results.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-5'),
                content: `
                <p>Your wedding photos and films are more than just memories; they're an investment. They are the only part of your wedding day that will increase in value over time. But when you're planning a wedding, the costs can quickly add up, and it can be challenging to know how much to allocate for photography and videography. At Shaadifilms, we believe in transparency, so let's demystify wedding photography prices in Goa.</p>
                
                <h2>The 10-15% Rule of Thumb</h2>
                <p>A common guideline is to allocate around <strong>10-15% of your total wedding budget</strong> to photography and videography. For many couples, capturing the day beautifully is a top priority, and they may even choose to allocate a higher percentage. This investment typically covers the team's time, talent, equipment, and the extensive post-production work required to create your final album and film.</p>

                <h2>What Influences Wedding Photography Prices in Goa?</h2>
                <p>Not all photography packages are created equal. Several factors determine the final price:</p>
                <ul>
                    <li><strong>Experience & Brand Reputation:</strong> A seasoned, high-end studio like Shaadifilms commands a higher price due to a proven track record, a distinct artistic style, and a luxury client experience. You're investing in peace of mind and guaranteed quality.</li>
                    <li><strong>Hours of Coverage:</strong> The duration of your event is a major factor. A single-day event will cost less than a multi-day celebration with pre-wedding rituals like Haldi, Mehendi, and Sangeet.</li>
                    <li><strong>Team Size:</strong> The number of photographers and videographers needed to cover your event adequately affects the cost. A larger wedding with many guests and parallel events will require a bigger team.</li>
                    <li><strong>Deliverables:</strong> The final products you choose will impact the price. This includes the number of edited photos, the length of the cinematic film, the inclusion of a traditional video, and the type and size of a printed album.</li>
                    <li><strong>Add-Ons:</strong> Services like pre-wedding shoots, drone coverage, live streaming, or same-day edits are typically add-ons that increase the total investment.</li>
                </ul>

                <h2>Understanding Different Wedding Photography Packages</h2>
                <p>At Shaadifilms, we offer a range of packages (like Silver, Gold, and Platinum) to suit different needs and budgets. It's important to look at what's included in each:</p>
                <ul>
                    <li><strong>Entry-Level Packages</strong> might include one photographer and one videographer for a single day, delivering a set number of edited photos and a short highlight film.</li>
                    <li><strong>Mid-Range Packages</strong> (our most popular) often include a larger team for multiple days, both candid and traditional coverage, a cinematic film, a full-length video, and a high-quality printed album.</li>
                    <li><strong>Luxury/Bespoke Packages</strong> are fully customized for grand, multi-day, or destination weddings, including everything from pre-wedding shoots to extensive deliverables and advanced equipment.</li>
                </ul>

                <h3>Tips for Budgeting Smartly</h3>
                <ol>
                    <li><strong>Prioritize What Matters:</strong> Decide how important photography and videography are to you. If you value having beautiful, lasting memories, consider allocating a larger portion of your budget here.</li>
                    <li><strong>Book in Advance:</strong> Top-tier photographers in Goa get booked up to a year or more in advance. Booking early not only secures your date but can also lock in current pricing before it increases.</li>
                    <li><strong>Be Clear About Your Needs:</strong> Have an open conversation with your photographer about your event's scale and your expectations. This helps them recommend the right package without upselling you on services you don't need.</li>
                    <li><strong>Read the Fine Print:</strong> Understand what's included in your package regarding travel costs (for destination weddings), taxes (like GST), and any potential overtime charges.</li>
                </ol>

                <hr>
                <h3>Conclusion</h3>
                <p>Budgeting for wedding photography is about investing in the legacy of your day. By understanding the factors that influence cost and prioritizing what's important to you, you can make an informed decision that you'll be happy with for decades to come. Your wedding photos and film are the one thing you'll look back on to relive the joy, the laughter, and the love.</p>
                <p><strong>Ready to discuss a package that fits your dream wedding? <a href="/packages">Explore our packages</a> or <a href="/book">contact us for a custom quote</a>. We’re here to help you make the best investment in your memories.</strong></p>
            `
            },
            {
                id: '6',
                slug: 'understanding-your-wedding-photography-contract',
                title: 'Questions to Ask Your Wedding Photographer Before Booking',
                date: '2024-05-15T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'A contract is your safety net. We explain the crucial clauses and questions to ask to ensure you and your Goa wedding photographer are on the same page.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-6'),
                content: `
                <p>Booking your wedding photographer is an exciting step, and it culminates in signing a contract. While it may seem like a formality, the contract is one of the most important documents you'll sign during your wedding planning. It protects both you and your photographer and ensures there are no surprises down the line. At Shaadifilms, transparency is a core value, so we believe in helping our clients understand exactly what they're signing.</p>
                <p>Here are the key clauses you should always look for and questions to ask your wedding photographer before booking.</p>

                <h2>1. Services and Deliverables</h2>
                <p>This is the heart of the contract. It should explicitly state what you are paying for. Look for:</p>
                <ul>
                    <li><strong>Coverage Hours & Dates:</strong> The exact dates and the number of hours of coverage for each event (e.g., "8 hours on December 15th for the wedding, 4 hours on December 14th for the Sangeet").</li>
                    <li><strong>Team Composition:</strong> The number of photographers and videographers who will be present.</li>
                    <li><strong>Final Deliverables:</strong> A precise list of what you will receive. For example: "A minimum of 800 high-resolution edited images," "a 5-7 minute cinematic highlight film," and "a 30 page 12*18 printed album."</li>
                </ul>

                <h2>2. Payment Schedule</h2>
                <p>The contract must clearly outline the total cost and the payment structure. This typically includes:</p>
                <ul>
                    <li><strong>Total Fee:</strong> The full amount for all services.</li>
                    <li><strong>Retainer/Booking Fee:</strong> The non-refundable deposit required to secure your date. This is usually 50% of the total fee.</li>
                    <li><strong>Payment Deadlines:</strong> When the remaining balance is due (e.g., "The remaining 50% is due one week before the first event.").</li>
                    <li><strong>Accepted Payment Methods:</strong> How the photographer accepts payments (bank transfer, credit card, etc.).</li>
                </ul>

                <h2>3. Cancellation and Postponement Policy</h2>
                <p>Life is unpredictable. Your contract should clearly state what happens if you need to cancel or postpone your wedding. Key points include:</p>
                <ul>
                    <li><strong>Cancellation by Client:</strong> It should explain that the initial retainer is non-refundable, as it compensates the photographer for holding your date and turning down other potential work.</li>
                    <li><strong>Postponement:</strong> The policy for rescheduling your date. Often, the retainer can be transferred to a new date, subject to the photographer's availability.</li>
                    <li><strong>Cancellation by Photographer:</strong> A crucial clause that outlines what happens if the photographer is unable to cover your event due to illness or emergency. A professional studio will always have a plan, such as providing a replacement photographer of equal or greater skill.</li>
                </ul>

                <h2>4. Image Rights and Usage (Copyright and Model Release)</h2>
                <p>This section can seem technical, but it's very important:</p>
                <ul>
                    <li><strong>Copyright:</strong> In most countries, the photographer legally owns the copyright to the images they create. This means they can use them for their portfolio, social media, and advertising.</li>
                    <li><strong>Usage Rights (for you):</strong> The contract should grant you a license to use the photos for personal, non-commercial purposes. This means you can print them, share them on social media, and give them to family, but you can't sell them or use them for commercial gain.</li>
                    <li><strong>Model Release:</strong> This is the part where you give the photographer permission to use your images in their portfolio. If you are a very private person and do not want your photos used publicly, this is something you must discuss with your photographer before signing.</li>
                </ul>

                <h2>5. Delivery Timeline</h2>
                <p>To manage expectations, the contract should provide a clear timeline for when you can expect to receive your photos and videos. For example: "A sneak peek of 15-20 images will be delivered within one week. The full gallery of digital images will be delivered within 8-10 weeks. The cinematic film and album design will be completed within 12-16 weeks from the wedding date."</p>
                
                <hr>
                <h3>Conclusion</h3>
                <p>A detailed, professional contract is a sign of a professional and trustworthy photographer. It ensures that everyone is on the same page and protects your investment. Don't be afraid to ask questions about any clause you don't understand. A good photographer will be happy to walk you through it to ensure you feel completely comfortable.</p>
                <p><strong>At Shaadifilms, our contracts are built on transparency and trust. <a href="/book">Book a consultation</a>, and we'd be happy to discuss our process and how we protect your precious memories.</strong></p>
            `
            },
            {
                id: '7',
                slug: 'importance-of-pre-wedding-photoshoot',
                title: 'Is a Pre-Wedding Photoshoot in Goa Worth It?',
                date: '2024-04-20T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'Wondering if you should do a pre-wedding shoot in Goa? We explore the benefits, from getting comfortable in front of the camera to finding the best pre-wedding shoot locations.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-7'),
                content: `
                <p>In the midst of wedding planning chaos, adding another event like a pre-wedding photoshoot might seem like an extra expense and effort. Many couples wonder, "Is it really necessary?" As wedding photographers who have guided countless couples through this experience, our answer is a resounding yes! A pre-wedding shoot is more than just an extra set of photos; it's a valuable and fun part of your wedding journey.</p>
                <p>Let’s break down why a pre-wedding shoot is an investment you won’t regret.</p>
                
                <h2>1. It's the Perfect "Camera Rehearsal"</h2>
                <p>Most of us aren't professional models. Feeling a bit awkward in front of a camera is completely normal! A pre-wedding shoot is the perfect opportunity to break the ice with your photographer and get comfortable with being the center of attention. You'll learn how your photographer directs, what poses feel natural to you, and how to relax and be yourselves. This "rehearsal" makes a huge difference on the wedding day, leading to more natural, genuine, and effortless photos when time is tight.</p>

                <h2>2. Build a Connection with Your Photographer</h2>
                <p>Your photographer will be with you for some of the most intimate moments of your wedding day. The pre-wedding shoot is a chance to build a real connection and rapport with them. We get to see your chemistry as a couple, understand your personalities, and learn what makes you laugh. This relationship translates into photos that truly reflect who you are because we're no longer strangers but friends capturing your story.</p>

                <h2>3. Create Beautiful, Casual Photos</h2>
                <p>Wedding day photos are often formal and ritual-focused. A pre-wedding shoot allows you to capture beautiful, professional photos in a casual, relaxed setting. You can choose a location that's special to you—like the cafe where you had your first date, a scenic spot in Lonavala, or one of the many stunning pre-wedding shoot locations in Goa. You can wear what you love without the weight of heavy wedding attire. These images are perfect for:</p>
                <ul>
                    <li>"Save the Date" cards and wedding invitations.</li>
                    <li>A guest book with your photos.</li>
                    <li>A slideshow to play during your Sangeet or reception.</li>
                    <li>Decorating your new home with personal art.</li>
                </ul>

                <h2>4. Tell Your Love Story Visually</h2>
                <p>Your wedding day is the grand finale, but your love story started long before. A pre-wedding shoot can visually narrate that story. We can create a concept that reflects your journey—be it your shared love for travel, movies, or simply a quiet walk on the beach. It adds another beautiful chapter to your wedding album, showcasing your life as a couple before you say "I do."</p>
                
                <h2>5. It’s a Chance to Slow Down and Connect</h2>
                <p>Wedding planning can be stressful. A pre-wedding shoot is a wonderful excuse to step away from the logistics, spend a few hours focused entirely on each other, and just have fun. It's a date day where you get to laugh, be romantic, and create new memories, all while a professional captures it beautifully. Many of our couples tell us it was one of their favorite parts of the whole wedding experience.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>So, is a pre-wedding shoot worth the cost? Absolutely. It's an investment in better wedding day photos, a stronger connection with your photographer, and a beautiful set of memories that celebrate your relationship. It’s an experience that adds immense value to your wedding journey, leaving you with not just stunning images but also more confidence and comfort for the big day itself.</p>
                <p><strong>Interested in creating a unique pre-wedding story with us? <a href="/contact">Get in touch with Shaadifilms</a>, and let’s brainstorm some creative ideas for your shoot!</strong></p>
            `
            },
            {
                id: '8',
                slug: 'full-day-vs-half-day-coverage-mumbai-wedding',
                title: 'Full-Day vs. Half-Day Coverage: Which is Right for Your Goa Wedding?',
                date: '2024-03-25T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Deciding on the duration of photography coverage can be confusing. We compare full-day and half-day options to help you choose the best fit for your Goa wedding.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-8'),
                content: `
                <p>One of the first questions couples ask when booking wedding photography is, "How many hours of coverage do we need?" The answer depends entirely on the story you want to tell. In a city like Goa, where weddings can range from intimate, single-ceremony events to grand, multi-day extravaganzas, choosing between half-day and full-day coverage is a key decision. Let's break down what each option typically includes and which might be right for you.</p>

                <h2>What is Half-Day Coverage? (Typically 4-6 Hours)</h2>
                <p>Half-day coverage is designed for shorter, more intimate weddings. It focuses on capturing the most essential parts of your day without documenting every single moment from start to finish.</p>
                <h3>What it usually covers:</h3>
                <ul>
                    <li>The main ceremony (e.g., the Pheras or the Church ceremony).</li>
                    <li>Formal family portraits.</li>
                    <li>A brief couple portrait session.</li>
                    <li>The beginning of the reception (e.g., cake cutting and first dance).</li>
                </ul>
                <h3>Who it's for:</h3>
                <ul>
                    <li>Couples having a small, single-location wedding or elopement.</li>
                    <li>Those on a tighter budget who are prioritizing capturing the ceremony above all else.</li>
                    <li>Events where the "getting ready" process and the late-night party are not priorities for coverage.</li>
                </ul>
                <h3>Potential Downsides:</h3>
                <p>With a condensed timeline, there's less room for flexibility if things run late. You might miss out on capturing the full story, including the emotional "getting ready" moments or the high-energy dance floor later in the evening.</p>

                <h2>What is Full-Day Coverage? (Typically 8-12 Hours)</h2>
                <p>Full-day coverage is the standard for most Indian weddings because it allows for a complete, beautifully paced narrative of your entire day. It’s not about shooting for 12 hours straight, but about being there for every key chapter of your story.</p>
                <h3>What it usually covers:</h3>
                <ul>
                    <li><strong>Getting Ready:</strong> Capturing the details, the makeup, the attire, and the emotional moments with family and friends before the ceremony.</li>
                    <li><strong>First Look:</strong> The emotional reveal, either between the couple or with parents.</li>
                    <li><strong>The Full Ceremony:</strong> Documenting every ritual without rushing.</li>
                    <li><strong>Extended Portrait Session:</strong> Ample time for creative couple portraits, especially during the "golden hour."</li>
                    <li><strong>Full Reception:</strong> Covering all the key events, speeches, performances, and plenty of candid shots of guests enjoying the party and dancing.</li>
                </ul>
                <h3>Who it's for:</h3>
                <ul>
                    <li>Virtually all traditional Indian weddings, which have multiple rituals and events spread across the day.</li>
                    <li>Couples who want a complete, stress-free story of their day, from the quiet morning anticipation to the final celebration.</li>
                    <li>Those who value having a rich collection of candid moments of their friends and family.</li>
                </ul>

                <h2>The Shaadifilms Recommendation for a Goa Wedding</h2>
                <p>For a typical Goa wedding, which often involves multiple locations (e.g., home, temple/church, and reception venue) and a schedule packed with rituals, <strong>we almost always recommend full-day coverage</strong>. The pace of a wedding day is fast, and traffic in Goa can add unexpected delays. Full-day coverage provides the necessary buffer to ensure we never have to rush. It allows us to be storytellers, not just event recorders, capturing the unscripted moments in between the major events that truly make your wedding story unique.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Choosing your coverage is about deciding which parts of your story you want to preserve forever. While half-day coverage can work for very simple events, full-day coverage is the best investment for a comprehensive, emotional, and stress-free documentation of a traditional Indian wedding. It ensures that no chapter of your once-in-a-lifetime day is left untold.</p>
                <p><strong>Unsure how much coverage you need? <a href="/book">Let's chat!</a> Contact Shaadifilms, and we can help you build the perfect timeline and coverage plan for your Goa wedding.</strong></p>
            `
            },
            {
                id: '9',
                slug: 'understanding-post-production-edit-photos-to-perfection',
                title: 'Understanding Post-Production: How We Edit Your Photos to Perfection',
                date: '2023-12-01T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'The magic doesn\'t stop when the camera clicks. Discover the meticulous process of post-production and how we transform great photos into timeless works of art.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-9'),
                content: `
                <p>The click of the shutter is only the beginning of creating a beautiful wedding photograph. The real magic, the process that elevates a good image to a breathtaking one, happens during post-production. It’s a meticulous, artistic, and time-intensive phase where we refine each photo to meet the luxury standards of Shaadifilms. Many clients are curious about what happens after the wedding day, so let's pull back the curtain on our editing process.</p>

                <h2>Step 1: Culling – Selecting the Best of the Best</h2>
                <p>For a typical full-day wedding, we might shoot several thousand photographs. The first step is "culling," where we carefully go through every single image to select the strongest, most impactful ones. We look for the best expressions, sharp focus, perfect composition, and genuine emotion. We filter out duplicate shots, blinks, and unflattering angles to create a curated gallery of the very best moments that tell your story perfectly.</p>

                <h2>Step 2: Basic Adjustments and Color Correction</h2>
                <p>Once we have our final selection, every single image goes through a primary editing phase. This involves:</p>
                <ul>
                    <li><strong>Exposure Correction:</strong> Ensuring the image is not too dark or too bright.</li>
                    <li><strong>White Balance:</strong> Adjusting the colors to be accurate and natural. Wedding venues can have mixed lighting (daylight, yellow tungsten, colorful LEDs), and this step ensures skin tones look beautiful and true to life.</li>
                    <li><strong>Contrast and Sharpness:</strong> Adding a bit of "pop" to the images, making them look crisp and clear.</li>
                </ul>
                <p>This initial step ensures that the entire gallery has a consistent and professional look.</p>

                <h2>Step 3: Color Grading – Creating the "Shaadifilms" Style</h2>
                <p>This is where our signature artistic style comes to life. Color grading is different from color correction. While correction is about accuracy, grading is about mood and emotion. We apply our custom color profiles to give your photos a warm, elegant, and timeless feel. This isn't a one-click filter; we adjust the tones, hues, and saturation in the highlights, mid-tones, and shadows of each image to create a cohesive, cinematic aesthetic across your entire wedding album.</p>

                <h2>Step 4: Advanced Retouching (for Key Portraits)</h2>
                <p>For your main couple portraits and key solo shots, we go a step further with advanced retouching. This is a subtle and natural process. We are not trying to make you look like someone else, but rather the best version of yourself on your best day. This may include:</p>
                <ul>
                    <li>Subtle skin smoothing to reduce minor blemishes.</li>
                    <li>Lightly brightening eyes and teeth.</li>
                    <li>Removing distracting elements from the background (like an unsightly fire extinguisher or exit sign).</li>
                </ul>
                <p>The goal of retouching is for the final image to look stunning without looking "edited."</p>

                <h2>Step 5: Final Quality Check and Delivery</h2>
                <p>Before we deliver the gallery, we do one last quality check, viewing the images on different calibrated monitors to ensure they look perfect. The final, high-resolution images are then uploaded to your personal online gallery, ready for you to download, share, and print.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Post-production is a craft that requires a keen artistic eye, technical skill, and hours of dedicated work. It's an integral part of the luxury service we provide, ensuring that every photo we deliver is a polished piece of art that beautifully preserves the memories of your wedding day. When you invest in a high-quality photographer, you're not just investing in their ability to take pictures, but also in their expertise to perfect them.</p>
                <p><strong>Have more questions about our process? <a href="/contact">We'd love to hear from you.</a> Contact Shaadifilms to learn more about how we create our signature cinematic look.</strong></p>
            `
            },
            {
                id: '10',
                slug: 'decoding-wedding-videography-styles',
                title: 'How to Choose a Wedding Videographer in Goa',
                date: '2023-12-05T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Cinematic, documentary, storytelling... what do these video styles mean? We break down the different approaches to help you find the perfect wedding videographer in Goa.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-10'),
                content: `
                <p>Choosing a wedding videographer is about more than just finding someone with a camera; it's about finding a storyteller whose style resonates with you. The way your wedding day is filmed and edited will dramatically change the final product. To help you make an informed choice, let’s decode some of the most popular wedding videography styles.</p>

                <h2>1. The Cinematic Style</h2>
                <p>This is the style we specialize in at Shaadifilms. The goal of a cinematic film is to tell the story of your day with the emotional impact and visual beauty of a movie. </p>
                <ul>
                    <li><strong>What it looks like:</strong> Visually dynamic and artistic. It uses a variety of camera angles, slow motion, drone shots, and smooth camera movements (using gimbals and sliders). The focus is on beautiful composition, lighting, and capturing emotion.</li>
                    <li><strong>How it's edited:</strong> The edit is story-driven, not chronological. We weave together the best visual moments with audio from vows, speeches, or letters to create a powerful narrative. Music selection and professional color grading are crucial to setting the mood.</li>
                    <li><strong>Best for:</strong> Couples who want a powerful, artistic, and emotional highlight film that they'll want to watch and share for years to come.</li>
                </ul>

                <h2>2. The Documentary (or Journalistic) Style</h2>
                <p>This style aims to capture the events of the day as they happen, in a linear fashion, with minimal interference from the videographer. It's the video equivalent of photojournalism.</p>
                <ul>
                    <li><strong>What it looks like:</strong> More raw and unpolished than a cinematic film. The camera work is often more observational.</li>
                    <li><strong>How it's edited:</strong> The edit is typically chronological, following the day from beginning to end. It often results in a much longer film (1-3 hours) and uses more of the natural audio from the day. This is what's often referred to as a "traditional video."</li>
                    <li><strong>Best for:</strong> Couples whose primary goal is to have a complete and comprehensive record of their entire wedding day, including every ritual and every speech in full.</li>
                </ul>

                <h2>3. The Storytelling Style</h2>
                <p>This is a subset of the cinematic style but with an even heavier emphasis on the narrative. The story is the absolute hero of the film.</p>
                <ul>
                    <li><strong>What it looks like:</strong> Similar to cinematic, but it relies heavily on audio to drive the story. This could be audio from couple interviews conducted before the wedding, letters you've written to each other, or extensive clips from speeches.</li>
                    <li><strong>How it's edited:</strong> The visuals are edited to support the audio narrative. The film might jump around in time to better tell the story of your relationship and the wedding day.</li>
                    <li><strong>Best for:</strong> Couples who have a unique story to tell and want a film that is deeply personal and voice-driven.</li>
                </ul>
                
                <h2>4. The Short-Form / Social Media Style</h2>
                <p>This style is all about creating fast-paced, energetic, and highly shareable content. It's less of a full film and more of a collection of quick highlights.</p>
                <ul>
                    <li><strong>What it looks like:</strong> Quick cuts, trendy music, and a focus on high-energy moments. Often delivered as vertical videos (Reels) or very short (1-minute) highlight videos.</li>
                    <li><strong>How it's edited:</strong> The editing is very fast-paced and rhythmic, designed to grab attention quickly on social media feeds.</li>
                    <li><strong>Best for:</strong> A fun add-on to a main package, perfect for sharing with friends and family online almost immediately after the wedding.</li>
                </ul>
                
                <h3>The Shaadifilms Hybrid Approach</h3>
                <p>We believe in giving our clients the best of both worlds. Our standard packages typically include a beautifully crafted <strong>cinematic highlight film</strong> (the emotional, shareable movie) and a full <strong>documentary-style traditional video</strong> (the comprehensive archive for your family). This hybrid approach ensures you get an artistic masterpiece to relive the feeling of your day, as well as a complete record of every important moment.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>There is no "best" style—only the style that is best for you. Look at different videographers' portfolios and see what emotionally connects with you. Do you prefer a sweeping, romantic film or a comprehensive, moment-by-moment record? Understanding these styles will help you communicate your vision and choose a wedding videographer in Goa that can bring it to life.</p>
                <p><strong>Love the cinematic, story-driven approach? <a href="/gallery">Check out our featured films</a> and see how Shaadifilms can tell your unique love story.</strong></p>
            `
            }
        ];
        return posts.map((p)=>({
                ...p,
                image: p.image || undefined
            }));
    }
    const blogCollection = getBlogCollection();
    const snapshot = await blogCollection.orderBy('date', 'desc').get();
    if (snapshot.empty) {
        // If firestore is empty, populate it with the default posts
        const postsToCreate = [
            {
                id: '1',
                slug: 'top-10-luxury-wedding-venues-mumbai-photography',
                title: 'Top 10 Luxury Wedding Venues in Goa for Stunning Photography',
                date: '2024-08-05T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Discover Goa\'s most photogenic luxury wedding venues. From grand sea-facing hotels in Colaba to exclusive properties in Morjim, Goa, we unveil the best backdrops for your wedding photos.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-1'),
                content: `
                <p>Choosing a venue is one of the most significant decisions in wedding planning, setting the stage for your entire celebration. For a city as vibrant and glamorous as Goa, the options are as diverse as they are stunning. As wedding photographers and filmmakers at Shaadifilms, we have a unique perspective on what makes a venue truly photogenic. It's more than just a beautiful space; it’s about the light, the architecture, the ambiance, and the variety of backdrops it offers.</p>
                <p>Here’s our curated list of the top 10 luxury wedding venues in Goa that provide a breathtaking canvas for your wedding story, ensuring every photo and frame is a work of art.</p>
                
                <h2>1. The Taj Mahal Palace, Colaba</h2>
                <p><strong>Why we love it:</strong> An icon of luxury, its heritage architecture and breathtaking views of the Gateway of India are unparalleled. The grand ballrooms, dramatic staircases, and seaside lawns offer a variety of classic and majestic photo opportunities that are simply timeless. Every corner tells a story of elegance and history.</p>
                
                <h2>2. JW Marriott, Juhu</h2>
                <p><strong>Why we love it:</strong> Famous for its prime beachfront location near Morjim, Goa, this hotel is perfect for capturing romantic sunset pheras against the backdrop of the Arabian Sea. The Lotus Cafe, with its expansive lily pond, provides a serene and beautiful setting for post-ceremony couple shots, creating a tranquil oasis amidst the city's hustle.</p>
                
                <h2>3. The St. Regis, Lower Parel</h2>
                <p><strong>Why we love it:</strong> Offering some of the most spectacular panoramic views of the city skyline from its higher floors, The St. Regis is the epitome of urban sophistication. Its opulent interiors, crystal chandeliers, and grand ballroom are perfect for a glamorous, high-society wedding. The modern luxury here is a photographer's dream.</p>
                
                <h2>4. Grand Hyatt, Santacruz</h2>
                <p><strong>Why we love it:</strong> A modern palace with vast event spaces, stunning water features, and contemporary art installations. The expansive, pillarless ballroom is a blank canvas for grand decorations, and the garden areas are lovely for vibrant outdoor rituals like Mehendi or Haldi ceremonies.</p>
                
                <h2>5. Trident, Nariman Point</h2>
                <p><strong>Why we love it:</strong> With its coveted location on Marine Drive, the Trident offers stunning, unobstructed views of the Queen's Necklace. Photos against the backdrop of the Arabian Sea and the glittering city lights at night are simply magical here. It’s a quintessential Goa experience.</p>
                
                <h2>6. Four Seasons Hotel, Worli</h2>
                <p><strong>Why we love it:</strong> Home to Goa's highest rooftop bar, Aer, this venue provides a modern, chic, and incredibly stylish setting. Imagine your pre-wedding shoot or cocktail party with the entire city spread out beneath you. The indoor spaces are equally luxurious and offer sleek, contemporary backdrops.</p>
                
                <h2>7. ITC Grand Central, Parel</h2>
                <p><strong>Why we love it:</strong> Inspired by British Colonial architecture, this hotel offers a unique blend of old-world charm and modern luxury. The beautiful terrace gardens and the grand 'Hall of Poets' provide a distinguished and elegant backdrop for photography, adding a touch of classic romance to your album.</p>

                <h2>8. Sofitel, BKC</h2>
                <p><strong>Why we love it:</strong> Bringing a touch of French elegance to Goa, the Sofitel in the Bandra Kurla Complex is known for its chic interiors and versatile event spaces. The lobby's grand chandelier and the hotel's artistic details make for unique and stylish photo compositions that stand out.</p>

                <h2>9. Sun-n-Sand, Juhu</h2>
                <p><strong>Why we love it:</strong> As Goa's first beachfront hotel, Sun-n-Sand has a classic, nostalgic charm. It offers direct access to Juhu Beach, making it ideal for couples who want the sea as a backdrop without the travel. The poolside area is perfect for vibrant and fun-filled Mehendi or Sangeet functions.</p>

                <h2>10. Renaissance Goa Convention Centre Hotel, Powai</h2>
                <p><strong>Why we love it:</strong> Nestled on the banks of Powai Lake, this venue feels like a serene retreat from the city. The sprawling lawns, lakeside views, and beautiful architecture provide a tranquil and picturesque setting that's a rare find in Goa, offering a perfect blend of nature and luxury.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Your venue choice is the canvas upon which your wedding story is painted. Each of these Goa venues offers a unique blend of luxury, character, and photographic potential. The right location not only enhances your celebration but also elevates your wedding album and film from a collection of memories to a true work of art.</p>
                <p><strong>Ready to find the perfect venue and have it captured beautifully? <a href="/book">Contact Shaadifilms today</a> to discuss your vision and book a consultation with our expert team of wedding photographers in Goa.</strong></p>
            `
            },
            {
                id: '2',
                slug: 'how-to-plan-wedding-day-timeline-for-best-photos',
                title: 'How to Plan Your Wedding Day Timeline for the Best Photos',
                date: '2024-07-28T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'Your wedding day will fly by. A well-planned timeline is key to ensuring we capture every important moment without the stress. Here’s a guide from a top wedding photographer in Goa to scheduling your day for beautiful, relaxed photos.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-2'),
                content: `
                <p>As photographers and filmmakers, we know that the secret to a relaxed and photogenic wedding day is a well-thought-out timeline. Your wedding day will be a whirlwind of emotions, rituals, and celebrations. Rushing from one event to another can create stress, which can show in your photos and film. A good timeline isn't just a schedule; it's a plan for a joyful, stress-free day that allows us the space to capture your story beautifully.</p>
                <p>Here’s our expert guide to structuring your day to get those dreamy, unhurried shots that you'll cherish forever.</p>
                
                <h2>The "Golden Hour" is Everything for Wedding Photography</h2>
                <p>If there's one piece of advice we can't stress enough, it's this. The "golden hour"—the hour just after sunrise and before sunset—provides a soft, warm, and magical light. We always recommend scheduling your main couple portrait session during this time. The light is incredibly flattering, forgiving, and creates a romantic, ethereal glow. Talk to your wedding photographer in Goa about the sunset timing on your wedding date, and let's block that hour out for just the two of you. It's a perfect moment to breathe, connect, and let us capture the pure magic of your love before the reception madness begins.</p>
                
                <h2>Buffer, Buffer, and More Buffer!</h2>
                <p>On a wedding day, everything takes longer than you think. Hair and makeup can run late, relatives might pull you aside for a chat, and in a city like Goa, traffic can be unpredictable. Add 20-30 minute buffers between major events (like getting ready and leaving for the venue, or the ceremony and the reception). This extra time is a lifesaver. It ensures you're not flustered, gives you moments to relax, and provides us photographers with the space to capture those beautiful, candid, unscripted moments that often become the most treasured memories.</p>

                <h2>Detail Shots Set the Scene</h2>
                <p>You've spent months meticulously choosing your outfits, jewelry, invitations, and decor. We want to capture it all! Schedule about 30-45 minutes for your photography team to photograph these details before things get hectic. This means having your lehenga/gown, shoes, rings, and invitation suite ready in one place. It also allows us to get clean shots of the venue decor before guests arrive. These photos add richness and context to your wedding story.</p>

                <h2>Don't Rush Getting Ready</h2>
                <p>This is where your story begins. Allocate at least 2 to 2.5 hours for the bride's getting-ready photos and about 1.5 hours for the groom. This isn't just about makeup and hair; it's about capturing the anticipation, the final touches, and the beautiful moments with your parents, siblings, and bridal party. Rushing this part means missing out on some of the most emotional and intimate pictures of the day.</p>

                <h2>Family Portraits: Make a List, Check It Twice</h2>
                <p>Formal family photos are incredibly important, but they can be chaotic if not planned. Before the wedding, make a list of the exact groupings you want (e.g., Couple with Bride's Parents, Couple with both sets of Parents & Siblings). Allocate 2-3 minutes per group. A well-organized list, coordinated by a family member who knows everyone, can get this done in 20-30 minutes, freeing you up to enjoy your party instead of spending an hour gathering relatives.</p>
                
                <hr>
                <h3>Conclusion</h3>
                <p>A great wedding timeline is the unsung hero of a beautiful wedding album. By planning ahead and building in time for both the big events and the quiet moments, you give yourself the gift of a relaxed day and provide your photography team the opportunity to create truly magical images.</p>
                <p><strong>Feeling overwhelmed? Don't be. As part of our luxury service, we work closely with you to craft the perfect timeline. <a href="/book">Book a consultation with Shaadifilms</a> and let's plan your perfect day, together.</strong></p>
            `
            },
            {
                id: '3',
                slug: 'cinematic-wedding-films-vs-traditional-videography',
                title: 'Cinematic Wedding Film Goa: What\'s the Difference vs. Traditional?',
                date: '2024-07-20T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'You’ve heard the terms, but what do they really mean? We break down the difference between a cinematic film and a traditional video to help you decide what’s right for your big day in Goa.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-3'),
                content: `
                <p>When it comes to capturing your wedding in motion, you'll often encounter two main styles: traditional videography and cinematic wedding films. While both document your day, their approach, equipment, and the final product are vastly different. At Shaadifilms, a leading wedding videographer in Goa, we specialize in the latter. Understanding the distinction is key to choosing the right coverage for your celebration.</p>
                
                <h2>What is Traditional Wedding Videography?</h2>
                <p>Think of this as a comprehensive, linear documentary. A traditional wedding video aims to capture the event as it unfolds, from start to finish. It's typically a long-form video (often 1-3 hours) that covers every ritual, speech, and performance in chronological order. The focus is on recording, not necessarily storytelling. The editing is straightforward, often with basic transitions and the natural audio from the day.</p>
                <ul>
                    <li><strong>Goal:</strong> To document everything.</li>
                    <li><strong>Length:</strong> 1 to 3 hours.</li>
                    <li><strong>Style:</strong> Chronological and observational.</li>
                    <li><strong>Best for:</strong> Archiving every single moment for family records.</li>
                </ul>
                
                <h2>What is a Cinematic Wedding Film?</h2>
                <p>This is our passion and specialty at Shaadifilms. A cinematic wedding film is a shorter, beautifully crafted, story-driven highlight reel that feels more like a movie than a recording. We use artistic camera angles, sophisticated equipment like drones, gimbals, and sliders, and a multi-camera setup to capture dynamic, visually stunning shots. The magic happens in the edit. We non-linearly weave together the most impactful visual moments with emotional audio—vows, speeches, letters, or interviews—to tell the <strong>story</strong> of your day. It’s about capturing the <strong>feeling and emotion</strong>, not just the events.</p>
                <ul>
                    <li><strong>Goal:</strong> To tell a story and evoke emotion.</li>
                    <li><strong>Length:</strong> 5 to 15 minutes for a highlight film.</li>
                    <li><strong>Style:</strong> Artistic, emotional, and story-driven with high production value.</li>
                    <li><strong>Best for:</strong> A powerful, shareable keepsake that you'll watch for years to come.</li>
                </ul>

                <h3>Key Differences at a Glance</h3>
                <ol>
                  <li><strong>Storytelling vs. Recording:</strong> The biggest difference is the narrative. Cinematic films are edited to tell a compelling story, focusing on the emotional arc of your day. Traditional videos provide a chronological record.</li>
                  <li><strong>Equipment and Techniques:</strong> Cinematic filmmaking employs tools and techniques from cinema—like slow motion, aerial drone shots, and stabilized camera movements—to create visually engaging footage.</li>
                  <li><strong>Editing and Post-Production:</strong> A cinematic edit is far more intensive. It involves meticulous color grading (to achieve a specific look and feel), sound design, and carefully chosen licensed music to enhance the emotional impact.</li>
                  <li><strong>Length and Purpose:</strong> A traditional video is an archive. A cinematic film is a piece of art you'll want to watch over and over and proudly share with friends and family.</li>
                </ol>

                <h3>Why Not Both? The Shaadifilms Approach</h3>
                <p>We believe you shouldn't have to choose between art and archive. That's why our popular Gold and Platinum packages include a stunning cinematic highlight film (perfect for sharing on social media) <strong>and</strong> a comprehensive traditional video for your family archives. You get the best of both worlds: a powerful, emotional film that captures the soul of your wedding, and a complete record of your entire celebration for posterity.</p>
                
                <hr>
                <h3>Conclusion</h3>
                <p>Understanding the difference helps you appreciate the artistry and effort that goes into creating a wedding film that truly feels like you. A cinematic film isn't just a video; it's the story of your beginning, told with the beauty and emotion it deserves.</p>
                <p><strong>Want to see how we can turn your wedding day into a cinematic masterpiece? <a href="/contact">Get in touch with Shaadifilms</a> and let's talk about your love story.</strong></p>
            `
            },
            {
                id: '4',
                slug: 'must-have-shots-for-your-mumbai-wedding-album',
                title: '10 Must-Have Shots for Your Goa Wedding Album',
                date: '2024-07-12T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'From the detailed shots of your lehenga to the candid moments of the vidaai, here are 10 photos you absolutely need to tell the complete story of your Goa wedding.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-4'),
                content: `
                <p>Your wedding album is more than just a collection of photos; it's a timeless keepsake, a tangible storybook of one of the most important days of your life. It deserves to be perfect. While every wedding is unique, there are certain quintessential moments that form the narrative backbone of a compelling wedding story. To make sure it tells the full, vibrant story of your day, here is our definitive list of 10 essential shots every Goa wedding album should include to be truly complete.</p>
                
                <h2>1. The Details Shot</h2>
                <p>It all starts here. A beautifully composed shot of your meticulously chosen lehenga or gown hanging in the morning light, the intricate details of your jewelry, your custom invitations, and your wedding shoes. These images set the scene, establish the aesthetic of your day, and highlight the thought you put into every element.</p>
                    
                <h2>2. The Getting Ready Moments</h2>
                <p>These are the quiet, emotional moments before the grand celebration begins. We look for candid shots of the nervous excitement and laughter with your closest friends and family, the final touch of lipstick, your mother helping with your dupatta, or the groom sharing a quiet moment with his father. These are the heartfelt memories that add depth to your story.</p>
                    
                <h2>3. The Bride & Groom Portraits (Solo)</h2>
                <p>A stunning, calm portrait of both the bride and groom, fully ready, before they see each other. This is a moment to capture the anticipation and showcase each of your complete looks in all their glory. It's a powerful portrait that stands on its own and celebrates the individual before they become a pair.</p>
                    
                <h2>4. The First Look</h2>
                <p>The first look is pure, unscripted emotion. Whether it's with your partner before the ceremony or with your parents as they see you for the first time as a bride, this raw, emotional moment is priceless and always a favorite in any wedding album. We capture it discreetly to preserve its authenticity and the genuine reactions.</p>
                    
                <h2>5. The Baraat's Energy</h2>
                <p>The vibrant, chaotic energy of the groom's procession is a quintessential part of an Indian wedding. A wide, dynamic shot capturing the dancing, the music, the colors, and the joyous energy of friends and family is an absolute must-have. It’s a snapshot of pure celebration.</p>

                <h2>6. The Bride's Grand Entrance</h2>
                <p>This is a show-stopping moment. All eyes on the bride. A shot capturing her entrance, whether under a floral phoolon ki chadar or walking down the aisle, is iconic. We love to capture the groom's reaction at this very moment, too—it's often a frame filled with love and awe.</p>

                <h2>7. The Varmala / Jaimala</h2>
                <p>The playful and pivotal moment of the garland exchange. A dynamic shot that freezes the action, the smiles, the laughter, and the shower of petals is essential. We use multiple angles to ensure we capture the full energy of this tradition, a perfect blend of fun and ritual.</p>

                <h2>8. The Sacred Rituals (Pheras or Vows)</h2>
                <p>This is the sacred heart of the ceremony. A respectful, intimate shot that captures the solemnity and connection between the couple as they take their pheras around the holy fire or exchange their vows. It's about capturing the quiet intensity of the promises you're making to each other.</p>

                <h2>9. Candid Guest Moments</h2>
                <p>Your loved ones are a huge part of your story. We're always on the lookout for those candid laughs, happy tears from parents watching the ceremony, and crazy dance-floor antics from friends. These photos show the joy of the people who came to celebrate with you and add life and context to your album.</p>

                <h2>10. The Vidaai / Grand Exit</h2>
                <p>This is the emotional climax of the wedding. The Vidaai, with its poignant goodbyes and bittersweet tears, or a celebratory grand exit as a newly married couple amidst sparklers or flower petals. This powerful, story-ending shot is the perfect closing image for your wedding album.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>A great wedding album is a blend of iconic portraits and unscripted moments. By ensuring these key shots are on your photographer's radar, you're not just getting photos—you're curating a complete and emotional story that you can relive for a lifetime.</p>
                <p><strong>Let us tell your story. <a href="/book">Schedule a consultation with Shaadifilms</a>, and let's create a wedding album that is as timeless and beautiful as your love.</strong></p>
            `
            },
            {
                id: '5',
                slug: 'how-to-budget-for-wedding-photography-videography',
                title: 'How Much Does a Wedding Photographer Cost in Goa?',
                date: '2024-06-10T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'Setting a budget for photo and video can be tricky. We break down wedding photography prices in Goa and offer tips on how to allocate your funds for the best results.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-5'),
                content: `
                <p>Your wedding photos and films are more than just memories; they're an investment. They are the only part of your wedding day that will increase in value over time. But when you're planning a wedding, the costs can quickly add up, and it can be challenging to know how much to allocate for photography and videography. At Shaadifilms, we believe in transparency, so let's demystify wedding photography prices in Goa.</p>
                
                <h2>The 10-15% Rule of Thumb</h2>
                <p>A common guideline is to allocate around <strong>10-15% of your total wedding budget</strong> to photography and videography. For many couples, capturing the day beautifully is a top priority, and they may even choose to allocate a higher percentage. This investment typically covers the team's time, talent, equipment, and the extensive post-production work required to create your final album and film.</p>

                <h2>What Influences Wedding Photography Prices in Goa?</h2>
                <p>Not all photography packages are created equal. Several factors determine the final price:</p>
                <ul>
                    <li><strong>Experience & Brand Reputation:</strong> A seasoned, high-end studio like Shaadifilms commands a higher price due to a proven track record, a distinct artistic style, and a luxury client experience. You're investing in peace of mind and guaranteed quality.</li>
                    <li><strong>Hours of Coverage:</strong> The duration of your event is a major factor. A single-day event will cost less than a multi-day celebration with pre-wedding rituals like Haldi, Mehendi, and Sangeet.</li>
                    <li><strong>Team Size:</strong> The number of photographers and videographers needed to cover your event adequately affects the cost. A larger wedding with many guests and parallel events will require a bigger team.</li>
                    <li><strong>Deliverables:</strong> The final products you choose will impact the price. This includes the number of edited photos, the length of the cinematic film, the inclusion of a traditional video, and the type and size of a printed album.</li>
                    <li><strong>Add-Ons:</strong> Services like pre-wedding shoots, drone coverage, live streaming, or same-day edits are typically add-ons that increase the total investment.</li>
                </ul>

                <h2>Understanding Different Wedding Photography Packages</h2>
                <p>At Shaadifilms, we offer a range of packages (like Silver, Gold, and Platinum) to suit different needs and budgets. It's important to look at what's included in each:</p>
                <ul>
                    <li><strong>Entry-Level Packages</strong> might include one photographer and one videographer for a single day, delivering a set number of edited photos and a short highlight film.</li>
                    <li><strong>Mid-Range Packages</strong> (our most popular) often include a larger team for multiple days, both candid and traditional coverage, a cinematic film, a full-length video, and a high-quality printed album.</li>
                    <li><strong>Luxury/Bespoke Packages</strong> are fully customized for grand, multi-day, or destination weddings, including everything from pre-wedding shoots to extensive deliverables and advanced equipment.</li>
                </ul>

                <h3>Tips for Budgeting Smartly</h3>
                <ol>
                    <li><strong>Prioritize What Matters:</strong> Decide how important photography and videography are to you. If you value having beautiful, lasting memories, consider allocating a larger portion of your budget here.</li>
                    <li><strong>Book in Advance:</strong> Top-tier photographers in Goa get booked up to a year or more in advance. Booking early not only secures your date but can also lock in current pricing before it increases.</li>
                    <li><strong>Be Clear About Your Needs:</strong> Have an open conversation with your photographer about your event's scale and your expectations. This helps them recommend the right package without upselling you on services you don't need.</li>
                    <li><strong>Read the Fine Print:</strong> Understand what's included in your package regarding travel costs (for destination weddings), taxes (like GST), and any potential overtime charges.</li>
                </ol>

                <hr>
                <h3>Conclusion</h3>
                <p>Budgeting for wedding photography is about investing in the legacy of your day. By understanding the factors that influence cost and prioritizing what's important to you, you can make an informed decision that you'll be happy with for decades to come. Your wedding photos and film are the one thing you'll look back on to relive the joy, the laughter, and the love.</p>
                <p><strong>Ready to discuss a package that fits your dream wedding? <a href="/packages">Explore our packages</a> or <a href="/book">contact us for a custom quote</a>. We’re here to help you make the best investment in your memories.</strong></p>
            `
            },
            {
                id: '6',
                slug: 'understanding-your-wedding-photography-contract',
                title: 'Questions to Ask Your Wedding Photographer Before Booking',
                date: '2024-05-15T12:00:00.000Z',
                author: 'Priya Desai',
                excerpt: 'A contract is your safety net. We explain the crucial clauses and questions to ask to ensure you and your Goa wedding photographer are on the same page.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-6'),
                content: `
                <p>Booking your wedding photographer is an exciting step, and it culminates in signing a contract. While it may seem like a formality, the contract is one of the most important documents you'll sign during your wedding planning. It protects both you and your photographer and ensures there are no surprises down the line. At Shaadifilms, transparency is a core value, so we believe in helping our clients understand exactly what they're signing.</p>
                <p>Here are the key clauses you should always look for and questions to ask your wedding photographer before booking.</p>

                <h2>1. Services and Deliverables</h2>
                <p>This is the heart of the contract. It should explicitly state what you are paying for. Look for:</p>
                <ul>
                    <li><strong>Coverage Hours & Dates:</strong> The exact dates and the number of hours of coverage for each event (e.g., "8 hours on December 15th for the wedding, 4 hours on December 14th for the Sangeet").</li>
                    <li><strong>Team Composition:</strong> The number of photographers and videographers who will be present.</li>
                    <li><strong>Final Deliverables:</strong> A precise list of what you will receive. For example: "A minimum of 800 high-resolution edited images," "a 5-7 minute cinematic highlight film," and "a 30 page 12*18 printed album."</li>
                </ul>

                <h2>2. Payment Schedule</h2>
                <p>The contract must clearly outline the total cost and the payment structure. This typically includes:</p>
                <ul>
                    <li><strong>Total Fee:</strong> The full amount for all services.</li>
                    <li><strong>Retainer/Booking Fee:</strong> The non-refundable deposit required to secure your date. This is usually 50% of the total fee.</li>
                    <li><strong>Payment Deadlines:</strong> When the remaining balance is due (e.g., "The remaining 50% is due one week before the first event.").</li>
                    <li><strong>Accepted Payment Methods:</strong> How the photographer accepts payments (bank transfer, credit card, etc.).</li>
                </ul>

                <h2>3. Cancellation and Postponement Policy</h2>
                <p>Life is unpredictable. Your contract should clearly state what happens if you need to cancel or postpone your wedding. Key points include:</p>
                <ul>
                    <li><strong>Cancellation by Client:</strong> It should explain that the initial retainer is non-refundable, as it compensates the photographer for holding your date and turning down other potential work.</li>
                    <li><strong>Postponement:</strong> The policy for rescheduling your date. Often, the retainer can be transferred to a new date, subject to the photographer's availability.</li>
                    <li><strong>Cancellation by Photographer:</strong> A crucial clause that outlines what happens if the photographer is unable to cover your event due to illness or emergency. A professional studio will always have a plan, such as providing a replacement photographer of equal or greater skill.</li>
                </ul>

                <h2>4. Image Rights and Usage (Copyright and Model Release)</h2>
                <p>This section can seem technical, but it's very important:</p>
                <ul>
                    <li><strong>Copyright:</strong> In most countries, the photographer legally owns the copyright to the images they create. This means they can use them for their portfolio, social media, and advertising.</li>
                    <li><strong>Usage Rights (for you):</strong> The contract should grant you a license to use the photos for personal, non-commercial purposes. This means you can print them, share them on social media, and give them to family, but you can't sell them or use them for commercial gain.</li>
                    <li><strong>Model Release:</strong> This is the part where you give the photographer permission to use your images in their portfolio. If you are a very private person and do not want your photos used publicly, this is something you must discuss with your photographer before signing.</li>
                </ul>

                <h2>5. Delivery Timeline</h2>
                <p>To manage expectations, the contract should provide a clear timeline for when you can expect to receive your photos and videos. For example: "A sneak peek of 15-20 images will be delivered within one week. The full gallery of digital images will be delivered within 8-10 weeks. The cinematic film and album design will be completed within 12-16 weeks from the wedding date."</p>
                
                <hr>
                <h3>Conclusion</h3>
                <p>A detailed, professional contract is a sign of a professional and trustworthy photographer. It ensures that everyone is on the same page and protects your investment. Don't be afraid to ask questions about any clause you don't understand. A good photographer will be happy to walk you through it to ensure you feel completely comfortable.</p>
                <p><strong>At Shaadifilms, our contracts are built on transparency and trust. <a href="/book">Book a consultation</a>, and we'd be happy to discuss our process and how we protect your precious memories.</strong></p>
            `
            },
            {
                id: '7',
                slug: 'importance-of-pre-wedding-photoshoot',
                title: 'Is a Pre-Wedding Photoshoot in Goa Worth It?',
                date: '2024-04-20T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'Wondering if you should do a pre-wedding shoot in Goa? We explore the benefits, from getting comfortable in front of the camera to finding the best pre-wedding shoot locations.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-7'),
                content: `
                <p>In the midst of wedding planning chaos, adding another event like a pre-wedding photoshoot might seem like an extra expense and effort. Many couples wonder, "Is it really necessary?" As wedding photographers who have guided countless couples through this experience, our answer is a resounding yes! A pre-wedding shoot is more than just an extra set of photos; it's a valuable and fun part of your wedding journey.</p>
                <p>Let’s break down why a pre-wedding shoot is an investment you won’t regret.</p>
                
                <h2>1. It's the Perfect "Camera Rehearsal"</h2>
                <p>Most of us aren't professional models. Feeling a bit awkward in front of a camera is completely normal! A pre-wedding shoot is the perfect opportunity to break the ice with your photographer and get comfortable with being the center of attention. You'll learn how your photographer directs, what poses feel natural to you, and how to relax and be yourselves. This "rehearsal" makes a huge difference on the wedding day, leading to more natural, genuine, and effortless photos when time is tight.</p>

                <h2>2. Build a Connection with Your Photographer</h2>
                <p>Your photographer will be with you for some of the most intimate moments of your wedding day. The pre-wedding shoot is a chance to build a real connection and rapport with them. We get to see your chemistry as a couple, understand your personalities, and learn what makes you laugh. This relationship translates into photos that truly reflect who you are because we're no longer strangers but friends capturing your story.</p>

                <h2>3. Create Beautiful, Casual Photos</h2>
                <p>Wedding day photos are often formal and ritual-focused. A pre-wedding shoot allows you to capture beautiful, professional photos in a casual, relaxed setting. You can choose a location that's special to you—like the cafe where you had your first date, a scenic spot in Lonavala, or one of the many stunning pre-wedding shoot locations in Goa. You can wear what you love without the weight of heavy wedding attire. These images are perfect for:</p>
                <ul>
                    <li>"Save the Date" cards and wedding invitations.</li>
                    <li>A guest book with your photos.</li>
                    <li>A slideshow to play during your Sangeet or reception.</li>
                    <li>Decorating your new home with personal art.</li>
                </ul>

                <h2>4. Tell Your Love Story Visually</h2>
                <p>Your wedding day is the grand finale, but your love story started long before. A pre-wedding shoot can visually narrate that story. We can create a concept that reflects your journey—be it your shared love for travel, movies, or simply a quiet walk on the beach. It adds another beautiful chapter to your wedding album, showcasing your life as a couple before you say "I do."</p>
                
                <h2>5. It’s a Chance to Slow Down and Connect</h2>
                <p>Wedding planning can be stressful. A pre-wedding shoot is a wonderful excuse to step away from the logistics, spend a few hours focused entirely on each other, and just have fun. It's a date day where you get to laugh, be romantic, and create new memories, all while a professional captures it beautifully. Many of our couples tell us it was one of their favorite parts of the whole wedding experience.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>So, is a pre-wedding shoot worth the cost? Absolutely. It's an investment in better wedding day photos, a stronger connection with your photographer, and a beautiful set of memories that celebrate your relationship. It’s an experience that adds immense value to your wedding journey, leaving you with not just stunning images but also more confidence and comfort for the big day itself.</p>
                <p><strong>Interested in creating a unique pre-wedding story with us? <a href="/contact">Get in touch with Shaadifilms</a>, and let’s brainstorm some creative ideas for your shoot!</strong></p>
            `
            },
            {
                id: '8',
                slug: 'full-day-vs-half-day-coverage-mumbai-wedding',
                title: 'Full-Day vs. Half-Day Coverage: Which is Right for Your Goa Wedding?',
                date: '2024-03-25T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Deciding on the duration of photography coverage can be confusing. We compare full-day and half-day options to help you choose the best fit for your Goa wedding.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-8'),
                content: `
                <p>One of the first questions couples ask when booking wedding photography is, "How many hours of coverage do we need?" The answer depends entirely on the story you want to tell. In a city like Goa, where weddings can range from intimate, single-ceremony events to grand, multi-day extravaganzas, choosing between half-day and full-day coverage is a key decision. Let's break down what each option typically includes and which might be right for you.</p>

                <h2>What is Half-Day Coverage? (Typically 4-6 Hours)</h2>
                <p>Half-day coverage is designed for shorter, more intimate weddings. It focuses on capturing the most essential parts of your day without documenting every single moment from start to finish.</p>
                <h3>What it usually covers:</h3>
                <ul>
                    <li>The main ceremony (e.g., the Pheras or the Church ceremony).</li>
                    <li>Formal family portraits.</li>
                    <li>A brief couple portrait session.</li>
                    <li>The beginning of the reception (e.g., cake cutting and first dance).</li>
                </ul>
                <h3>Who it's for:</h3>
                <ul>
                    <li>Couples having a small, single-location wedding or elopement.</li>
                    <li>Those on a tighter budget who are prioritizing capturing the ceremony above all else.</li>
                    <li>Events where the "getting ready" process and the late-night party are not priorities for coverage.</li>
                </ul>
                <h3>Potential Downsides:</h3>
                <p>With a condensed timeline, there's less room for flexibility if things run late. You might miss out on capturing the full story, including the emotional "getting ready" moments or the high-energy dance floor later in the evening.</p>

                <h2>What is Full-Day Coverage? (Typically 8-12 Hours)</h2>
                <p>Full-day coverage is the standard for most Indian weddings because it allows for a complete, beautifully paced narrative of your entire day. It’s not about shooting for 12 hours straight, but about being there for every key chapter of your story.</p>
                <h3>What it usually covers:</h3>
                <ul>
                    <li><strong>Getting Ready:</strong> Capturing the details, the makeup, the attire, and the emotional moments with family and friends before the ceremony.</li>
                    <li><strong>First Look:</strong> The emotional reveal, either between the couple or with parents.</li>
                    <li><strong>The Full Ceremony:</strong> Documenting every ritual without rushing.</li>
                    <li><strong>Extended Portrait Session:</strong> Ample time for creative couple portraits, especially during the "golden hour."</li>
                    <li><strong>Full Reception:</strong> Covering all the key events, speeches, performances, and plenty of candid shots of guests enjoying the party and dancing.</li>
                </ul>
                <h3>Who it's for:</h3>
                <ul>
                    <li>Virtually all traditional Indian weddings, which have multiple rituals and events spread across the day.</li>
                    <li>Couples who want a complete, stress-free story of their day, from the quiet morning anticipation to the final celebration.</li>
                    <li>Those who value having a rich collection of candid moments of their friends and family.</li>
                </ul>

                <h2>The Shaadifilms Recommendation for a Goa Wedding</h2>
                <p>For a typical Goa wedding, which often involves multiple locations (e.g., home, temple/church, and reception venue) and a schedule packed with rituals, <strong>we almost always recommend full-day coverage</strong>. The pace of a wedding day is fast, and traffic in Goa can add unexpected delays. Full-day coverage provides the necessary buffer to ensure we never have to rush. It allows us to be storytellers, not just event recorders, capturing the unscripted moments in between the major events that truly make your wedding story unique.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Choosing your coverage is about deciding which parts of your story you want to preserve forever. While half-day coverage can work for very simple events, full-day coverage is the best investment for a comprehensive, emotional, and stress-free documentation of a traditional Indian wedding. It ensures that no chapter of your once-in-a-lifetime day is left untold.</p>
                <p><strong>Unsure how much coverage you need? <a href="/book">Let's chat!</a> Contact Shaadifilms, and we can help you build the perfect timeline and coverage plan for your Goa wedding.</strong></p>
            `
            },
            {
                id: '9',
                slug: 'understanding-post-production-edit-photos-to-perfection',
                title: 'Understanding Post-Production: How We Edit Your Photos to Perfection',
                date: '2023-12-01T12:00:00.000Z',
                author: 'Aisha Sharma',
                excerpt: 'The magic doesn\'t stop when the camera clicks. Discover the meticulous process of post-production and how we transform great photos into timeless works of art.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-9'),
                content: `
                <p>The click of the shutter is only the beginning of creating a beautiful wedding photograph. The real magic, the process that elevates a good image to a breathtaking one, happens during post-production. It’s a meticulous, artistic, and time-intensive phase where we refine each photo to meet the luxury standards of Shaadifilms. Many clients are curious about what happens after the wedding day, so let's pull back the curtain on our editing process.</p>

                <h2>Step 1: Culling – Selecting the Best of the Best</h2>
                <p>For a typical full-day wedding, we might shoot several thousand photographs. The first step is "culling," where we carefully go through every single image to select the strongest, most impactful ones. We look for the best expressions, sharp focus, perfect composition, and genuine emotion. We filter out duplicate shots, blinks, and unflattering angles to create a curated gallery of the very best moments that tell your story perfectly.</p>

                <h2>Step 2: Basic Adjustments and Color Correction</h2>
                <p>Once we have our final selection, every single image goes through a primary editing phase. This involves:</p>
                <ul>
                    <li><strong>Exposure Correction:</strong> Ensuring the image is not too dark or too bright.</li>
                    <li><strong>White Balance:</strong> Adjusting the colors to be accurate and natural. Wedding venues can have mixed lighting (daylight, yellow tungsten, colorful LEDs), and this step ensures skin tones look beautiful and true to life.</li>
                    <li><strong>Contrast and Sharpness:</strong> Adding a bit of "pop" to the images, making them look crisp and clear.</li>
                </ul>
                <p>This initial step ensures that the entire gallery has a consistent and professional look.</p>

                <h2>Step 3: Color Grading – Creating the "Shaadifilms" Style</h2>
                <p>This is where our signature artistic style comes to life. Color grading is different from color correction. While correction is about accuracy, grading is about mood and emotion. We apply our custom color profiles to give your photos a warm, elegant, and timeless feel. This isn't a one-click filter; we adjust the tones, hues, and saturation in the highlights, mid-tones, and shadows of each image to create a cohesive, cinematic aesthetic across your entire wedding album.</p>

                <h2>Step 4: Advanced Retouching (for Key Portraits)</h2>
                <p>For your main couple portraits and key solo shots, we go a step further with advanced retouching. This is a subtle and natural process. We are not trying to make you look like someone else, but rather the best version of yourself on your best day. This may include:</p>
                <ul>
                    <li>Subtle skin smoothing to reduce minor blemishes.</li>
                    <li>Lightly brightening eyes and teeth.</li>
                    <li>Removing distracting elements from the background (like an unsightly fire extinguisher or exit sign).</li>
                </ul>
                <p>The goal of retouching is for the final image to look stunning without looking "edited."</p>

                <h2>Step 5: Final Quality Check and Delivery</h2>
                <p>Before we deliver the gallery, we do one last quality check, viewing the images on different calibrated monitors to ensure they look perfect. The final, high-resolution images are then uploaded to your personal online gallery, ready for you to download, share, and print.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>Post-production is a craft that requires a keen artistic eye, technical skill, and hours of dedicated work. It's an integral part of the luxury service we provide, ensuring that every photo we deliver is a polished piece of art that beautifully preserves the memories of your wedding day. When you invest in a high-quality photographer, you're not just investing in their ability to take pictures, but also in their expertise to perfect them.</p>
                <p><strong>Have more questions about our process? <a href="/contact">We'd love to hear from you.</a> Contact Shaadifilms to learn more about how we create our signature cinematic look.</strong></p>
            `
            },
            {
                id: '10',
                slug: 'decoding-wedding-videography-styles',
                title: 'How to Choose a Wedding Videographer in Goa',
                date: '2023-12-05T12:00:00.000Z',
                author: 'Rohan Mehra',
                excerpt: 'Cinematic, documentary, storytelling... what do these video styles mean? We break down the different approaches to help you find the perfect wedding videographer in Goa.',
                image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'blog-10'),
                content: `
                <p>Choosing a wedding videographer is about more than just finding someone with a camera; it's about finding a storyteller whose style resonates with you. The way your wedding day is filmed and edited will dramatically change the final product. To help you make an informed choice, let’s decode some of the most popular wedding videography styles.</p>

                <h2>1. The Cinematic Style</h2>
                <p>This is the style we specialize in at Shaadifilms. The goal of a cinematic film is to tell the story of your day with the emotional impact and visual beauty of a movie. </p>
                <ul>
                    <li><strong>What it looks like:</strong> Visually dynamic and artistic. It uses a variety of camera angles, slow motion, drone shots, and smooth camera movements (using gimbals and sliders). The focus is on beautiful composition, lighting, and capturing emotion.</li>
                    <li><strong>How it's edited:</strong> The edit is story-driven, not chronological. We weave together the best visual moments with audio from vows, speeches, or letters to create a powerful narrative. Music selection and professional color grading are crucial to setting the mood.</li>
                    <li><strong>Best for:</strong> Couples who want a powerful, artistic, and emotional highlight film that they'll want to watch and share for years to come.</li>
                </ul>

                <h2>2. The Documentary (or Journalistic) Style</h2>
                <p>This style aims to capture the events of the day as they happen, in a linear fashion, with minimal interference from the videographer. It's the video equivalent of photojournalism.</p>
                <ul>
                    <li><strong>What it looks like:</strong> More raw and unpolished than a cinematic film. The camera work is often more observational.</li>
                    <li><strong>How it's edited:</strong> The edit is typically chronological, following the day from beginning to end. It often results in a much longer film (1-3 hours) and uses more of the natural audio from the day. This is what's often referred to as a "traditional video."</li>
                    <li><strong>Best for:</strong> Couples whose primary goal is to have a complete and comprehensive record of their entire wedding day, including every ritual and every speech in full.</li>
                </ul>

                <h2>3. The Storytelling Style</h2>
                <p>This is a subset of the cinematic style but with an even heavier emphasis on the narrative. The story is the absolute hero of the film.</p>
                <ul>
                    <li><strong>What it looks like:</strong> Similar to cinematic, but it relies heavily on audio to drive the story. This could be audio from couple interviews conducted before the wedding, letters you've written to each other, or extensive clips from speeches.</li>
                    <li><strong>How it's edited:</strong> The visuals are edited to support the audio narrative. The film might jump around in time to better tell the story of your relationship and the wedding day.</li>
                    <li><strong>Best for:</strong> Couples who have a unique story to tell and want a film that is deeply personal and voice-driven.</li>
                </ul>
                
                <h2>4. The Short-Form / Social Media Style</h2>
                <p>This style is all about creating fast-paced, energetic, and highly shareable content. It's less of a full film and more of a collection of quick highlights.</p>
                <ul>
                    <li><strong>What it looks like:</strong> Quick cuts, trendy music, and a focus on high-energy moments. Often delivered as vertical videos (Reels) or very short (1-minute) highlight videos.</li>
                    <li><strong>How it's edited:</strong> The editing is very fast-paced and rhythmic, designed to grab attention quickly on social media feeds.</li>
                    <li><strong>Best for:</strong> A fun add-on to a main package, perfect for sharing with friends and family online almost immediately after the wedding.</li>
                </ul>
                
                <h3>The Shaadifilms Hybrid Approach</h3>
                <p>We believe in giving our clients the best of both worlds. Our standard packages typically include a beautifully crafted <strong>cinematic highlight film</strong> (the emotional, shareable movie) and a full <strong>documentary-style traditional video</strong> (the comprehensive archive for your family). This hybrid approach ensures you get an artistic masterpiece to relive the feeling of your day, as well as a complete record of every important moment.</p>

                <hr>
                <h3>Conclusion</h3>
                <p>There is no "best" style—only the style that is best for you. Look at different videographers' portfolios and see what emotionally connects with you. Do you prefer a sweeping, romantic film or a comprehensive, moment-by-moment record? Understanding these styles will help you communicate your vision and choose a wedding videographer in Goa that can bring it to life.</p>
                <p><strong>Love the cinematic, story-driven approach? <a href="/gallery">Check out our featured films</a> and see how Shaadifilms can tell your unique love story.</strong></p>
            `
            }
        ];
        for (const post of postsToCreate){
            const { id, ...postData } = post;
            const docRef = blogCollection.doc(id);
            await docRef.set({
                ...postData,
                date: new Date(post.date)
            });
        }
        return postsToCreate.map((p)=>({
                ...p,
                image: p.image || undefined
            }));
    }
    return snapshot.docs.map(docToBlogPost);
}
async function getBlogPostBySlug(slug) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        const posts = await getAllBlogPosts();
        return posts.find((p)=>p.slug === slug) || null;
    }
    const blogCollection = getBlogCollection();
    const snapshot = await blogCollection.where("slug", "==", slug).limit(1).get();
    if (snapshot.empty) {
        return null;
    }
    return docToBlogPost(snapshot.docs[0]);
}
async function createBlogPost(data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) throw new Error("Firebase not configured.");
    const blogCollection = getBlogCollection();
    const slug = data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const newPost = {
        ...data,
        title: data.title,
        author: data.author,
        excerpt: data.excerpt,
        content: data.content,
        slug,
        date: new Date().toISOString(),
        image: data.imageUrl ? {
            description: data.title,
            imageUrl: data.imageUrl,
            imageHint: data.imageHint || ''
        } : undefined
    };
    const docRef = await blogCollection.add(newPost);
    return docRef.id;
}
async function updateBlogPost(id, data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) throw new Error("Firebase not configured.");
    const blogCollection = getBlogCollection();
    const postRef = blogCollection.doc(id);
    const slug = data.title ? data.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : undefined;
    const updateData = {
        ...data
    };
    const existingPostSnap = await postRef.get();
    const existingPost = existingPostSnap.data();
    if (slug) {
        updateData.slug = slug;
    }
    let image = existingPost?.image || {};
    let imageUpdated = false;
    if (data.imageUrl !== undefined) {
        image.imageUrl = data.imageUrl;
        imageUpdated = true;
    }
    if (data.imageHint !== undefined) {
        image.imageHint = data.imageHint;
        imageUpdated = true;
    }
    if (data.title !== undefined) {
        image.description = data.title;
        imageUpdated = true;
    }
    if (imageUpdated) {
        updateData.image = image.imageUrl ? image : undefined;
    }
    await postRef.update(updateData);
}
async function deleteBlogPost(id) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) throw new Error("Firebase not configured.");
    const blogCollection = getBlogCollection();
    const postRef = blogCollection.doc(id);
    await postRef.delete();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllBlogPosts,
    getBlogPostBySlug,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllBlogPosts, "00b0bf44e9e3d6fa7ceff12635df960ac4ad84ea5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBlogPostBySlug, "404f196e3dc68c1d4eb551af3f899ec99014b042f4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createBlogPost, "40a27d9bd25f4ba26293bc9b566cad715e1b4f30ca", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBlogPost, "605b0b12eaa5d0b3f3f231f82643c204b1b91b7243", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteBlogPost, "4047a58d26854f8913581f7b2676598553daa54891", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/blog.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "00b0bf44e9e3d6fa7ceff12635df960ac4ad84ea5a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBlogPosts"]),
    "4047a58d26854f8913581f7b2676598553daa54891": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteBlogPost"]),
    "404f196e3dc68c1d4eb551af3f899ec99014b042f4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPostBySlug"]),
    "40a27d9bd25f4ba26293bc9b566cad715e1b4f30ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBlogPost"]),
    "605b0b12eaa5d0b3f3f231f82643c204b1b91b7243": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBlogPost"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/blog.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/blog.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "00b0bf44e9e3d6fa7ceff12635df960ac4ad84ea5a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00b0bf44e9e3d6fa7ceff12635df960ac4ad84ea5a"]),
    "4047a58d26854f8913581f7b2676598553daa54891": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4047a58d26854f8913581f7b2676598553daa54891"]),
    "404f196e3dc68c1d4eb551af3f899ec99014b042f4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["404f196e3dc68c1d4eb551af3f899ec99014b042f4"]),
    "40a27d9bd25f4ba26293bc9b566cad715e1b4f30ca": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40a27d9bd25f4ba26293bc9b566cad715e1b4f30ca"]),
    "605b0b12eaa5d0b3f3f231f82643c204b1b91b7243": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["605b0b12eaa5d0b3f3f231f82643c204b1b91b7243"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/blog.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/blog/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/blog.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$blog$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/blog/blog-post-client-content.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blog/blog-post-client-content.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blog/blog-post-client-content.tsx <module evaluation>", "default");
}}),
"[project]/src/components/blog/blog-post-client-content.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/blog/blog-post-client-content.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/blog/blog-post-client-content.tsx", "default");
}}),
"[project]/src/components/blog/blog-post-client-content.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$blog$2d$post$2d$client$2d$content$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/blog/blog-post-client-content.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$blog$2d$post$2d$client$2d$content$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/blog/blog-post-client-content.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$blog$2d$post$2d$client$2d$content$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(main)/blog/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>BlogPostPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/blog.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$blog$2d$post$2d$client$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/blog/blog-post-client-content.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPostBySlug"])(slug);
    if (!post) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const allPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$blog$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBlogPosts"])();
    const relatedPosts = allPosts.filter((p)=>p.id !== post.id).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$blog$2f$blog$2d$post$2d$client$2d$content$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        post: post,
        relatedPosts: relatedPosts,
        slug: slug
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/blog/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(main)/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1ac14648._.js.map