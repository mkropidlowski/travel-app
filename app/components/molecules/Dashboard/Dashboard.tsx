import Layout from 'components/organism/Layout/Layout';
import UserNavPanel from '../UserNavPanel/UserNavPanel';

const Dashboard = () => {
	return (
		<>
			<Layout>
				<section className="mt-[50px] max-w-[1300px] flex items-start justify-center gap-10">
					<UserNavPanel />
				</section>
			</Layout>
		</>
	);
};

export default Dashboard;

