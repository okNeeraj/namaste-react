import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<Link to={'/'}>
					<img src='https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg' />
				</Link>
			</div>
			<div className='nav-list'>
				<Link to={'/best-seller'} className='nav-link'>Best Seller</Link>
				<Link to={'/electronics'} className='nav-link'>Electronics</Link>
				<Link to={'/'} className='nav-link'>Men's Fashion</Link>
				<Link to={'/'} className='nav-link'>Women's Fashion</Link>
				<Link to={'/'} className='nav-link'>Sports</Link>
			</div>
			<div className='nav-list'>
				<Link to={'/profile'} className='nav-link d-flex gap-2 me-2'>
					<span className="material-symbols-outlined">
						account_circle
					</span>
					<span>Neeraj</span>
				</Link>

				<a href='#' className='nav-link me-3'>
					<span className="material-symbols-outlined">
						shopping_cart
					</span>
				</a>
			</div>
		</div>
	)
}

export default Header;
