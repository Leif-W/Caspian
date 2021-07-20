'use strict';

import Image from 'next/image';
import logoImg from '../../public/logo.svg';

const Header = () => {
	return(
		<header>
			{/* top nav */}
			<div className='bg-caspian_blue-pitch flex flex-grow items-center p-1 py-2 sm:flex-grow-0'>
				{/* img */}
				<div className='flex flex-grow items-center mt-2'>
					<Image
						alt='Caspian logo'
						className='cursor-pointer'
						height={40}
						objectFit='contain'
						src={logoImg}
						width={150}
					/>
				</div>
				{/* search */}
				{/* right side */}
			</div>

			{/* bottom nav */}
			<div>
			</div>
		</header>
	);
};

export default Header;
