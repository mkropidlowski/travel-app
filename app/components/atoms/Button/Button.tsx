import { HTMLProps, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';
import capitalize from 'lodash/capitalize';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
	color?: 'primary' | 'secondary' | 'tertiary';
	size?: 'large' | 'medium' | 'small';
	type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement, Props>(
	({ color = 'primary', type = 'button', size = 'medium', className, children, ...rest }, ref) => {
		return (
			<button className={clsx(styles.button, styles[`button${capitalize(color)}`], styles[`button${capitalize(size)}`])}>
				{children}
			</button>
		);
	}
);

export default Button;

