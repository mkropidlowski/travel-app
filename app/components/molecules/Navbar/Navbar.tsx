'use client';
import { FC } from 'react';
import { MenuLinksProps, NavbarProps } from './types';
import clsx from 'clsx';
import { menuLinks } from './helpers';
import Link from 'next/link';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { useSession } from 'next-auth/react';

const Navbar: FC<NavbarProps> = ({ className, links = menuLinks }) => {
	const { data } = useSession();

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
				{Object.values(links).map(({ id, text, redirectToComponent }: MenuLinksProps) => {
					const linkHref = `/#${id}`;
					const hrefToComponent = `/pages/${id}`;

					return (
						<li key={id}>
							{redirectToComponent ? (
								<Link href={hrefToComponent}>
									<Button type="button" color="primary">
										{text}
									</Button>
								</Link>
							) : (
								<Link href={linkHref}>
									<Button type="button" color="primary">
										{text}
									</Button>
								</Link>
							)}
						</li>
					);
				})}
			</ul>
			{data?.user ? (
				<Link href="/pages/panel">
					<Button color="tertiary" size="small">
						Witaj, {data?.user?.name}
					</Button>
				</Link>
			) : (
				<Link href="/pages/login">
					<Button color="tertiary" size="small">
						Zaloguj
					</Button>
				</Link>
			)}
		</nav>
	);
};

export default Navbar;

