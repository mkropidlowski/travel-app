'use client';
import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import SelectField, { OptionValue } from 'components/atoms/Select/Select';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

const SearchBar: FC = () => {
	const router = useRouter();
	const [selectedProvince, setSelectedProvince] = useState<OptionValue[] | null>();

	const handleProvinceSearch = (newValue: OptionValue[] | null) => {
		setSelectedProvince(newValue);
	};

	const provinceName = selectedProvince?.map((name) => name.label);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/search/${provinceName}`);
	};

	return (
		<div className={clsx('relative top-[60px] min-w-[800px] h-fit rounded-3xl  bg-slate-200')}>
			<form className={clsx('flex flex-col items-center justify-center w-full p-3 gap-8')} onSubmit={handleSubmit}>
				<div className={clsx('flex items-center justify-center gap-10')}>
					<SelectField onChange={handleProvinceSearch} />
					<Input type="text" placeholder="Miasto" />
					<Input type="text" placeholder="Wpisz nazwę atrakcji" />
				</div>
				<Button color="secondary" type="submit" className={clsx('w-[100px]')}>
					Szukaj
				</Button>
			</form>
		</div>
	);
};

export default SearchBar;

