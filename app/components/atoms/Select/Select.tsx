'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';
import styles from './select.module.scss';
import { optionsLabel } from './helpers';
import Select, { OnChangeValue } from 'react-select';
import type { OptionValue } from './types';
import { useId } from 'react';

export interface ISelectProps {
	placeholder?: string;
	required?: boolean;
	error?: string;
	errorText?: string;
	className?: string;
	optionValue?: OptionValue[];
	onChange?: (selectedOptions: OptionValue[] | null) => void;
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

	const handleChange = (selectedOptions: OnChangeValue<OptionValue, true>) => {
		setSelectedOptions(selectedOptions as any);

		if (onChange) {
			const optionsArray = selectedOptions.map((option) => option as OptionValue);
			onChange(optionsArray);
		}
	};

	return (
		<div className={clsx(styles.customSelect)}>
			<Select
				aria-label=""
				instanceId={useId()}
				aria-labelledby=""
				options={optionValue.map((option) => ({ label: option.label }))}
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

