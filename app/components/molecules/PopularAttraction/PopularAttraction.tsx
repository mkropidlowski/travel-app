import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import { FC } from 'react';
import { citiesMockup } from './helpers';
import Image from 'next/image';

export interface IPopularAttractionProps {
	cities?: IPopularAttractionProps[];
}
const PopularAttraction: FC<IPopularAttractionProps> = ({ cities = citiesMockup }) => {
	return (
		<section className={clsx('max-w-[1000px] h-auto')}>
			<div className={clsx('w-full')}>
				<Heading variant="h2" className={clsx('!text-left font-medium uppercase')}>
					Dostępne atrakcje
				</Heading>
			</div>
			<div className={clsx('flex flex-wrap m-auto mt-[50px]')}>
				{Object.values(cities).map(({ label, offerList }) => (
					<div key={label} className={'flex p-6 gap-5 w-[250px]'}>
						<Image src="https://placehold.jp/50x50.png" alt="img" width={50} height={50} />
						<div className={clsx('flex flex-col items-start')}>
							<Heading variant="h4" className={clsx('')}>
								{label}
							</Heading>
							<p>{offerList} atrakcji</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PopularAttraction;

