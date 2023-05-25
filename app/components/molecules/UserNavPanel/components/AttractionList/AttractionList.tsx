import { getAllAttraction } from 'api/api';
import Heading from 'components/atoms/Heading/Heading';
import Loading from 'components/icons/Loading';
import Card from 'components/molecules/Card/Card';
import ErrorPage from 'components/molecules/ErrorPage/ErrorPage';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { BE_Attraction } from 'types/types';

const AttractionList = () => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const { data } = useSession();

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	const userFilterAttraction = attractions.filter((attraction) => attraction?.ifUserIsLoggedEmail === data?.user?.email);

	return (
		<>
			{data ? (
				<div className="min-w-[800px]">
					{!userFilterAttraction ? (
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

