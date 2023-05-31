import { getAllAttraction } from 'api/api';
import Heading from 'components/atoms/Heading/Heading';
import Loading from 'components/icons/Loading';
import Card from 'components/molecules/Card/Card';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BE_Attraction } from 'types/types';

const AttractionList = () => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const { data } = useSession();

	useEffect(() => {
		getAllAttraction('attractions').then((data) => setAttractions(data));
	}, []);

	const userFilterAttraction = attractions.filter(
		(attraction) => attraction?.ifUserIsLoggedEmail === data?.user?.email || attraction?.email === data?.user?.email
	);

	return (
		<>
			{data ? (
				<div className="flex gap-10 min-w-[800px] flex-wrap justify-center">
					{userFilterAttraction.length === 0 ? (
						<Heading variant="h5">Nie posiadasz dodanych przez siebie atrakcji.</Heading>
					) : (
						userFilterAttraction.map((attraction: BE_Attraction) => <Card key={attraction.id} attraction={attraction} />)
					)}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default AttractionList;

