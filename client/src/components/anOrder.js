import React, { Component } from 'react';


class AnOrder extends Component {

	onHandlePayment = () => {
		this.props.orderPaid(this.props.order);

	}
	render() {
		let totalPrice = 0;
		let orderDetail = this.props.order.receipts.map((r, index) => {
			totalPrice += (r.price * r.orders); 
			return(<li key={index}>  {r.dishName} - {r.orders} orders - ${r.price}/order </li>)
		})

		return (
			<div>
			<h3>Order Of {this.props.order.tableId}</h3>
			{orderDetail}
			<hr/>
			<span>Total: ${totalPrice.toFixed(2)}</span>
			<button onClick={this.onHandlePayment}>Pay</button>
			</div>
		)
	}

}

export default AnOrder;