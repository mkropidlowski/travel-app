'use client';
import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import SelectField from 'components/atoms/Select/Select';
import { OptionValue } from 'components/atoms/Select/types';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

const SearchBar: FC = () => {
	const router = useRouter();
	const [selectedProvince, setSelectedProvince] = useState<OptionValue[] | null>();
	const [error, setError] = useState('');
	const [cityInput, setCityInput] = useState('');

	const handleProvinceSearch = (newValue: OptionValue[] | null) => {
		setSelectedProvince(newValue);
	};

	const provinceName = selectedProvince?.map((name) => name.label);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (provinceName === undefined) {
			setError('Wprowadź dane w jedno z pul na podstawie których chcesz szukać atrakcji.');
		} else {
			router.push(`/search/${provinceName}`);
			setError('');
		}
		if (cityInput === '') {
			setError('Wprowadź dane w jedno z pul na podstawie których chcesz szukać atrakcji.');
		} else {
			router.push(`/cities/${cityInput}`);
			setError('');
		}
	};

	return (
		<div className={clsx('relative top-[60px] min-w-[800px] h-fit rounded-3xl  bg-slate-200')}>
			<form className={clsx('flex flex-col items-center justify-center w-full p-3 gap-8')} onSubmit={handleSubmit}>
				<div className={clsx('flex items-center justify-center gap-10')}>
					<SelectField onChange={handleProvinceSearch} required />
					<Input type="text" placeholder="Miasto" value={cityInput} onChange={(e) => setCityInput(e.target.value)} />
					<Input type="text" placeholder="Wpisz nazwę atrakcji" />
				</div>
				{error && <span>{error}</span>}
				<Button color="secondary" type="submit" className={clsx('w-[100px]')}>
					Szukaj
				</Button>
			</form>
		</div>
	);
};

export default SearchBar;

