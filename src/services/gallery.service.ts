'use server';

import { firestore, isFirebaseEnabled } from '@/lib/firebase-admin';

export type GalleryImage = {
  id: string;
  imageUrl: string;
  description: string;
  category: string;
  imageHint?: string;
  createdAt?: string;
};

const GALLERY_COLLECTION = 'galleryImages';

function getGalleryCollection() {
  if (!firestore) throw new Error("Firestore is not initialized.");
  return firestore.collection(GALLERY_COLLECTION);
}

function docToGalleryImage(docSnap: { id: string; data: () => Record<string, unknown> }): GalleryImage {
  const data = docSnap.data();
  const createdAt = data?.createdAt as FirebaseFirestore.Timestamp | { toDate?: () => Date } | undefined;
  return {
    id: docSnap.id,
    imageUrl: (data?.imageUrl as string) ?? '',
    description: (data?.description as string) ?? '',
    category: (data?.category as string) ?? '',
    imageHint: data?.imageHint as string | undefined,
    createdAt: typeof createdAt?.toDate === 'function' ? createdAt.toDate().toISOString() : (data?.createdAt as string | undefined),
  };
}

const STATIC_GALLERY_IMAGES: GalleryImage[] = [
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

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  if (!isFirebaseEnabled || !firestore) {
    return STATIC_GALLERY_IMAGES;
  }
  const galleryRef = getGalleryCollection();
  const snapshot = await galleryRef.get();
  const images = snapshot.docs.map((d) => docToGalleryImage({ id: d.id, data: () => d.data() as Record<string, unknown> }));
  return images.length > 0 ? images.sort((a, b) => a.id.localeCompare(b.id)) : STATIC_GALLERY_IMAGES;
}

export async function createGalleryImage(data: {
  imageUrl: string;
  description: string;
  category: string;
  imageHint?: string;
}): Promise<void> {
  if (!isFirebaseEnabled || !firestore) {
    throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
  }
  const galleryRef = getGalleryCollection();
  await galleryRef.add({
    imageUrl: data.imageUrl,
    description: data.description,
    category: data.category,
    imageHint: data.imageHint ?? null,
    createdAt: new Date(),
  });
}

export async function updateGalleryImage(
  id: string,
  data: { description?: string; category?: string; imageHint?: string }
): Promise<void> {
  if (!isFirebaseEnabled || !firestore) {
    throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
  }
  const galleryRef = getGalleryCollection();
  const docRef = galleryRef.doc(id);
  await docRef.update(data);
}

export async function deleteGalleryImage(id: string): Promise<void> {
  if (!isFirebaseEnabled || !firestore) {
    throw new Error("Gallery write operations require Firebase. Configure Firebase in your environment.");
  }
  const galleryRef = getGalleryCollection();
  const docRef = galleryRef.doc(id);
  await docRef.delete();
}