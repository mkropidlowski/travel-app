import { BE_Attraction } from 'types/types';
import styles from './card.module.scss';
import { FC } from 'react';

export interface ICard {
	attraction?: BE_Attraction;
	onClick?: () => void;
	className?: string;
}

const Card: FC<ICard> = () => {
	return <div>CARD ATTR</div>;
};

export default Card;

