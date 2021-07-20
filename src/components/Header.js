'use strict';

import Image from 'next/image';
import logoImg from '../../public/logo.svg';
import {
	SearchIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return(
		<header>
			{/* top nav */}
			<div
				className='
					bg-caspian_blue-pitch
					flex
					flex-grow
					items-center
					p-1
					py-2
				'
			>
				{/* img */}
				<div
					className='
						flex
						items-center
						mt-2
						sm:flex-grow-0
					'
				>
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
				<div
					className='
						bg-caspian_gold-light
						cursor-pointer
						flex-grow
						h-10
						hidden
						hover:bg-caspian_gold-default
						items-center
						rounded-md
						sm:flex
					'
				>
					<input
						className='
							flex-grow
							flex-shrink
							focus:outline-none
							h-full
							p-2
							rounded-l-md
							w-6
						'
						type='text'
					/>
					<SearchIcon
						className='
							h-12
							p-4
						'
					/>
				</div>

				{/* right side */}
			</div>

			{/* bottom nav */}
			<div>
			</div>
		</header>
	);
};

export default Header;
