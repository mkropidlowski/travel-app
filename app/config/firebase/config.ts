import { publicEnvs } from 'config/envs';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: publicEnvs.FIREBASE_API_KEY,
	authDomain: publicEnvs.FIREBASE_AUTH_DOMAIN,
	projectId: publicEnvs.FIREBASE_PROJECT_ID,
	databaseURL: publicEnvs.FIREBASE_DATABASE_URL,
	storageBucket: publicEnvs.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: publicEnvs.FIREBASE_MESS_SENDER_ID,
	appId: publicEnvs.FIREBASE_APP_ID,
	measurementId: publicEnvs.FIREBASE_MEASURMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { app, db };

