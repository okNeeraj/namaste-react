import React from 'react';
import OrderCard from './OrderCard';

class OrderHistory extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<h3 className="sub-heading">Order History</h3>
				<div className="order-history">
					<OrderCard />
					<OrderCard />
				</div>
			</>
		)
	}
}

export default OrderHistory;
