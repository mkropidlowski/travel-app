import { FC } from 'react';
import { NavbarProps } from './types';
import clsx from 'clsx';
import styles from './navbar.module.scss';
import { menuLinks } from './helpers';
import Link from 'next/link';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

const Navbar: FC<NavbarProps> = ({ className, links = menuLinks }) => {
	return (
		<nav
			className={clsx('flex flex-wrap justify-around items-center w-full bg-primary h-navBarHeight min-h-navBarHeight')}
		>
			<Heading variant="h3">
				<Link href="/">
					<span className={clsx('text-white')}>Travel Portal</span>
				</Link>
			</Heading>
			<ul className={clsx('flex items-center gap-5')}>
				{Object.values(links).map(({ id, text }) => {
					const linkHref = `/#${id}`;
					return (
						<li>
							<Link href={linkHref}>
								<Button>{text}</Button>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;

