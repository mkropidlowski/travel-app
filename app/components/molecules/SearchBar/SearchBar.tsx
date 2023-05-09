import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const SearchBar = () => {
	return (
		<div className={clsx('relative top-[60px] min-w-[800px] h-fit rounded-3xl  bg-slate-200')}>
			<form className={clsx('flex flex-col items-center justify-center w-full p-3 gap-8')}>
				<div className={clsx('flex items-center justify-center gap-10')}>
					<Input type="text" placeholder="Województwo" />
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

