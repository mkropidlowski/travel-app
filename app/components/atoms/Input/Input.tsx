import clsx from 'clsx';
import { ChangeEvent, forwardRef, HTMLProps } from 'react';
import { LabelText } from '../Label/Label';
import styles from './input.module.scss';

export type IInputTypeProps = 'text' | 'password' | 'hidden' | 'number' | 'email' | 'date';

export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
	type?: IInputTypeProps;
	placeholder?: string;
	id?: string;
	name?: string;
	value?: string | number | string[];
	defaultValue?: string | number | string[];
	isError?: boolean;
	errorText?: string;
	// eslint-disable-next-line no-unused-vars
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	shouldRenderLabel?: boolean;
	className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			type,
			placeholder,
			value = '',
			defaultValue,
			isError,
			errorText,
			// onChange = () => null,
			className,
			required,
			shouldRenderLabel = false,
			...rest
		},
		ref
	) => {
		// const inputHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e);
		const inputPlaceholder = `${placeholder}${required ? '*' : ''}`;

		return (
			<div className={clsx(styles.inputWrapper, className)}>
				{isError ? <div className={styles.errorMessage}>{errorText}</div> : null}

				{shouldRenderLabel ? <LabelText text={inputPlaceholder} className={styles.label} /> : null}
				<input
					// className={clsx(styles.input, styles[`activeInput-${!!inputHandler}`], !shouldRenderLabel && styles.hideLabel)}
					className={clsx(styles.input, !shouldRenderLabel && styles.hideLabel)}
					type={type}
					defaultValue={defaultValue}
					placeholder={inputPlaceholder}
					ref={ref}
					{...rest}
				></input>
			</div>
		);
	}
);

export default Input;

