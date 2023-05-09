import clsx from 'clsx';
import styles from './hero.module.scss';
import Heading from 'components/atoms/Heading/Heading';
import background from '../../../../public/images/background_second.jpeg';
import SearchBar from 'components/molecules/SearchBar/SearchBar';

const Hero = () => {
	return (
		<header
			className={clsx(`flex justify-center bg-center bg-cover h-[80vh]`)}
			style={{ backgroundImage: `url(${background.src})` }}
		>
			<div className={clsx('flex flex-col items-center absolute top-[150px]')}>
				<Heading variant="h1" className={clsx('text-white text-6xl font-medium')}>
					Znajdź atrakcje w swojej okolicy!
				</Heading>
				<SearchBar />
			</div>
		</header>
	);
};

export default Hero;

