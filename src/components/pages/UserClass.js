import React from "react";
import OrderHistory from "./users/OrderHistory";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state
	}

	render() {
		return (
			<div className="row user-profile">
				<div className="col-3">
					<div className="user-details">
						<h1 className="user-name">Neeraj Singh</h1>
						<small>okneeraj@gmail.com</small>
					</div>
					<ul class="list-group border-0 px-0 mb-3">
						<li class="list-group-item border-0 px-0">
							<h6>Orders</h6>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#" className="active">Order History</a>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#">Subscription</a>
						</li>
					</ul>

					<ul class="list-group border-0 px-0 mb-3">
						<li class="list-group-item border-0 px-0">
							<h6>Account Setting</h6>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#">Login & Security</a>
						</li>

						<li class="list-group-item border-0 px-0">
							<a href="#">Your Addres</a>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#">Recent View Products</a>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#">Manage Your Seller Account</a>
						</li>
						<li class="list-group-item border-0 px-0">
							<a href="#">Subscription</a>
						</li>
					</ul>
				</div>
				<div className="col-9">
					<OrderHistory />
				</div>

			</div>
		)
	}
}

export default UserClass;
