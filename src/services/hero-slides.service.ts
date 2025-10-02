'use server';

import { firestore, isFirebaseEnabled } from '@/lib/firebase-admin';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export type HeroSlide = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageHint?: string;
};

const getHeroSlidesCollection = () => {
    if (!firestore) {
        throw new Error("Firestore is not initialized.");
    }
    return firestore.collection('heroSlides')
}

function docToHeroSlide(doc: any): HeroSlide {
    const data = doc.data();
    return {
        id: doc.id,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        imageHint: data.imageHint,
    };
}

export async function getAllHeroSlides(): Promise<HeroSlide[]> {
    if (!isFirebaseEnabled) {
        return PlaceHolderImages.filter(p => p.id.startsWith('hero-')).map(p => ({
            id: p.id,
            title: p.title || 'Untitled',
            description: p.description,
            imageUrl: p.imageUrl,
            imageHint: p.imageHint,
        })).sort((a,b) => a.id.localeCompare(b.id));
    }

    const heroSlidesCollection = getHeroSlidesCollection();
    const snapshot = await getDocs(heroSlidesCollection);
    const slides = snapshot.docs.map(docToHeroSlide).sort((a, b) => a.id.localeCompare(b.id));

    if (slides.length > 0) {
        const heroPlaceholders = PlaceHolderImages.filter(p => p.id.startsWith('hero-'));
        slides.forEach((slide, index) => {
            const placeholder = heroPlaceholders.find(p => p.id === slide.id);
            if(placeholder) {
                slide.imageUrl = placeholder.imageUrl;
                slide.imageHint = placeholder.imageHint;
                slide.title = placeholder.title || slide.title;
                slide.description = placeholder.description;
            }
        });
    }
    
    return slides;
}

export async function updateHeroSlide(id: string, data: Partial<Omit<HeroSlide, 'id'>>): Promise<void> {
    if (!isFirebaseEnabled) throw new Error("Firebase not configured.");
    const heroSlidesCollection = getHeroSlidesCollection();
    const slideRef = doc(heroSlidesCollection, id);
    await updateDoc(slideRef, data as any);
}
