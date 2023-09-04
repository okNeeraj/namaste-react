import React from 'react'

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img src='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg' />
			</div>
			<div className='nav-list'>
				<a href='/best-seller' className='nav-link'>Best Seller</a>
				<a href='#' className='nav-link'>Electronics</a>
				<a href='#' className='nav-link'>Men's Fashion</a>
				<a href='#' className='nav-link'>Women's Fashion</a>
				<a href='#' className='nav-link'>Sports</a>
			</div>
			<div className='nav-list'>
				<a href='#' className='nav-link'>
					<span className="material-symbols-outlined">
						shopping_cart
					</span>
				</a>
			</div>
		</div>
	)
}

export default Header;
