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
"[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"00107aab90e7767ec49c2c6c889bd0998a06823b87":"getAllHeroSlides","6030047e2f1e77911ba838826b380698ffe4479e40":"updateHeroSlide"},"",""] */ __turbopack_context__.s({
    "getAllHeroSlides": (()=>getAllHeroSlides),
    "updateHeroSlide": (()=>updateHeroSlide)
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
const getHeroSlidesCollection = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Firestore is not initialized.");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"].collection('heroSlides');
};
function docToHeroSlide(doc) {
    const data = doc.data();
    return {
        id: doc.id,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        imageHint: data.imageHint,
        videoUrl: data.videoUrl
    };
}
async function getAllHeroSlides() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].filter((p)=>p.id.startsWith('hero-')).map((p)=>({
                id: p.id,
                title: p.title || 'Untitled',
                description: p.description,
                imageUrl: p.imageUrl,
                imageHint: p.imageHint,
                videoUrl: undefined
            })).sort((a, b)=>a.id.localeCompare(b.id));
    }
    const heroSlidesCollection = getHeroSlidesCollection();
    const snapshot = await heroSlidesCollection.get();
    const slides = snapshot.docs.map(docToHeroSlide).sort((a, b)=>a.id.localeCompare(b.id));
    if (slides.length > 0) {
        const heroPlaceholders = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PlaceHolderImages"].filter((p)=>p.id.startsWith('hero-'));
        slides.forEach((slide, index)=>{
            const placeholder = heroPlaceholders.find((p)=>p.id === slide.id);
            if (placeholder) {
                slide.imageUrl = placeholder.imageUrl;
                slide.imageHint = placeholder.imageHint;
                slide.title = placeholder.title || slide.title;
                slide.description = placeholder.description;
            }
        });
    }
    return slides;
}
async function updateHeroSlide(id, data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"]) throw new Error("Firebase not configured.");
    const heroSlidesCollection = getHeroSlidesCollection();
    const slideRef = heroSlidesCollection.doc(id);
    await slideRef.update(data);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllHeroSlides,
    updateHeroSlide
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllHeroSlides, "00107aab90e7767ec49c2c6c889bd0998a06823b87", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateHeroSlide, "6030047e2f1e77911ba838826b380698ffe4479e40", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "00107aab90e7767ec49c2c6c889bd0998a06823b87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllHeroSlides"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "00107aab90e7767ec49c2c6c889bd0998a06823b87": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00107aab90e7767ec49c2c6c889bd0998a06823b87"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/hero-slides.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$hero$2d$slides$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
"[project]/src/app/(main)/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(main)/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/page.tsx", "default");
}}),
"[project]/src/app/(main)/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(main)/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(main)/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(main)/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__49ca0839._.js.map