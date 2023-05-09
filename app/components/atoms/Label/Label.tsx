import clsx from 'clsx';
import React, { ReactNode } from 'react';
import style from '../Label/label.module.scss';

export interface LabelProps {
	text: ReactNode;
}

export const LabelText: React.FC<LabelProps & React.HTMLProps<HTMLDivElement>> = ({ text, className, ...rest }) => (
	<div className={clsx(style.label, className)} {...rest}>
		{text}
	</div>
);

LabelText.displayName = 'LabelText';

