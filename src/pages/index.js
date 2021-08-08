'use strict';

import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Home = () => {
	return(
		<>
			<Head>
				<title>Caspian - Consumerist Cornucopia</title>
				<link
					rel='icon'
					src='/favicon.ico'
				/>
			</Head>

			{/* Header */}
			<Header />

			{/* Content */}
			<main className='
				lg:max-w-xl
				max-w-full
				mx-auto
				xl:max-w-2xl
			'>
				{/* Banner */}
				<Banner />

				{/* ProductFeed */}
				<p>ProductFeed</p>
			</main>
		</>
	);
};

export default Home;
