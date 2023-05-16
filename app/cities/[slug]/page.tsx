'use client';
import { getAllAttraction } from 'api/api';
import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import SectionHeading from 'components/atoms/SectionHeading/SectionHeading';
import Loading from 'components/icons/Loading';
import Trip from 'components/icons/Trip';
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
				<SectionHeading className={clsx('flex items-center justify-center h-[30vh] gap-20 bg-footerColor')}>
					<Trip width={180} height={180} />
					<Heading variant="h1" className={clsx('text-white font-bold')}>
						Atrakcje {cityId}
					</Heading>
				</SectionHeading>
				{attractions ? (
					<section className={clsx('mt-[100px] flex justify-center gap-7 max-w-[1000px] h-fit m-auto')}>
						{cities.map((city, i) => (
							<div key={i}>
								<Card attraction={city} />
							</div>
						))}
					</section>
				) : (
					<Loading />
				)}
			</Layout>
			{cities ? <Footer className={clsx('absolute')} /> : null}
		</>
	);
};

export default CityAttractionDetails;

