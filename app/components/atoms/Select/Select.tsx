'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';
import styles from './select.module.scss';
import { optionsLabel } from './helpers';
import Select, { ActionMeta } from 'react-select';
import { ValueType } from 'react-select';
import { OptionValue } from './types';
import { useId } from 'react';

export interface ISelectProps {
	placeholder?: string;
	required?: boolean;
	error?: string;
	errorText?: string;
	className?: string;
	optionValue?: OptionValue[];
	onChange?: (newValue: OptionValue[] | null) => void;
}

const SelectField: FC<ISelectProps> = ({
	error,
	errorText,
	placeholder,
	required = false,
	optionValue = optionsLabel,
	onChange,
	...rest
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedOption, setSelectedOptions] = useState<OptionValue[] | null>();

	const handleChange = (selectedOptions: ValueType<OptionValue>, actionMeta: ActionMeta<OptionValue>) => {
		setSelectedOptions(selectedOptions as OptionValue[]);

		if (onChange) {
			onChange(selectedOptions as OptionValue[] | null);
		}
	};

	return (
		<div className={clsx(styles.customSelect)}>
			<Select
				aria-label=""
				instanceId={useId()}
				aria-labelledby=""
				options={optionValue}
				className={clsx('relative top-[9px] w-[250px]')}
				placeholder="Województwo"
				isMulti={true}
				onChange={handleChange}
				onMenuOpen={() => setIsMenuOpen(true)}
				onMenuClose={() => setIsMenuOpen(false)}
				{...rest}
			/>
		</div>
	);
};

export default SelectField;

