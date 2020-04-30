import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ATable extends Component {

	
	aTableStyle = { 
		postion: 'relative',
		left: 'auto',
		display: 'inline-block',
		border: 'double',
		height: '80px',
		width: '150px',
		textAlign: 'center'
	}


	render() {
		return (
			<div style={this.aTableStyle}>
				<h3>Table {this.props.name}</h3>
				<Link to={`/Orders/table${this.props.name}`}>
					<button>Order</button>
				</Link>
			</div>

			)
	}
}

export default ATable;