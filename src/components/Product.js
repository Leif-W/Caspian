'use strict';

import {useState} from 'react';
import Image from 'next/image';
import {StarIcon} from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MIN_RATING = 1;
const MAX_RATING = 5;

const Product = ({id, title, price, description, category, image}) => {
    const [rating] = useState(
		Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
	);

	const [hasPrime] = useState(Math.random() > 0.5);

	return (
		<div className='
			relative
			flex
			flex-col
			m-4
			bg-gray-800
			z-30
			p-8
		'>
			<p className='
				absolute
				top-2
				right-2
				text-xs
				italic
				text-gray-400
			'>
				{category}
			</p>
			<Image src={image} height={200} width={200} objectFit='contain' />
			<h4 className='my-3'>{title}</h4>
			<div className='flex'>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className='h-5 text-caspian_gold-light' />
					))
				}
			</div>
			<p className='text-xs my-2 line-clamp-2'>{description}</p>
			<div className='mb-4'>
				<Currency quantity={price} currency='USD' />
			</div>
			{hasPrime && (
				<div className='
					flex
					items-center
					space-x-2
					-mt-4
					mb-4
				'>
					<img className='rounded-lg w-16' src='sovran.svg' alt='caspian sovran shipping' />
					<p className='text-xs text-gray-200'>FREE Speedy Delivery!</p>
				</div>
			)}
			<button className='mt-auto product-button-add'>Add to Order</button>
		</div>
	);
};

export default Product;
