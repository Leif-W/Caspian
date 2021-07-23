'use strict';

import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
	return(
		<>
			<Head>
				<link
					rel='icon'
					src='/favicon.ico'
				/>
			</Head>

			{/* Header */}
			<Header />

			{/* Content */}
			<main>
				<h2>Home</h2>
			</main>
		</>
	);
};

export default Home;
