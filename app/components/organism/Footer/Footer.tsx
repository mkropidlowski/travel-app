import clsx from 'clsx';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Link from 'next/link';
import { FC } from 'react';

export interface IFooter {
	className?: string;
}

const Footer: FC<IFooter> = ({ className }) => {
	return (
		<footer className={clsx('mt-[150px] w-full h-min-[300px] bg-footerColor text-white rounded-t-[20px]', className)}>
			<Heading variant="h1" className={clsx('p-5 text-white !text-left font-semibold')}>
				Travel Portal
			</Heading>
			<div className={clsx('w-[80%] m-auto h-auto flex flex-row justify-between items-end')}>
				<div className={clsx('flex flex-col gap-[20px]')}>
					<Link href="/">Hello</Link>
					<Link href="/policy">Polityka Prywatności</Link>
					<Link href="/regulamin">Regulamin</Link>
				</div>
				<div className={clsx('flex flex-col gap-[20px]')}>
					<p className={clsx('font-semibold')}>Travel Portal</p>
					<p>ul. Warszawska, Gdańsk</p>
					<p>+48 555 555 555</p>
				</div>
				<div className={clsx('max-w-[320px] flex flex-col items-end gap-[10px]')}>
					<Input type="text" placeholder="Adres e-mail" />
					<Button color="tertiary">Zapisz się do newslettera</Button>
				</div>
			</div>
			<div className={clsx('absolute bottom-0 w-full h-[30px] text-center bg-sky-700')}>Wykonał Michał Kropidłowski</div>
		</footer>
	);
};

export default Footer;

