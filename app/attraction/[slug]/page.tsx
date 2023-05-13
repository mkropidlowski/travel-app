'use client';
import AttractionsDetails from 'components/molecules/AttractionDetails/AttractionDetails';
import { getAllAttraction } from 'api/api';
import { useEffect, useState } from 'react';
import { BE_Attraction } from 'types/types';

const AttractionsDetailsPage = ({ params }: { params: { slug: string } }) => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const attractionId = params.slug;

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	const selectedAttr = attractions.find((attraction) => attraction.id === attractionId);

	return (
		<div>
			<AttractionsDetails
				id={selectedAttr?.id}
				title={selectedAttr?.title}
				city={selectedAttr?.city}
				src={selectedAttr?.src}
				description={selectedAttr?.description}
				price={selectedAttr?.price}
				priceCurrency={selectedAttr?.priceCurrency}
				province={selectedAttr?.province}
				category={selectedAttr?.category}
				phone={selectedAttr?.phone}
				email={selectedAttr?.email}
				wwwLink={selectedAttr?.wwwLink}
			/>
		</div>
	);
};

export default AttractionsDetailsPage;

