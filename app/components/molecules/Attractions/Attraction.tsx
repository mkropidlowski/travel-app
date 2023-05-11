import { FC } from 'react';
import styles from './attractions.module.scss';
import Heading from 'components/atoms/Heading/Heading';
import clsx from 'clsx';
import CardsContainer from '../CardsContainer/CardsContainer';
import { offersMockup } from '../CardsContainer/data';
export interface IAttractions {}

const Attractions: FC<IAttractions> = () => {
	return (
		<section className={clsx('max-w-[1000px] h-auto')}>
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase')}>
					Atrakcje
				</Heading>
			</div>
			<div className={clsx('relative top-[50px]')}>
				<CardsContainer cards={offersMockup} />
			</div>
		</section>
	);
};

export default Attractions;

