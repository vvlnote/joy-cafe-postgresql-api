import React, { Component } from 'react';
import { fetchIngredients } from '../actions/types';
import { connect } from 'react-redux';
import IngredientOrderForm from '../components/ingredientOrderForm';

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
			return <th key={index}>{key.toUpperCase()}</th>
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

	inventoryTableData() {
		return this.props.ingredients.map((ingredient, i) => {
			let backgroudColor = (ingredient.alert ? 'red': '#CCFCFD');
			return (

				<tr key={i} style={{textAlign:'center', backgroundColor:`${backgroudColor}`}}>
					<td>{ingredient.id}</td>
					<td>{ingredient.name}</td>
					<td>{ingredient.alert === true ? 'true': 'false'}</td>
					<td>{ingredient.available_amount}</td>
					<td>{ingredient.low_amount_alert}</td>
					<td>${ingredient.unit_cost}</td>
					<td>{ingredient.used_amount}</td>
					<td><button id={ingredient.id} onClick={(event) => this.handleOnClick(ingredient, event)}>Order</button></td>
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
	       			<tr>{this.inventoryTableHeader()}</tr>
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