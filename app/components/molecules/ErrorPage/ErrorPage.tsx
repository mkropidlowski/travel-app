import clsx from 'clsx';
import Heading from 'components/atoms/Heading/Heading';
import SectionHeading from 'components/atoms/SectionHeading/SectionHeading';
import { Bikers } from 'components/icons';
import Footer from 'components/organism/Footer/Footer';
import Layout from 'components/organism/Layout/Layout';
import Link from 'next/link';

const ErrorPage = () => {
	return (
		<>
			<Layout>
				<SectionHeading className={clsx('flex items-center justify-center h-[30vh] gap-20 bg-footerColor')}>
					<Bikers width={180} height={180} />
					<Heading variant="h1" className={clsx('text-white font-bold')}>
						Brak wyszukiwanych atrakcji.
					</Heading>
				</SectionHeading>

				<section className={clsx('flex flex-col justify-center gap-7 max-w-[1000px] h-[40vh] m-auto')}>
					<Heading variant="h3"> Brak wyszukiwanych atrakcji.</Heading>
					<Heading variant="h5">
						<Link href="/">Powrót do strony głównej.</Link>
					</Heading>
				</section>
			</Layout>
			<Footer className={clsx('absolute')} />
		</>
	);
};

export default ErrorPage;

