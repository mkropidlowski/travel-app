import { BE_Attraction } from 'types/types';
import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Button from 'components/atoms/Button/Button';
import { useRouter } from 'next/navigation';

export interface ICard {
	attraction?: BE_Attraction;
	onClick?: () => void;
	className?: string;
}

const Card: FC<ICard> = ({ attraction }) => {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`pages/attraction/${attraction?.id}`);
	};
	return (
		<div
			className={clsx(
				'flex flex-col justify-between w-[320px] h-[450px] bg-cardColor p-5 rounded-[15px] hover:bg-sky-700 cursor-pointer'
			)}
			key={attraction?.id}
			onClick={handleCardClick}
		>
			<div className={clsx('h-[250px]')}>
				<Image
					src={attraction?.src ?? ''}
					alt={attraction?.title ?? 'Bład wczytywania zdjęcia.'}
					width={200}
					height={200}
					className={clsx('object-cover w-full h-full')}
				/>
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

