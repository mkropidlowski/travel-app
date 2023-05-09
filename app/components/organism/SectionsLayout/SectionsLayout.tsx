import clsx from 'clsx';
import { FC, ReactNode } from 'react';

export interface ISectionsLayoutProps {
	children?: ReactNode;
}

const SectionsLayout: FC<ISectionsLayoutProps> = ({ children }) => (
	<div className={clsx('flex flex-col items-center justify-center w-full')}>{children}</div>
);

export default SectionsLayout;

