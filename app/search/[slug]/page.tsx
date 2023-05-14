'use client';
import { getAllAttraction } from 'api/api';
import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import SectionHeading from 'components/atoms/SectionHeading/SectionHeading';
import { Bikers } from 'components/icons';
import Loading from 'components/icons/Loading';
import Card from 'components/molecules/Card/Card';
import Footer from 'components/organism/Footer/Footer';
import Layout from 'components/organism/Layout/Layout';
import { useState, useEffect } from 'react';
import { BE_Attraction } from 'types/types';

const SearchSpecyficAttractions = ({ params }: { params: { slug: string } }) => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const [error, setError] = useState<string>('');
	const provinceName = decodeURIComponent(params.slug);

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	const searchByProvince = attractions.filter((singleProvince) => singleProvince.province === provinceName);

	return (
		<>
			<Layout>
				<SectionHeading className={clsx('flex items-center justify-center h-[30vh] gap-20 bg-footerColor')}>
					<Bikers width={180} height={180} />
					<Heading variant="h1" className={clsx('text-white font-bold')}>
						Atrakcje {provinceName}
					</Heading>
				</SectionHeading>
				{searchByProvince ? (
					<section className={clsx('mt-[100px] flex justify-center gap-7 max-w-[1000px] h-fit m-auto')}>
						{searchByProvince.map((province, i) => (
							<div key={i}>
								<Card attraction={province} />
							</div>
						))}
					</section>
				) : (
					<p>{'elo'}</p>
				)}
			</Layout>

			{provinceName ? <Footer className={clsx('absolute')} /> : null}
		</>
	);
};

export default SearchSpecyficAttractions;

// if (searchByProvince.toLocaleString().toLowerCase() != provinceName.toLowerCase()) {
// 	return <p>Bład</p>;
// }

