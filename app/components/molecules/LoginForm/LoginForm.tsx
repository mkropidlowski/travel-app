'use client';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { FC, useCallback } from 'react';
import { useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import AuthButton from './components/AuthButton';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { toast } from 'react-hot-toast';
import axios from 'axios';

type Variant = 'LOGIN' | 'REGISTER';

const LoginForm: FC = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN');
	const [isLoading, setIsLoading] = useState(false);

	const toogleVariant = useCallback(() => {
		if (variant === 'LOGIN') {
			setVariant('REGISTER');
		} else {
			setVariant('LOGIN');
		}
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({ defaultValues: { name: '', email: '', password: '' } });

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (variant === 'REGISTER') {
			axios
				.post('/api/register', data)
				.catch(() => toast.error('Upss.. coś poszło nie tak.'))
				.finally(() => {
					setIsLoading(false);
				});
		}
		if (variant === 'LOGIN') {
			signIn('credentials', { ...data, redirect: true, callbackUrl: '/' })
				.then((callback) => {
					if (callback?.error) {
						toast.error('Błędne dane logowania.');
					}
					if (callback?.ok && !callback?.error) {
						toast.success('Zalogowano.');
					}
				})
				.finally(() => setIsLoading(false));
		}
	};

	const socialAction = (action: string) => {
		setIsLoading(true);
		signIn(action, { redirect: false })
			.then((callback) => {
				if (callback?.error) {
					toast.error('Nieprawidłowe dane.');
				}
				if (callback?.ok && !callback?.error) {
					toast.success('Zalogowany.');
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<div className="mt-[100px] sm:mx-auto sm:w-full sm:max-w-md">
			<div className="px-4 py-8 shadow sm:rounded-lg sm:px-10 bg-blue-400">
				<form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<div>
						{variant === 'REGISTER' ? (
							<Input type="text" placeholder="Nazwa uzytkownika" {...register('name')} className="!w-[300px]" />
						) : (
							''
						)}
						<Input
							type="text"
							placeholder="Adres e-mail"
							{...register('email')}
							isError={!!errors['email']?.message}
							required
							className="!w-[300px]"
						/>
						<Input type="password" placeholder="Hasło" {...register('password')} className="!w-[300px]" />
					</div>
					<div>
						<Button color="secondary" size="small" disabled={isLoading}>
							{variant === 'LOGIN' ? 'Zaloguj się' : 'Załóz konto'}
						</Button>
					</div>
				</form>
				<div className="text-center text-white mt-3">
					<div>lub zaloguj przez</div>
					<div className="w-full inline-flex justify-around mt-4">
						<AuthButton icon={BsGithub} onClick={() => socialAction('github')} />
						<AuthButton icon={BsGoogle} onClick={() => socialAction('google')} />
					</div>
				</div>
				<div className="flex gap-2 justify-center text-sm mt-6 px-2 text-white">
					<div>{variant === 'LOGIN' ? 'Nie posiadasz jeszcze konta?' : 'Posiadasz juz konto?'}</div>
					<div onClick={toogleVariant} className="underline cursor-pointer">
						{variant === 'LOGIN' ? 'Załóz konto' : 'Zaloguj się'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;

