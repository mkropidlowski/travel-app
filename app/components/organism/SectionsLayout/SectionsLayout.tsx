import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export interface ISectionsLayoutProps {
	children?: ReactNode;
}

const SectionsLayout: FC<ISectionsLayoutProps> = ({ children }) => (
	<div className={clsx('relative mt-[70px] flex flex-col items-center justify-center w-full h-auto gap-[50px]')}>
		{children}
	</div>
);

export default SectionsLayout;

