import { publicEnvs } from 'config/envs';
import { BE_Attraction } from 'types/types';

export const getAllAttraction = async (collectionsName: string) => {
	return await fetch(`${publicEnvs.FIREBASE_DATABASE_URL}/${collectionsName}.json`)
		.then((response) => response.json())
		.then((data) => {
			const attractions = [] as BE_Attraction[];
			for (const key in data) {
				attractions.push({
					id: key,
					...data[key],
				});
			}

			return attractions;
		});
};

