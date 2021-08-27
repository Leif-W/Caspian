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
			<Image
				alt={title}
				height='200'
				layer='fill'
				objectFit='contain'
				src={image}
				width='200'
			/>
			<h4 className='my-3'>{title}</h4>
			<div className='flex'>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon key={i} className='h-5 text-caspian_gold-light' />
					))
				}
			</div>
			<p className='text-xs my-2 line-clamp-2'>{description}</p>
			<div className='mb-4'>
				<Currency quantity={price} currency='USD' />
			</div>
			{hasPrime && (
				<div className='
					-mt-4
					flex
					items-center
					mb-4
					rounded-lg
					space-x-2
				'>
					<div className='
						h-8
						w-24
						relative
					'>
						<Image
							alt='caspian sovran shipping'
							layout='fill'
							objectFit='contain'
							src='/sovran.svg'
						/>
					</div>
					<p className='text-xs text-gray-200'>FREE Speedy Delivery!</p>
				</div>
			)}
			<button className='mt-auto product-button-add'>Add to Order</button>
		</div>
	);
};

export default Product;
