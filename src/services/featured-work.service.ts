
'use server';

import { firestore, isFirebaseEnabled } from '@/lib/firebase-admin';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type FeaturedWork = {
    id: string;
    description: string;
    imageUrl: string;
    imageHint?: string;
};

const getFeaturedWorksCollection = () => {
    if (!firestore) {
        throw new Error("Firestore is not initialized.");
    }
    return collection(firestore, 'featuredWorks');
}

function docToFeaturedWork(doc: any): FeaturedWork {
    const data = doc.data();
    return {
        id: doc.id,
        description: data.description,
        imageUrl: data.imageUrl,
        imageHint: data.imageHint,
    };
}

export async function getAllFeaturedWorks(): Promise<FeaturedWork[]> {
    if (!isFirebaseEnabled) {
        return PlaceHolderImages.filter(p => p.id.startsWith('featured-')).map(p => ({
            id: p.id,
            description: p.description,
            imageUrl: p.imageUrl,
            imageHint: p.imageHint,
        }));
    }
    const featuredWorksCollection = getFeaturedWorksCollection();
    const snapshot = await getDocs(featuredWorksCollection);
    return snapshot.docs.map(docToFeaturedWork).sort((a, b) => a.id.localeCompare(b.id));
}

export async function updateFeaturedWork(id: string, data: Partial<Omit<FeaturedWork, 'id'>>): Promise<void> {
    if (!isFirebaseEnabled) throw new Error("Firebase not configured.");
    const featuredWorksCollection = getFeaturedWorksCollection();
    const workRef = doc(featuredWorksCollection, id);
    await updateDoc(workRef, data as any);
}
