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
"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"008fb80e75303f69e4b9732272dc369b617f1683ac":"getAllGalleryImages","40ad3aa2dc28472942a4d4f7bd4dc965a6bc14a5e5":"createGalleryImage","40e7116559cb1a6920b10d4b208f31e2cdab3ca9bd":"deleteGalleryImage","60d4e4c6787f04aeb1e9901457e1ed6a76a672d611":"updateGalleryImage"},"",""] */ __turbopack_context__.s({
    "createGalleryImage": (()=>createGalleryImage),
    "deleteGalleryImage": (()=>deleteGalleryImage),
    "getAllGalleryImages": (()=>getAllGalleryImages),
    "updateGalleryImage": (()=>updateGalleryImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase-admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
const GALLERY_COLLECTION = 'galleryImages';
function getGalleryCollection() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) throw new Error("Firestore is not initialized.");
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"].collection(GALLERY_COLLECTION);
}
function docToGalleryImage(docSnap) {
    const data = docSnap.data();
    const createdAt = data?.createdAt;
    return {
        id: docSnap.id,
        imageUrl: data?.imageUrl ?? '',
        description: data?.description ?? '',
        category: data?.category ?? '',
        imageHint: data?.imageHint,
        createdAt: typeof createdAt?.toDate === 'function' ? createdAt.toDate().toISOString() : data?.createdAt
    };
}
const STATIC_GALLERY_IMAGES = [
    {
        id: "gallery-1",
        description: "Soft, candid portrait of the bride preparing for the ceremony.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1UBJubBrHNYz4I-lSjv5qJ_OXCvhUviAw",
        imageHint: "bridal preparation",
        category: "portraits"
    },
    {
        id: "gallery-2",
        description: "Romantic pre-wedding moment captured at golden hour.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1h9MSUXy_RNmg88W2TcMuKGFO3cHlPST0",
        imageHint: "couple golden hour",
        category: "pre-wedding"
    },
    {
        id: "gallery-3",
        description: "Cinematic wide shot of the venue filled with celebration.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1jIfI_TIMA6BGhv9augbG9ig7IhFxpB87",
        imageHint: "venue wide shot",
        category: "weddings"
    },
    {
        id: "gallery-4",
        description: "A quiet ritual moment — hands and ceremonial detail in focus.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1Mldny0Xx6YgsMd9nRloP86JdeFmzdNjV",
        imageHint: "ritual detail",
        category: "rituals"
    },
    {
        id: "gallery-5",
        description: "Elegant portrait with natural light and soft expression.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1Xe_6nGvZrPswzWAJ8i2wor38IHpDk317",
        imageHint: "studio style portrait",
        category: "portraits"
    },
    {
        id: "gallery-6",
        description: "Joyful family moment — generations sharing a warm embrace.",
        imageUrl: "https://drive.google.com/uc?export=view&id=10XrtXNAbM30G1ZjW01-nAfsiJ8UExwA2",
        imageHint: "family embrace",
        category: "family-events"
    },
    {
        id: "gallery-7",
        description: "Couple laughing together during a candid pre-wedding shoot.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1XVPXH7QbO_oDALRDmZYNgTrITKh72DDV",
        imageHint: "pre-wedding candid",
        category: "pre-wedding"
    },
    {
        id: "gallery-8",
        description: "Close-up portrait focusing on expression and fine detail.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1_f2AhWS9xQM39BQv1if8duTgMLTc7BWI",
        imageHint: "close-up portrait",
        category: "portraits"
    },
    {
        id: "gallery-10",
        description: "Candid reception shot — spontaneous joy on the dance floor.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1KrpJz5RS3a2KqHE5BS85khnky24QFbOy",
        imageHint: "dance floor candid",
        category: "weddings"
    },
    {
        id: "gallery-11",
        description: "Intimate pre-wedding portrait with soft backlight.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1ud_mSArdpucP2zBjUJ2bvW0J2d5fF6Pl",
        imageHint: "backlit couple",
        category: "pre-wedding"
    },
    {
        id: "gallery-12",
        description: "Portrait showcasing elegant styling and composed framing.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1wW6ZevgA_09gW0pkpilnEneHv4EtKFSE",
        imageHint: "styled portrait",
        category: "portraits"
    },
    {
        id: "gallery-13",
        description: "Ritual detail — symbolic objects and hands in motion.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1cyq52TatJux086YNg_F_v71HL98FsKhv",
        imageHint: "symbolic ritual",
        category: "rituals"
    },
    {
        id: "gallery-14",
        description: "Family portrait full of warmth and candid interaction.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1NWaymxjiQZTkfHjt-bBV8XoSJTdbxXP3",
        imageHint: "family candid portrait",
        category: "family-events"
    },
    {
        id: "gallery-15",
        description: "Romantic pre-wedding frame — an intimate stolen moment.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1GTINDnN4BuIP8Dn5_BiEnYL_m61LT1sO",
        imageHint: "intimate couple moment",
        category: "pre-wedding"
    },
    {
        id: "gallery-16",
        description: "Wide wedding composition capturing architecture and atmosphere.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1QS2Mbg6mBeAdpFWFh8gIBUEkXMcFaEXa",
        imageHint: "architectural wedding wide",
        category: "weddings"
    },
    {
        id: "gallery-17",
        description: "Portrait with cinematic lighting and thoughtful expression.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1hplCs1hLeHgGCYpGj4Zx1nuddYTlG3ZM",
        imageHint: "cinematic portrait",
        category: "portraits"
    },
    {
        id: "gallery-18",
        description: "Traditional ritual captured in an emotional, authentic moment.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1IQwTuj2N1DS-4PBwTmvXv8pedJqlkNwd",
        imageHint: "emotional ritual",
        category: "rituals"
    },
    {
        id: "gallery-19",
        description: "Happy family gathering — candid laughter and connection.",
        imageUrl: "https://drive.google.com/uc?export=view&id=19loQyComJMrKaWhJ4_xZjnJ-50-Fa9Ak",
        imageHint: "family gathering",
        category: "family-events"
    },
    {
        id: "gallery-20",
        description: "Couple portrait framed by natural elements and soft light.",
        imageUrl: "https://drive.google.com/uc?export=view&id=15iqaqFPzWMlT0OXuyhE4cXky8sGQ-B-w",
        imageHint: "nature framed couple",
        category: "pre-wedding"
    },
    {
        id: "gallery-21",
        description: "Details of the ceremony — textures and decorative elements.",
        imageUrl: "https://drive.google.com/uc?export=view&id=15bp-XhczT9Tqc-_BJD6gm4maDRS0uXdl",
        imageHint: "ceremony details",
        category: "rituals"
    },
    {
        id: "gallery-22",
        description: "Natural, posed portrait highlighting personality and style.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1A-DG9IIRjNk_uVCCbkIRHVOqNMXzYpqz",
        imageHint: "posed portrait",
        category: "portraits"
    },
    {
        id: "gallery-23",
        description: "Emotional moment between family members during the event.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1bR0W6bMOolGMtgP2PDmor1hG5AfWMf1S",
        imageHint: "emotional family moment",
        category: "family-events"
    },
    {
        id: "gallery-24",
        description: "Couple stealing a quiet laugh — relaxed and genuine.",
        imageUrl: "https://drive.google.com/uc?export=view&id=13VNiKQ9Bak86GTwS7e3K3khY15bukDBX",
        imageHint: "candid couple laugh",
        category: "pre-wedding"
    },
    {
        id: "gallery-25",
        description: "Wedding reception highlight — smiles and celebratory energy.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1JL7fc2q1SJSRBEThoKzOd2MOXt-vvB2f",
        imageHint: "reception highlight",
        category: "weddings"
    },
    {
        id: "gallery-26",
        description: "Artful portrait with emphasis on composition and tone.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1IHdgVJxnQzFCyUcTE3dj4pd_sic31a1V",
        imageHint: "artful portrait",
        category: "portraits"
    },
    {
        id: "gallery-27",
        description: "A quiet ritual captured with intimacy and cultural detail.",
        imageUrl: "https://drive.google.com/uc?export=view&id=10BvlA7zF3nT5wU-Eu_0TAtdDu4ZYB7hN",
        imageHint: "intimate ritual",
        category: "rituals"
    },
    {
        id: "gallery-28",
        description: "Family candid — candid smiles and unscripted joy.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1u3wCFLHMPhE7BzX_cobNrt5mvKkRTwDK",
        imageHint: "family candid joy",
        category: "family-events"
    },
    {
        id: "gallery-29",
        description: "Moody portrait with dramatic lighting and poised expression.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1SiHNFSSlgZ_lSSA60C9sWPMT4Y9T2MHD",
        imageHint: "dramatic portrait",
        category: "portraits"
    },
    {
        id: "gallery-30",
        description: "Candid moment of laughter during the pre-wedding session.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1Bq2RQgEO7ciJnWwl2Y8zzgpzvBOjSHtB",
        imageHint: "pre-wedding laughter",
        category: "pre-wedding"
    },
    {
        id: "gallery-31",
        description: "Another candid frame from the same shoot, capturing genuine joy.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1Bq2RQgEO7ciJnWwl2Y8zzgpzvBOjSHtB",
        imageHint: "pre-wedding candid",
        category: "pre-wedding"
    },
    {
        id: "gallery-32",
        description: "Traditional ritual shot — close framing on ceremonial action.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1NpA558g1k04we22Ff5doSdLqvySfI4wh",
        imageHint: "ceremonial close-up",
        category: "rituals"
    },
    {
        id: "gallery-33",
        description: "Portrait with soft, natural tones and an intimate feel.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1ZwhfO1oO31k_3WDVzgyZyPjnLSRAiG6o",
        imageHint: "soft portrait",
        category: "portraits"
    },
    {
        id: "gallery-34",
        description: "A joyful family snapshot — candid smiles and warm interaction.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1mTO67_IDU9TKql8FsBZr76xyoDx-2lYe",
        imageHint: "family snapshot",
        category: "family-events"
    },
    {
        id: "gallery-35",
        description: "Ritual moment captured with close attention to cultural detail.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1-M87IcIT_0BSajmotzgtA7g7obA3LnT-",
        imageHint: "cultural ritual",
        category: "rituals"
    },
    {
        id: "gallery-36",
        description: "Pre-wedding frame with a relaxed, natural pose and location charm.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1549xXU24-XfnXKKvenqAGd_FY8IVNfPz",
        imageHint: "location couple portrait",
        category: "pre-wedding"
    },
    {
        id: "gallery-37",
        description: "Candid capture of guests enjoying a special moment together.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1yPNl1Mw0ckVb3t9ZQMqXJbgZ4YYNWxdq",
        imageHint: "guest candid",
        category: "family-events"
    },
    {
        id: "gallery-38",
        description: "Portrait highlighting expression and refined composition.",
        imageUrl: "https://drive.google.com/uc?export=view&id=1TjOivH7TSu4Y6cHOI2PoONcFUPS-Gh11",
        imageHint: "refined portrait",
        category: "portraits"
    }
];
async function getAllGalleryImages() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        return STATIC_GALLERY_IMAGES;
    }
    const galleryRef = getGalleryCollection();
    const snapshot = await galleryRef.get();
    const images = snapshot.docs.map((d)=>docToGalleryImage({
            id: d.id,
            data: ()=>d.data()
        }));
    return images.length > 0 ? images.sort((a, b)=>a.id.localeCompare(b.id)) : STATIC_GALLERY_IMAGES;
}
async function createGalleryImage(data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
    }
    const galleryRef = getGalleryCollection();
    await galleryRef.add({
        imageUrl: data.imageUrl,
        description: data.description,
        category: data.category,
        imageHint: data.imageHint ?? null,
        createdAt: new Date()
    });
}
async function updateGalleryImage(id, data) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
    }
    const galleryRef = getGalleryCollection();
    const docRef = galleryRef.doc(id);
    await docRef.update(data);
}
async function deleteGalleryImage(id) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseEnabled"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firestore"]) {
        throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
    }
    const galleryRef = getGalleryCollection();
    const docRef = galleryRef.doc(id);
    await docRef.delete();
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllGalleryImages,
    createGalleryImage,
    updateGalleryImage,
    deleteGalleryImage
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllGalleryImages, "008fb80e75303f69e4b9732272dc369b617f1683ac", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createGalleryImage, "40ad3aa2dc28472942a4d4f7bd4dc965a6bc14a5e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateGalleryImage, "60d4e4c6787f04aeb1e9901457e1ed6a76a672d611", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteGalleryImage, "40e7116559cb1a6920b10d4b208f31e2cdab3ca9bd", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "008fb80e75303f69e4b9732272dc369b617f1683ac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllGalleryImages"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "008fb80e75303f69e4b9732272dc369b617f1683ac": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["008fb80e75303f69e4b9732272dc369b617f1683ac"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(main)/goa-weddings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/services/gallery.service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$goa$2d$weddings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$services$2f$gallery$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
"[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx <module evaluation>", "default");
}}),
"[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx", "default");
}}),
"[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$goa$2d$weddings$2f$GoaWeddingsPage$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$goa$2d$weddings$2f$GoaWeddingsPage$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$goa$2d$weddings$2f$GoaWeddingsPage$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(main)/goa-weddings/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$goa$2d$weddings$2f$GoaWeddingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/goa-weddings/GoaWeddingsPage.tsx [app-rsc] (ecmascript)");
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$goa$2d$weddings$2f$GoaWeddingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/(main)/goa-weddings/page.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/app/(main)/goa-weddings/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/goa-weddings/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6f08e63d._.js.map