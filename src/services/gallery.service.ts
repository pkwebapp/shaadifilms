
'use server';

import { firestore, isFirebaseEnabled } from '@/lib/firebase-admin';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc, Timestamp, orderBy, query } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type GalleryImage = {
    id: string;
    imageUrl: string;
    description: string;
    category: string;
    imageHint?: string;
    createdAt?: string;
};

const getGalleryCollection = () => {
    if (!firestore) {
        throw new Error("Firestore is not initialized.");
    }
    return collection(firestore, 'galleryImages');
}


function docToGalleryImage(doc: any): GalleryImage {
    const data = doc.data();
    return {
        id: doc.id,
        imageUrl: data.imageUrl,
        description: data.description,
        category: data.category,
        imageHint: data.imageHint,
        createdAt: (data.createdAt as Timestamp)?.toDate().toISOString(),
    };
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    if (!isFirebaseEnabled) return [
        { id: "gallery-1", description: "The first dance", imageUrl: "https://drive.google.com/uc?export=view&id=1jzCGUT_7O9ToBSXwE1edByN5hDg6Dv__", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-2", description: "Joyful moments with family", imageUrl: "https://drive.google.com/uc?export=view&id=1IiP6nl3skF1QerF7DO2V4joVD6k5lVUE", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-3", description: "The grand exit", imageUrl: "https://drive.google.com/uc?export=view&id=1SM1xit0XOLYi30DI0aVnHpKBWG3p81Xs", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-4", description: "Close-up of the wedding cake", imageUrl: "https://drive.google.com/uc?export=view&id=1-cF3lUDvgJnt_k9u4kbrD6X5HwGKZ0OY", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-5", description: "The bride's stunning portrait", imageUrl: "https://drive.google.com/uc?export=view&id=12kHTAAt7aXrZLIAlCTAYtrRg_lXVU04_", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-6", description: "The groom looking dapper", imageUrl: "https://drive.google.com/uc?export=view&id=1LQD2UZGbkzin1UlQaZicFDAzkNb2ZFOM", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-7", description: "The first dance", imageUrl: "https://drive.google.com/uc?export=view&id=1Ho8absBiyMSq1pE5iBT31lU-DW4Q3kc9", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-8", description: "Joyful moments with family", imageUrl: "https://drive.google.com/uc?export=view&id=1c0LqiarLzS5VKYMXJWiAYJi2y2xhf73c", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-9", description: "The grand exit", imageUrl: "https://drive.google.com/uc?export=view&id=1tXbHZq8gLHjGuOd-4Fm2kud9swVx0udZ", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-10", description: "Close-up of the wedding cake", imageUrl: "https://drive.google.com/uc?export=view&id=1Q356cJuCCrcVw7PvCliC_6fBFO1UBMAO", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-11", description: "The bride's stunning portrait", imageUrl: "https://drive.google.com/uc?export=view&id=1ftmY_K_RqM72ge4PH5GtEEjHUguWvz-r", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-12", description: "The groom looking dapper", imageUrl: "https://drive.google.com/uc?export=view&id=1BEvuK5CiLx3eiJzdYCWiHyu5PiqoerIn", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-13", description: "The first dance", imageUrl: "https://drive.google.com/uc?export=view&id=1T5l8W4t11ZT-39rUv0MzpYGztcywIjME", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-14", description: "Joyful moments with family", imageUrl: "https://drive.google.com/uc?export=view&id=1uewesfcl7k9ihQ6fMR5Q8KSJlyB0938_", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-15", description: "The grand exit", imageUrl: "https://drive.google.com/uc?export=view&id=1TwNMUCYNx6EeRx6vB9ayBpg8q924cz2k", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-16", description: "Close-up of the wedding cake", imageUrl: "https://drive.google.com/uc?export=view&id=1fRHo2ZeAFdYcYNlfjViPuXZVrAJTK75X", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-17", description: "The bride's stunning portrait", imageUrl: "https://drive.google.com/uc?export=view&id=1twRLns3cUA47DTHu1JgjxSmgjV-wVSrs", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-18", description: "The groom looking dapper", imageUrl: "https://drive.google.com/uc?export=view&id=13n270tVQymxW1cIC5yEkW6v197zsTLsS", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-19", description: "The first dance", imageUrl: "https://drive.google.com/uc?export=view&id=1kWoxRT-A20KM3R7SwDEGDTuec5EmHC2t", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-20", description: "Joyful moments with family", imageUrl: "https://drive.google.com/uc?export=view&id=1E_lgfX9cItRIksC6YCec7G9NLHoaOsdP", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-21", description: "The grand exit", imageUrl: "https://drive.google.com/uc?export=view&id=1TKXoekgh6amZk6qHiH5v8QAcfXWsDvEY", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-22", description: "Close-up of the wedding cake", imageUrl: "https://drive.google.com/uc?export=view&id=1Ul92fcNjxS40bGmn9UEG9NbV8jTfRK1x", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-23", description: "The bride's stunning portrait", imageUrl: "https://drive.google.com/uc?export=view&id=1OcS4ZWIv_wqdIco8aFM-mxnizKZPSw0L", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-24", description: "The groom looking dapper", imageUrl: "https://picsum.photos/seed/gallery-groom/400/400", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-25", description: "The first dance", imageUrl: "https://picsum.photos/seed/gallery-dance/400/400", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-26", description: "Joyful moments with family", imageUrl: "https://picsum.photos/seed/gallery-family/400/400", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-27", description: "The grand exit", imageUrl: "https://picsum.photos/seed/gallery-exit/400/400", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-28", description: "Close-up of the wedding cake", imageUrl: "https://picsum.photos/seed/gallery-cake/400/400", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-29", description: "The bride's stunning portrait", imageUrl: "https://picsum.photos/seed/gallery-bride/400/400", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-30", description: "The groom looking dapper", imageUrl: "https://picsum.photos/seed/gallery-groom/400/400", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-31", description: "The first dance", imageUrl: "https://picsum.photos/seed/gallery-dance/400/400", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-32", description: "Joyful moments with family", imageUrl: "https://picsum.photos/seed/gallery-family/400/400", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-33", description: "The grand exit", imageUrl: "https://picsum.photos/seed/gallery-exit/400/400", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-34", description: "Close-up of the wedding cake", imageUrl: "https://picsum.photos/seed/gallery-cake/400/400", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-35", description: "The bride's stunning portrait", imageUrl: "https://picsum.photos/seed/gallery-bride/400/400", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-36", description: "The groom looking dapper", imageUrl: "https://picsum.photos/seed/gallery-groom/400/400", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-37", description: "The first dance", imageUrl: "https://picsum.photos/seed/gallery-dance/400/400", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-38", description: "Joyful moments with family", imageUrl: "https://picsum.photos/seed/gallery-family/400/400", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-39", description: "The grand exit", imageUrl: "https://picsum.photos/seed/gallery-exit/400/400", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-40", description: "Close-up of the wedding cake", imageUrl: "https://picsum.photos/seed/gallery-cake/400/400", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-41", description: "The bride's stunning portrait", imageUrl: "https://picsum.photos/seed/gallery-bride/400/400", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-42", description: "The groom looking dapper", imageUrl: "https://picsum.photos/seed/gallery-groom/400/400", imageHint: "groom portrait", category: "portraits" },
        { id: "gallery-43", description: "The first dance", imageUrl: "https://picsum.photos/seed/gallery-dance/400/400", imageHint: "wedding dance", category: "weddings" },
        { id: "gallery-44", description: "Joyful moments with family", imageUrl: "https://picsum.photos/seed/gallery-family/400/400", imageHint: "wedding family", category: "family-events" },
        { id: "gallery-45", description: "The grand exit", imageUrl: "https://picsum.photos/seed/gallery-exit/400/400", imageHint: "wedding exit", category: "weddings" },
        { id: "gallery-46", description: "Close-up of the wedding cake", imageUrl: "https://picsum.photos/seed/gallery-cake/400/400", imageHint: "wedding cake", category: "weddings" },
        { id: "gallery-47", description: "The bride's stunning portrait", imageUrl: "https://picsum.photos/seed/gallery-bride/400/400", imageHint: "bride portrait", category: "portraits" },
        { id: "gallery-48", description: "The groom looking dapper", imageUrl: "https://picsum.photos/seed/gallery-groom/400/400", imageHint: "groom portrait", category: "portraits" },
    ];
    if (!isFirebaseEnabled) {
        return PlaceHolderImages.filter(p => p.id.startsWith('gallery-')).map(p => ({
            id: p.id,
            description: p.description,
            imageUrl: p.imageUrl,
            imageHint: p.imageHint,
            category: p.category || 'weddings'
        }));
    }
    const galleryCollection = getGalleryCollection();
    const q = query(galleryCollection, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(docToGalleryImage);
}

export async function createGalleryImage(data: Omit<GalleryImage, 'id' | 'createdAt'>): Promise<string> {
    if (!isFirebaseEnabled) throw new Error("Firebase not configured.");
    const galleryCollection = getGalleryCollection();
    const newImage = {
        ...data,
        createdAt: new Date(),
    };
    const docRef = await addDoc(galleryCollection, newImage);
    return docRef.id;
}

export async function updateGalleryImage(id: string, data: Partial<Omit<GalleryImage, 'id' | 'createdAt' | 'imageUrl'>>): Promise<void> {
    if (!isFirebaseEnabled) throw new Error("Firebase not configured.");
    const galleryCollection = getGalleryCollection();
    const imageRef = doc(galleryCollection, id);
    await updateDoc(imageRef, data);
}

export async function deleteGalleryImage(id: string): Promise<void> {
    if (!isFirebaseEnabled) throw new Error("Firebase not configured.");
    const galleryCollection = getGalleryCollection();
    const imageRef = doc(galleryCollection, id);
    await deleteDoc(imageRef);
}
