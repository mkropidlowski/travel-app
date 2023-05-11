import { NextPage } from 'next';
import Layout from './components/organism/Layout/Layout';
import Hero from './components/organism/Hero/Hero';
import PopularAttraction from 'components/molecules/PopularAttraction/PopularAttraction';
import SectionsLayout from 'components/organism/SectionsLayout/SectionsLayout';
import Attractions from 'components/molecules/Attractions/Attraction';
import Footer from 'components/organism/Footer/Footer';

const Home: NextPage = () => {
	return (
		<Layout>
			<Hero />
			<SectionsLayout>
				<PopularAttraction />
				<Attractions />
				<Footer />
			</SectionsLayout>
		</Layout>
	);
};

export default Home;

