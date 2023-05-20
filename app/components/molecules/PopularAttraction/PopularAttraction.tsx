'use client';
import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllAttraction } from 'api/api';
import { BE_Attraction } from 'types/types';
import { useRouter } from 'next/navigation';

export interface IProps {
	onClick?: () => void;
	attraction?: BE_Attraction;
}

const PopularAttraction: FC<IProps> = ({ attraction }) => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);
	const router = useRouter();

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	const getCityCount = (attrsCity: BE_Attraction[]) => {
		return attrsCity.reduce((acc: { [city: string]: number }, attrCity) => {
			const city = attrCity.city;
			if (!city) {
				return acc;
			}
			if (!acc[city]) {
				acc[city] = 1;
			} else {
				acc[city]++;
			}
			return acc;
		}, {});
	};

	const cityCounts = getCityCount(attractions);

	const handleCityClick = (cityId: string) => {
		const decodeCityName = decodeURIComponent(cityId);
		router.push(`pages/cities/${decodeCityName}`);
	};

	return (
		<section className={clsx('max-w-[1000px] h-auto')}>
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase')}>
					Dostępne atrakcje
				</Heading>
			</div>
			<div className={clsx('flex flex-wrap m-auto mt-[50px]')}>
				{Object.entries(cityCounts).map(([cityName, count]) => (
					<div
						key={cityName}
						className={'flex p-6 gap-5 w-[250px] hover:cursor-pointer'}
						onClick={() => handleCityClick(cityName)}
					>
						<Image src="https://placehold.jp/50x50.png" alt="img" width={50} height={50} />
						<div className={clsx('flex flex-col items-start')}>
							<Heading variant="h4" className={clsx('')}>
								{cityName}
							</Heading>
							<p>{count} atrakcji</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularAttraction;

