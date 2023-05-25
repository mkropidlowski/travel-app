import { useSession } from 'next-auth/react';

const UserInfo = () => {
	const { data } = useSession();
	return (
		<div className="min-w-[800px]">
			<p>Twoje dane: </p>
			<ul>
				<li>Nazwa: {data?.user?.name}</li>
				<li>E-mail: {data?.user?.email}</li>
			</ul>
		</div>
	);
};
export default UserInfo;

