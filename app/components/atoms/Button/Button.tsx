import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';
import capitalize from 'lodash/capitalize';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
	color?: 'primary' | 'secondary' | 'tertiary';
	size?: 'large' | 'medium' | 'small';
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, Props>(
	({ color = 'primary', type = 'button', size = 'medium', className, children, onClick, ...rest }, ref) => {
		return (
			<button
				className={clsx(
					styles.button,
					styles[`button${capitalize(color)}`],
					styles[`button${capitalize(size)}`],
					className
				)}
				onClick={onClick}
			>
				{children}
			</button>
		);
	}
);

export default Button;

