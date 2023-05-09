import { HTMLProps } from 'react';
import clsx from 'clsx';
import styles from './heading.module.scss';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export interface IHeading extends HTMLProps<HTMLHeadingElement> {
	variant: HeadingVariant;
	bold?: boolean;
	className?: string;
}

const Heading: React.FC<IHeading> = ({ variant, bold = false, className, children, ...rest }) => {
	const HeadingVariant = variant;
	return (
		<HeadingVariant className={clsx(styles[`${variant}`], bold && styles.bold, className)} {...rest}>
			<span className={className} {...rest}>
				{children}
			</span>
		</HeadingVariant>
	);
};

export default Heading;

