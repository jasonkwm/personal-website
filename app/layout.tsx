import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './_components/Navbar';
import './globals.css';
import Link from 'next/link';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jason Koh',
	description: 'Jason Koh Personal Website',
	icons: {
		icon: '/circle-icon.png',
	},
	other: {
		'google-site-verification': 'OOC49ULXwhTfA3X1Y90xuJ9IwekJAsbyTZYlPnJRJRE',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
