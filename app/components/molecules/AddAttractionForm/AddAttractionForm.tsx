'use client';
import Input from 'components/atoms/Input/Input';
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BE_Attraction } from '../../../types/types';
import { ResponseStatus, formStatusCode } from './helpers';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { attractionInputField } from './inputs';
import { IInputTypeProps } from 'components/atoms/Input/Input';
import { ref, set } from 'firebase/database';
import { db } from 'config/firebase/config';
import 'firebase/database';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validation';
import { useSession } from 'next-auth/react';

const AddAttractionForm: FC<BE_Attraction> = () => {
	const [responseStatus, setResponseStatus] = useState<ResponseStatus>('default');
	const formRef = useRef<HTMLFormElement | null>(null);
	const { data } = useSession();

	const randomId = Math.random().toString(16).slice(2);

	const addNewAttraction = (newAttraction: BE_Attraction) => {
		set(ref(db, 'attractions/' + randomId), newAttraction);
	};

	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<BE_Attraction>({ mode: 'all', resolver: yupResolver(validationSchema) });

	const formSubmit = async () => {
		const getData = getValues();
		setResponseStatus('pending');
		try {
			addNewAttraction({ ...getData, ifUserIsLoggedEmail: data?.user?.email });
			setResponseStatus('sent');
			formRef.current?.reset();
		} catch (error) {
			setResponseStatus('error');
		}
	};
	return (
		<div className="mt-[50px] max-w-[800px] h-fit m-auto bg-slate-200 p-3 rounded-xl">
			<Heading variant="h3">Dodaj atrakcję</Heading>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(formSubmit)();
				}}
				ref={formRef}
				className="flex flex-col items-center justify-center m-auto max-w-[700px] p-5"
			>
				<div className="flex flex-wrap gap-[20px]">
					{attractionInputField.map(({ formKey, inputType, placeholder }) => {
						const formInputKey = formKey as keyof BE_Attraction;
						const formInputType = inputType as IInputTypeProps;
						return (
							<Input
								key={formKey}
								{...register(formInputKey)}
								isError={!!errors[formInputKey]?.message}
								errorText={errors[formInputKey]?.message}
								required
								type={formInputType}
								placeholder={placeholder}
							/>
						);
					})}
					<textarea
						className="w-[350px] p-1 block rounded-xl resize-none"
						{...register('description')}
						rows={1}
						placeholder="Dodaj opis atrakcji"
					></textarea>
				</div>
				<Button color="secondary" className="relative top-[15px]">
					{formStatusCode[responseStatus] ?? formStatusCode}
				</Button>
			</form>
		</div>
	);
};

export default AddAttractionForm;

