'use strict';

import Image from 'next/image';
import logoImg from '../../public/logo.svg';

const Header = () => {
	return(
		<header>
			{/* top nav */}
			<div className='flex items-center bg-caspian_blue-pitch'>
				{/* img */}
				<div>
					<Image
						alt='Caspian logo'
						className='cursor-pointer'
						height={40}
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
