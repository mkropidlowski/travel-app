export type OptionValue = {
	label?: string | number;
	value?: string;
	options?: LabelValueObject[];
	selectedOptions?: LabelValueObject[];
};

export type LabelValueObject = Object & {
	label?: string | number;
	value?: string;
};
