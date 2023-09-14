import { BASE_URL } from "../../utils/constants";
import CartItem from "./checkout/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return cartItems.length === 0 ? <EmptyCart /> : (
		<div className="container checkout-page">
			<div className="row">
				<div className="col-8">
					{
						cartItems.map((item, index) => {
							return <CartItem key={item.id} item={item} />
						})
					}
				</div>
				<div className="col-4">
					<ul className="list-group">
						<li className="pt-4 list-group-item d-flex justify-content-between align-items-center">
							<h5 className="sub-heading">Price Details</h5>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Total MRP
							<span className="flat-badge">Rs. 1599</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Discount On MRP
							<span className="flat-badge text-success">- Rs. 800</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Coupon Discount
							<span className="flat-badge text-primary">Apply Coupan</span>
						</li>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							Convenience Fees
							<span className="flat-badge">R. 99</span>
						</li>
						<li className="list-group-item place-order">
							<div className="total-price d-flex justify-content-between align-items-center">
								Total Amount
								<span className="flat-badge">Rs. 898</span>
							</div>
							<button className="btn btn-primary btn-block w-100 mt-3">Place Order</button>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

const EmptyCart = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-8">
					<div className="card d-block p-5 text-center shadow-none">
						<img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png" style={{ width: 300 }} />
						<h3 className="cart-title mb-1">Your cart is empty</h3>
						<p>Look like you haven't added anything to your cart yet.</p>
						<Link to={BASE_URL} className="btn btn-primary px-5 mt-4">Shop Now</Link>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Cart;
