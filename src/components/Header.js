import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import UserContext from '../data/UserContext';

const Header = () => {
	const { userId, firstName, userName, mobileNumber, emailId } = useContext(UserContext);
	const cartItems = useSelector((store) => store.cart.items);

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
					<span>{firstName}</span>
				</Link>

				<Link to={'/checkout'} className='nav-link me-3 position-relative'>
					<span className="material-symbols-outlined">
						shopping_cart
					</span>
					<span className='cart-count'>{cartItems.length}</span>
				</Link>
			</div>
		</div>
	)
}

export default Header;
