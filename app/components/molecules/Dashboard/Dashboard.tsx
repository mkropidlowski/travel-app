import Layout from 'components/organism/Layout/Layout';
import UserNavPanel from '../UserNavPanel/UserNavPanel';
import { useSession } from 'next-auth/react';
import Loading from 'components/icons/Loading';

const Dashboard = () => {
	const { data } = useSession();

	return (
		<>
			<Layout>
				{data ? (
					<section className="mt-[50px] max-w-[1300px] flex items-start justify-center gap-10">
						<UserNavPanel />
					</section>
				) : (
					<Loading />
				)}
			</Layout>
		</>
	);
};

export default Dashboard;

