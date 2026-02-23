
import * as admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

let initialized = false;

if (serviceAccountKey) {
    try {
        const serviceAccount = JSON.parse(serviceAccountKey);
        if (serviceAccount.project_id) {
            if (!admin.apps.length) {
                admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount),
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.project_id}.appspot.com`,
                });
            }
            initialized = true;
        }
    } catch (e) {
        console.error('Failed to parse Firebase service account key:', e);
    }
} else if (process.env.FIREBASE_PROJECT_ID) {
     const serviceAccount = {
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    };
    if (serviceAccount.project_id) {
        if (!admin.apps.length) {
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? `${serviceAccount.project_id}.appspot.com`,
            });
        }
        initialized = true;
    }
}

export const firestore = initialized ? getFirestore() : null;
export const auth = initialized ? admin.auth() : null;
export const storageBucket = initialized ? getStorage().bucket() : null;
export const isFirebaseEnabled = initialized;
