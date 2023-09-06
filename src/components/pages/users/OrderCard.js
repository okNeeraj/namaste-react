import React from "react";

class OrderCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card mb-3 p-3">
				<div className="row g-0">
					<div className="col-md-2">
						<div className="product-thumb" style={{ height: '115px' }}>
							<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="img-fluid rounded-start" alt="Product title" />
						</div>
					</div>
					<div className="col-md-10">
						<div className="card-body">
							<h5 className="card-title">Product Title</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Order at 06 September 2023</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default OrderCard;
