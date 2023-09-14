import CartItem from "./checkout/CartItem";

const Cart = () => {
	return (
		<div className="container checkout-page">
			<div className="row">
				<div className="col-8">
					<CartItem />
					<CartItem />
					<CartItem />
				</div>
				<div className="col-4">
					<ul class="list-group">
						<li class="pt-4 list-group-item d-flex justify-content-between align-items-center">
							<h5 className="sub-heading">Price Details</h5>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Total MRP
							<span class="flat-badge">Rs. 1599</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Discount On MRP
							<span class="flat-badge text-success">- Rs. 800</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Coupon Discount
							<span class="flat-badge text-primary">Apply Coupan</span>
						</li>
						<li class="list-group-item d-flex justify-content-between align-items-center">
							Convenience Fees
							<span class="flat-badge">R. 99</span>
						</li>
						<li class="list-group-item place-order">
							<div className="total-price d-flex justify-content-between align-items-center">
								Total Amount
								<span class="flat-badge">Rs. 898</span>
							</div>
							<button className="btn btn-primary btn-block w-100 mt-3">Place Order</button>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

export default Cart;
