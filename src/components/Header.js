'use strict';

import Image from 'next/image';
import logoImg from '../../public/logo.png';

const Header = () => {
	return(
		<header>
			{/* top nav */}
			<div>
				{/* img */}
				<div>
					<Image
						alt='Caspian logo'
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
