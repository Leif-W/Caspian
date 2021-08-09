'use strict';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Banner = () => {
	return (
		<div className='banner'>
			<div className='banner-gradient' />
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				interval={5000}
				showArrows={true}
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
			>
				<div className='rgx2-1 slide-container'>
					<div className='slide-top'>
						<div className='text-container'>
							<div className='text-position'>
								<p className='text-itself'>
									Fjallraven - Foldsack No. 1 Backpack, Fits 15&quot; Laptops
								</p>
							</div>
						</div>
						<div className='image-container'>
							<div className='image-position'>
								<img
									alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15&quot; Laptops'
									className='image-itself'
									loading='lazy'
									src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
								/>
							</div>
						</div>
					</div>
					<div className='slide-bottom'></div>
				</div>
				<div className='rgx2-2 slide-container'>
					<div className='slide-top'>
						<div className='text-container'>
							<div className='text-position'>
								<p className='text-itself'>
									John Hardy Women&apos;s Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet
								</p>
							</div>
						</div>
						<div className='image-container'>
							<div className='image-position'>
								<img
									alt='John Hardy Women&apos;s Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet'
									className='image-itself'
									loading='lazy'
									src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
								/>
							</div>
						</div>
					</div>
					<div className='slide-bottom'></div>
				</div>
				<div className='rgx2-3 slide-container'>
					<div className='slide-top'>
						<div className='text-container'>
							<div className='text-position'>
								<p className='text-itself'>
									Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
								</p>
							</div>
						</div>
						<div className='image-container'>
							<div className='image-position'>
								<img
									alt='Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'
									className='image-itself'
									loading='lazy'
									src='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
								/>
							</div>
						</div>
					</div>
					<div className='slide-bottom'></div>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
