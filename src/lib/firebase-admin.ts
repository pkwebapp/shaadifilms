
import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let initialized = false;

if (serviceAccountKey) {
    try {
        const parsedServiceAccount = JSON.parse(serviceAccountKey) as Record<string, string | undefined>;
        const serviceAccount: admin.ServiceAccount = {
          projectId: parsedServiceAccount.project_id ?? parsedServiceAccount.projectId,
          clientEmail: parsedServiceAccount.client_email ?? parsedServiceAccount.clientEmail,
          privateKey: parsedServiceAccount.private_key ?? parsedServiceAccount.privateKey,
        };
        if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
            if (!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.projectId}.appspot.com`,
                });
            }
            initialized = true;
        }
    } catch (e) {
        console.error('Failed to parse Firebase service account key:', e);
    }
} else if (process.env.FIREBASE_PROJECT_ID) {
     const serviceAccount: admin.ServiceAccount = {
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    };
    if (serviceAccount.projectId && serviceAccount.clientEmail && serviceAccount.privateKey) {
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.projectId}.appspot.com`,
            });
        }
        initialized = true;
    }
}

export const firestore = initialized ? getFirestore() : null;
export const auth = initialized ? admin.auth() : null;
export const storageBucket = initialized ? getStorage().bucket() : null;
export const isFirebaseEnabled = initialized;
