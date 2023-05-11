import { ReactNode, FC } from 'react';
import Navbar from 'components/molecules/Navbar/Navbar';
import clsx from 'clsx';

interface ILayout {
	children?: ReactNode;
	title?: string;
	description?: string;
}

const Layout: FC<ILayout> = ({ title, description, children }) => (
	<div className={clsx('flex flex-wrap justify-center items-center')}>
		<Navbar />
		<main className={clsx('w-full h-auto')}>{children}</main>
	</div>
);

export default Layout;

