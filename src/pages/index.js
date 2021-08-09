'use strict';

import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed  from '../components/ProductFeed';

const Home = ({products}) => {
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
				<ProductFeed products={products} />
			</main>
		</>
	);
};

export default Home;

export const getServerSideProps = async (context) => {
	const products = await fetch('https://fakestoreapi.com/products').then(
		(res) => res.json()
	);

	return {
		props: {
			products,
		},
	};
};
