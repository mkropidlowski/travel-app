'use client';
import Loading from 'components/icons/Loading';
import Dashboard from 'components/molecules/Dashboard/Dashboard';
import { useSession } from 'next-auth/react';

const UserPanelPage = () => {
	const { data } = useSession();

	return <>{data ? <Dashboard /> : <Loading />}</>;
};

export default UserPanelPage;

