'use client';
import { FC, useState } from 'react';
import { MenuLinksProps, NavbarProps } from './types';
import clsx from 'clsx';
import { menuLinks } from './helpers';
import Link from 'next/link';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import { signOut, useSession } from 'next-auth/react';

const Navbar: FC<NavbarProps> = ({ className, links = menuLinks }) => {
	const { data } = useSession();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav
			className={clsx('flex flex-wrap justify-around items-center w-full bg-primary h-navBarHeight min-h-navBarHeight')}
		>
			<Heading variant="h3">
				<Link href="/">
					<span className={clsx('text-white')}>Travel Portal</span>
				</Link>
			</Heading>
			<div className={clsx('md:hidden', isMobileMenuOpen ? 'p-2' : '')}>
				<button
					type="button"
					onClick={handleMobileMenuToggle}
					className={clsx('p-2 rounded focus:outline-none', { ' bg-gray-300': isMobileMenuOpen })}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
			<ul
				className={clsx(
					'flex items-center gap-5',
					isMobileMenuOpen ? 'flex-col bg-primary w-full h-[500px] z-10' : 'hidden md:flex'
				)}
			>
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
				<li>
					{data?.user ? (
						<div className={clsx('flex gap-5', isMobileMenuOpen ? 'flex-col' : '')}>
							<Link href="/pages/panel">
								<Button color="tertiary" size="small">
									Witaj, {data?.user?.name}
								</Button>
							</Link>
							<Button color="secondary" size="small" onClick={() => signOut({ callbackUrl: '/' })}>
								Wyloguj
							</Button>
						</div>
					) : (
						<Link href="/pages/login">
							<Button color="tertiary" size="small">
								Zaloguj
							</Button>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

