'use strict';

import {useState} from 'react';

// Inspired by "They Live!" (1988), starring 'Rowdy' Roddy Piper
const AdvertisementBannerHorizontalSubliminal = () => {
	const msgs = [
		'BELIEVE',
		'BREED',
		'BUY',
		'CONFORM',
		'CONSUME',
		'FOLLOW',
		'OBEY',
		'SLEEP',
		'SUBMIT',
	];

	const [msg] = useState(
		msgs[Math.floor(Math.random() * msgs.length)]
	);

	return(
		<div
			className='
				w-full
				sm:col-span-full
			'
		>
			<svg
				width="1500"
				height="300"
				preserveAspectRatio="xMinYMin meet"
				viewBox="0 0 1500 300"
				xmlns="http://www.w3.org/2000/svg"
				className="w-full h-full"
			>
				<style>
					text {`{
						dominant-baseline: text-after-edge;
						fill: #000;
						font-size: 15em;
						font-style: normal;
						font-weight: normal;
						text-anchor: middle;
					}`}
				</style>
				<g>
					<rect
						fill="#fff"
						height="300"
						stroke="none"
						width="1500"
						x="0"
						y="0"
					/>
					<text id="text"
						height="300"
						lengthAdjust="spacingAndGlyphs"
						textLength="90%"
						width="1500"
						x="50%"
						y="98%"
					>{msg}</text>
				</g>
			</svg>
		</div>
	);
};

export default AdvertisementBannerHorizontalSubliminal;
