'use client';
import Button from 'components/atoms/Button/Button';
import { FC, useState } from 'react';
import { menuLinks } from './helpers';
import Section from './components/Sections/Sections';
import { useSession } from 'next-auth/react';
import Loading from 'components/icons/Loading';

interface NavPanelProps {
	links?: NavPanelProps[];
}

const UserNavPanel: FC<NavPanelProps> = ({ links = menuLinks }) => {
	const [section, setSection] = useState<JSX.Element>();
	const { data } = useSession();
	return (
		<>
			{data ? (
				<>
					<nav className="w-[250px]">
						<ul className="flex flex-col gap-3">
							{Object.values(links).map(({ text, content }) => {
								const contentHref = content;
								return (
									<li key={text} className="w-full">
										<Button color="secondary" className="w-full" onClick={() => setSection(contentHref)}>
											{text}
										</Button>
									</li>
								);
							})}
						</ul>
					</nav>
					<div>
						<Section content={section} />
					</div>
				</>
			) : (
				<Loading />
			)}
		</>
	);
};

export default UserNavPanel;

