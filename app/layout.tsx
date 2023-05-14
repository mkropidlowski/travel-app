import './globals.css';

export const metadata = {
	title: 'Travel Portal',
	description: 'Portal with travel offers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}

