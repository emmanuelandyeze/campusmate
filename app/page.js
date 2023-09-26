// pages/index.js

import Head from 'next/head';
import Landing from '@/components/Landing';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>CampusMate - Your Academic Companion</title>
				<meta
					name="description"
					content="CampusMate - Organize your academic life with ease."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen bg-white">
				<Header />
				<Landing />
				{/* <Footer /> */}
			</main>
		</div>
	);
}
