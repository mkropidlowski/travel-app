export const publicEnvs = {
	BASE_URL_API: process.env.NEXT_PUBLIC_BASE_URL_API as string,
	FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
	FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMIAN as string,
	FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
	FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
	FIREBASE_MESS_SENDER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
	FIREBASE_APP_ID: process.env.NEXT_PUBLIC_APP_ID as string,
	FIREBASE_MEASURMENT_ID: process.env.NEXT_PUBLIC_MEASURMENT_ID as string,
	FIREBASE_DATABASE_URL: process.env.NEXT_PUBLIC_DB_URL as string,
};

export const isDevelopmentServer = process.env.NODE_ENV === 'development';

