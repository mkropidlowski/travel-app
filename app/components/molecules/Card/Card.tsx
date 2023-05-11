import { BE_Attraction } from 'types/types';
import styles from './card.module.scss';
import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Button from 'components/atoms/Button/Button';

export interface ICard {
	attraction?: BE_Attraction;
	onClick?: () => void;
	className?: string;
}

const Card: FC<ICard> = ({ attraction }) => {
	return (
		<div
			className={clsx(
				'flex flex-col justify-between w-[320px] min-h-[400px] bg-cardColor p-5 rounded-[15px] hover:bg-sky-700 cursor-pointer'
			)}
		>
			<div>
				<Image src={attraction?.src ?? ''} alt={attraction?.title ?? ''} width={300} height={250} />
			</div>
			<div className={clsx('text-white p-3')}>
				<p className={clsx('font-semibold text-center')}>
					{attraction?.city} | {attraction?.province}
				</p>
				<p className={clsx('p-2 mt-4')}>{attraction?.title}</p>

				<Button color="secondary">
					Cena: {attraction?.price} {attraction?.priceCurrency}
				</Button>
			</div>
		</div>
	);
};

export default Card;

