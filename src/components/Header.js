'use strict';

import Image from 'next/image';
import logoImg from '../../public/logo.svg';
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
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
						sm:bg-caspian_gold-light
						cursor-pointer
						flex-grow
						h-10
						sm:hover:bg-caspian_gold-default
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
							hidden
							p-2
							rounded-l-md
							sm:inline
							w-6
						'
						type='text'
					/>
					<SearchIcon
						className='
							h-12
							p-4
							hidden
							sm:inline
						'
					/>
				</div>

				{/* right side */}
				<div
					className='
						flex
						items-center
						mx-4
						sm:mx-6
						sm:space-x-6
						space-x-4
						text-white
						text-xs
						whitespace-nowrap
					'
				>
					{/* account */}
					<div className='link'>
						<p>Hello, New User</p>
						<p className='f-b'>Account & Lists</p>
					</div>

					{/* orders */}
					<div className='link'>
						<p>Returns</p>
						<p className='f-b'>& Orders</p>
					</div>

					{/* basket */}
					<div
						className='
							flex
							items-center
							link
							relative
						'
					>
						<span
							className='
								absolute
								bg-caspian_gold-light
								font-bold
								h-4
								md:right-10
								right-0
								rounded-full
								text-black
								text-center
								top-0
								w-4
							'
						>0</span>
						<ShoppingCartIcon className='h-10'/>
						<p
							className='
								f-b
								hidden
								md:inline
								mt-2
							'
						>Basket</p>
					</div>
				</div>
			</div>

			{/* bottom nav */}
			<div
				className='
					bg-caspian_blue-dark
					flex
					items-center
					p-2
					pl-6
					space-x-3
					text-white
					text-sm
				'
			>
				<p
					className='
						flex
						items-center
						link
					'
				>
					<MenuIcon
						className='
							h-6
							mr-1
						'
					/>
					All
				</p>
				<p className='link'>Prime Video</p>
				<p className='link'>Caspian Business</p>
				<p className='link'>Today's Deals</p>
				<p
					className='
						hidden
						link
						lg:inline-flex
					'
				>
					Electronics
				</p>
				<p
					className='
						hidden
						lg:inline-flex
						link
					'
				>
					Food & Grocery
				</p>
				<p
					className='
						hidden
						lg:inline-flex
						link
					'
				>
					Prime
				</p>
				<p
					className='
						hidden
						lg:inline-flex
						link
					'
				>
					Buy Again
				</p>
				<p
					className='
						hidden
						lg:inline-flex
						link
					'
				>
					Shopper Toolkit
				</p>
				<p
					className='
						hidden
						lg:inline-flex
						link
					'
				>
					Health & Personal Care
				</p>
			</div>
		</header>
	);
};

export default Header;
