import clsx from 'clsx';
import { ReactNode, FC } from 'react';

export interface IProps {
	className?: string;
	children?: ReactNode;
}

const SectionHeading: FC<IProps> = ({ className, children, ...rest }) => {
	return (
		<div className={clsx(`w-full`, className)} {...rest}>
			{children}
		</div>
	);
};

export default SectionHeading;

