'use client';
import { FC, useEffect, useState } from 'react';
import styles from './attractions.module.scss';
import Heading from 'components/atoms/Heading/Heading';
import clsx from 'clsx';
import CardsContainer from '../CardsContainer/CardsContainer';
import { getAllAttraction } from 'api/api';
import { BE_Attraction } from 'types/types';

export interface IAttractions {}

const Attractions: FC<IAttractions> = () => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);

	useEffect(() => {
		getAllAttraction().then((data) => setAttractions(data));
	}, []);

	return (
		<section className={clsx('max-w-[1000px] h-auto')} id="attraction">
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase', styles.heading)}>
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

