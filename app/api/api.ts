import { BE_Attraction } from 'types/types';

export const getAllAttraction = async () => {
	return await fetch('https://react-test-1c1c8-default-rtdb.firebaseio.com/attractions.json')
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

