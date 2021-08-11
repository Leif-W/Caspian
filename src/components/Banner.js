'use strict';

import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Slide from '../components/Slide';

const Banner = () => {
	const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

	return (
		<div className='banner'>
			<div className='banner-gradient' />
			<Carousel
				autoPlay={true}
				infiniteLoop={true}
				interval={5000}
				renderItem={customRenderItem}
				showArrows={true}
				showIndicators={false}
				showStatus={false}
				showThumbs={false}
			>
				<Slide
					gradient='rgx2-1'
					key='0'
					image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
					title='Fjallraven - Foldsack No. 1 Backpack, Fits 15&quot; Laptops'
				/>
				<Slide
					gradient='rgx2-2'
					key='1'
					image='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
					title='John Hardy Women&apos;s Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet'
				/>
				<Slide
					gradient='rgx2-3'
					key='2'
					image='https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
					title='Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'
				/>
			</Carousel>
		</div>
	);
};

export default Banner;
