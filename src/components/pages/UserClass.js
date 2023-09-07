import React from "react";
import OrderHistory from "./users/OrderHistory";
import GithubProfile, { LifeCycle } from "./users/GithubProfile";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			githubProfile: '',
		}
		// console.log('Grand Parent constructor')
	}

	async componentDidMount() {
		const response = await fetch('https://api.github.com/users/okneeraj');
		const data = await response.json();
		this.setState({
			githubProfile: data,
		});

		/** Set Timer when component mounted */
		// this.timer = setInterval(() => {
		// 	console.log('Namaste React OP')
		// }, 1000);
		// console.log('Grand Parent componentDidMount')
	}

	componentDidUpdate() {
		// console.log('Grand Parent componentDidUpdate')
	}

	componentWillUnmount() {
		/** Clear Timer when component Unmounted (Leave the page)  */
		// clearInterval(this.timer)
		// console.log('UserClass componentWillUnmount')
	}

	render() {
		// console.log('Grand Parent render')
		return (
			<div className="row user-profile">
				<div className="col-3">
					<GithubProfile data={this.state.githubProfile} />
					<ul className="list-group border-0 px-0 mb-3">
						<li className="list-group-item border-0 px-0">
							<h6>Orders</h6>
						</li>
						<li className="list-group-item border-0 px-0">
							<a href="#" className="active">Order History</a>
						</li>
						<li className="list-group-item border-0 px-0">
							<a href="#">Subscription</a>
						</li>
					</ul>

					<ul className="list-group border-0 px-0 mb-3">
						<li className="list-group-item border-0 px-0">
							<h6>Account Setting</h6>
						</li>
						<li className="list-group-item border-0 px-0">
							<a href="#">Login & Security</a>
						</li>

						<li className="list-group-item border-0 px-0">
							<a href="#">Your Addres</a>
						</li>
						<li className="list-group-item border-0 px-0">
							<a href="#">Recent View Products</a>
						</li>
						<li className="list-group-item border-0 px-0">
							<a href="#">Manage Your Seller Account</a>
						</li>
						<li className="list-group-item border-0 px-0">
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
