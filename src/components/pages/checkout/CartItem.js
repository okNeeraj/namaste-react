const CartItem = () => {
	return (
		<div className="product-list d-block">
			<div className="product-item d-flex gap-4">
				<div className="product-thumb" style={{ height: 100 }}>
					<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
				</div>
				<div className="product-body">
					<h3 className="product-title" style={{ height: 'auto' }}>Product Title</h3>
					<p className="product-desc">category</p>

					<div className="product-footer">
						<div className="product-price">₹ <span>Rs. 300</span></div>
						<div className="ratings">
							<span className="rating-rate">4.7</span>
							<span className="rating-icon material-symbols-outlined">
								star
							</span>
							<span className="rating-count ps-3 ms-3">345 Rating</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem;
