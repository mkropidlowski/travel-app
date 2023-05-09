import { FC } from 'react';
import styles from './attractions.module.scss';
import Heading from 'components/atoms/Heading/Heading';
import clsx from 'clsx';

export interface IAttractions {}

const Attractions: FC<IAttractions> = () => {
	return (
		<section className={clsx('relative top-[100px] max-w-[1000px] h-[70vh]')}>
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase')}>
					Atrakcje
				</Heading>
			</div>
			<div></div>
		</section>
	);
};

export default Attractions;

