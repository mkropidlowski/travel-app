'use client';
import { FC, useEffect, useState } from 'react';
import Heading from 'components/atoms/Heading/Heading';
import clsx from 'clsx';
import CardsContainer from '../CardsContainer/CardsContainer';
import { getAllAttraction } from 'api/api';
import { BE_Attraction } from 'types/types';

const Attractions: FC = () => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);

	useEffect(() => {
		getAllAttraction('attractions').then((data) => setAttractions(data));
	}, []);

	return (
		<section className={clsx('max-w-[1000px] h-auto')} id="attraction">
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase')}>
					Atrakcje
				</Heading>
			</div>
			<div className={clsx('relative top-[50px]')}>
				<CardsContainer cards={attractions} />
			</div>
		</section>
	);
};

export default Attractions;

