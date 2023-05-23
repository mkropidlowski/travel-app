import ToasterContext from 'context/ToasterContext';
import './globals.css';
import AuthContext from 'context/AuthContext';

export const metadata = {
	title: 'Travel Portal',
	description: 'Portal with travel offers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body suppressHydrationWarning={true}>
				<AuthContext>
					<ToasterContext />
					{children}
				</AuthContext>
			</body>
		</html>
	);
}

