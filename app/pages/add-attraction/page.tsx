import AddAttractionForm from 'components/molecules/AddAttractionForm/AddAttractionForm';
import Footer from 'components/organism/Footer/Footer';
import Layout from 'components/organism/Layout/Layout';

const AddAttractionPage = () => {
	return (
		<>
			<Layout>
				<AddAttractionForm />
				<Footer className="absolute" />
			</Layout>
		</>
	);
};

export default AddAttractionPage;

