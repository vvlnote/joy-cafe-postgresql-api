import React, { Component } from 'react';
import { fetchIngredients } from '../actions/types';
import { connect } from 'react-redux';
import IngredientOrderForm from '../components/ingredientOrderForm';
import { withRouter } from 'react-router-dom';

class InventoryContainer extends Component {

	constructor(){
		super();
		this.state = { showForm: false}
	}

	componentDidMount(){
		this.props.fetchIngredients();
		this.state = { showForm: false}
	}

	inventoryTableHeader() {
		let header = Object.keys(this.props.ingredients[0]);
		return header.map((key, index) => {
			return <th key={index} style={this.tableHeaderStyle}>{key.toUpperCase()}</th>
		})
	}

	handleOnClick(ingredient, event){
		console.log(ingredient);
		this.setState({
			showForm: true,
			ingredient: ingredient
		})
	}

	hideForm =() =>{
		this.setState({showForm: false});
	}

tableCellStyle = {
	border:'2px solid #ddd'
}
tableHeaderStyle = {
	textAlign: 'Center',
	backgroundColor: "#4CAF50",
	border: '2px solid #ddd',
	color: "white"
}


	inventoryTableData() {
		return this.props.ingredients.map((ingredient, i) => {
			let backgroundColor = (i % 2 === 0? 'white': 'lightgrey');
			backgroundColor = (ingredient.alert ? 'red': backgroundColor);
			return (

				<tr  key={i} style={{textAlign:'center', backgroundColor:`${backgroundColor}`}}>
					<td style={this.tableCellStyle}>{ingredient.id}</td>
					<td style={this.tableCellStyle}>{ingredient.name}</td>
					<td style={this.tableCellStyle}>{ingredient.alert === true ? 'true': 'false'}</td>
					<td style={this.tableCellStyle}>{ingredient.available_amount}</td>
					<td style={this.tableCellStyle}>{ingredient.low_amount_alert}</td>
					<td style={this.tableCellStyle}>${ingredient.unit_cost}</td>
					<td style={this.tableCellStyle}>{ingredient.used_amount}</td>
					<td style={this.tableCellStyle}><button id={ingredient.id} onClick={(event) => this.handleOnClick(ingredient, event)}>Order</button></td>
				</tr>

			)
		})
	}

	render() {

	
	    return (
	      <div>
	      	{console.log(this.state.showForm)}
	      	{this.state.showForm && <IngredientOrderForm ingredient={this.state.ingredient} hideForm={this.hideForm}/>}
	       	<h2 id='title'>Current Inventory</h2>
	       	<table id='ingredients'>
	       		<tbody>
	       			<tr style={this.tableCellStyle}>{this.inventoryTableHeader()}</tr>
	       			{this.inventoryTableData()}
	       		</tbody>
	       	</table>
      	  </div>
    	)
	}
}

const mapStateToProps = state => {
	return {
		ingredients : state.inventory
	}
}

export default connect(mapStateToProps, {fetchIngredients})(InventoryContainer)