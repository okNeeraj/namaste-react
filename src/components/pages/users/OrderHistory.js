import React from 'react';
import OrderCard from './OrderCard';

class OrderHistory extends React.Component {
	constructor(props) {
		super(props);
		// console.log('Parent constructor')
	}

	componentDidMount() {
		// console.log('Parent componentDidMount')
	}

	render() {
		// console.log('Parent render')
		return (
			<>
				<h3 className="sub-heading">Order History</h3>
				<div className="order-history">
					<OrderCard title={'Iphone 14 Pro Max, 512gb'} />
					{/* <OrderCard title={'Samsung S23 Utra, 12gb RAM, 1TB ROM'} /> */}
				</div>
			</>
		)
	}
}

export default OrderHistory;
