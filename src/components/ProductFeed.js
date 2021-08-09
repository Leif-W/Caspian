'use strict';

import Product from '../components/Product';
import AdvertisementBannerHorizontalSubliminal from '../components/AdvertisementBannerHorizontalSubliminal';

const ProductFeed = ({products}) => {
	return (
		<div className='
			grid
			grid-flow-row-dense
			sm:grid-cols-2
			md:grid-cols-3
			lg:grid-cols-4
			xl:grid-cols-5
			-mt-16
			xs:-mt-18
			sm:-mt-20
			md:-mt-22
			lg:-mt-24
			mx-auto
		'>
			{products
				.slice(0,3)
				.map(
					({id, title, price, description, category, image}) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					)
				)
			}

			<AdvertisementBannerHorizontalSubliminal />

			<div className='
				sm:col-span-2
				md:col-span-3
				lg:col-span-4
				xl:col-span-5
			'>
				{products
					.slice(3,4)
					.map(
						({id, title, price, description, category, image}) => (
							<Product
								key={id}
								id={id}
								title={title}
								price={price}
								description={description}
								category={category}
								image={image}
							/>
						)
					)
				}
			</div>

			{products
				.slice(4,products.length)
				.map(
					({id, title, price, description, category, image}) => (
						<Product
							key={id}
							id={id}
							title={title}
							price={price}
							description={description}
							category={category}
							image={image}
						/>
					)
				)
			}

		</div>
	);
};

export default ProductFeed;
