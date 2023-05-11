import { FC } from 'react';
import { BE_Attraction } from 'types/types';
import Card from '../Card/Card';
import clsx from 'clsx';

export interface ICard {
	cards: BE_Attraction[];
}

const CardsContainer: FC<ICard> = ({ cards }) => {
	return (
		<div className={clsx('max-w-[1000px] h-auto flex flex-row flex-wrap items-center justify-center gap-5')}>
			{cards.map((attraction) => (
				<Card key={attraction.id} attraction={attraction} />
			))}
		</div>
	);
};

export default CardsContainer;

