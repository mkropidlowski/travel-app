'use client';
import { getAllAttraction } from 'api/api';
import clsx from 'clsx';
import Card from 'components/molecules/Card/Card';
import Footer from 'components/organism/Footer/Footer';
import Layout from 'components/organism/Layout/Layout';
import { useState, useEffect } from 'react';
import { BE_Attraction } from 'types/types';

const CityAttractionDetails = ({ params }: { params: { slug: string } }) => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const cityId = decodeURIComponent(params.slug);

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	const cities = attractions.filter((singleCity) => singleCity.city === cityId);

	return (
		<>
			<Layout>
				<section className={clsx('mt-[100px] flex justify-center gap-7 max-w-[1000px] h-fit m-auto')}>
					{cities.map((city, i) => (
						<div key={i} className={clsx('')}>
							<Card attraction={city} />
						</div>
					))}
				</section>
			</Layout>
			<Footer className={clsx('absolute')} />
		</>
	);
};

export default CityAttractionDetails;

