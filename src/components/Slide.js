'use strict';

import Image from 'next/image';

const Slide = ({
	gradient,
	id,
	image,
	title,
}) => {
	return(
		<div className={`${gradient} slide-container`}>
			<div className='slide-top'>
				<div className='text-container'>
					<div className='text-position'>
						<p className='text-itself'>
							{title}
						</p>
					</div>
				</div>
				<div className='image-container'>
					<div className='image-position'>
						<div className='image-itself'>
							<Image
								alt={title}
								layout='fill'
								objectFit='contain'
								loading='lazy'
								src={image}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='slide-bottom'></div>
		</div>
	);
};

export default Slide;
