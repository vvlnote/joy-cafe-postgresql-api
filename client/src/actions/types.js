
// const BASE_URL = "http://localhost:3002";
const BASE_URL = "";

export function fetchDishes() {
	return (dispatch) => {	
	fetch(`${BASE_URL}/dishes`)
    .then(resp => resp.json())
    .then(dishes => restructuredDishesData(dishes))
    .then(restructedDishes => dispatch({
    	type: 'FETCH_DISHES', 
    	payload: restructedDishes
    }))
  }
}

export function fetchIngredients() {
	return (dispatch) => {
		fetch(`${BASE_URL}/ingredients`)
		.then(resp => resp.json())
		.then(ingredients => restructuredIngredientsData(ingredients))
		.then(restructuredIngredients => dispatch({
			type: 'FETCH_INGREDIENTS',
			payload: restructuredIngredients
		}))
	}
}

export function placeOrder(id, data) {
	console.log('C')
	return (dispatch) => {
		fetch(`${BASE_URL}/dishes/${id}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(dish => {
			dispatch({
					type: 'UPDATE_A_DISH',
					payload: dish
				})})
	}
}

export function prepareForCheckOut(tableId, receipts) {
	return (dispatch) => dispatch({
		type: 'PREPARE_FOR_CHECKOUT',
		payload: {tableId: tableId, receipts: receipts}})
}

// export function updateIngredientsInventoryOfOrder(ingrendientArr) {
// 	let counter = 0;
// 	// return (dispatch) => {
// 		ingrendientArr.forEach((ingredient) => {
// 			console.log(`, beginning of forEach loop`);
// 			fetch(`${BASE_URL}/ingredients/${ingredient.id}`, {
// 				method: 'PUT',
// 				headers: {'Content-Type': 'application/json'},
// 				body:JSON.stringify(ingredient)
// 			})
// 			.then(response => response.json())
// 			counter += 1;
// 			console.log(`updateIngredientsInventoryOfOrder, inside forEach, counter = ${counter}`);
// 		})
// 		console.log(`updateIngredientsInventoryOfOrder => counter = ${counter}, ingredients = ${ingrendientArr.length}`);
// 	// }
// }
export function updateIngredientIneventory(ingredient) {
	return (dispatch) => {
		fetch(`${BASE_URL}/ingredients/${ingredient.id}`, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body:JSON.stringify(ingredient)
		})
		.then(response => response.json())
		.then(ingredient => dispatch({
			type: 'UPDATE_A_INGREDIENT_INVENTORY',
			payload: {ingredient}
		}))
	}
}

export function orderPaid(order){
	debugger; 
	return (dispatch) => dispatch({
		type: 'CHECK_OUT',
		payload: {tableId: order.tableId, receipts: order.receipts}
	})
}

function restructuredDishesData(dishes) {
	let restucturedDishes = dishes.map((dish) => {
		debugger;
		let iArray = [];
		for (let i = 0; i < dish.dish_ingredients.length; i++){
			let ingredientObj = {
				id: dish.ingredients[i].id,
				name: dish.ingredients[i].name,
				usage: dish.dish_ingredients[i].used_amount
			}
			iArray.push(ingredientObj);
		}
		let obj = {};
		obj = {id: dish.id, name: dish.name, price: dish.price, total_orders: dish.total_orders, newly_orders: 0,
				ingredients: iArray, needUpdate: false}
		return obj;
	})
	return restucturedDishes;
}

function restructuredIngredientsData(ingredients) {
	let restructuredData = ingredients.map((ingredient) => {
		let obj = {id: ingredient.id, name: ingredient.name, alert: ingredient.alert, available_amount: ingredient.available_amount,
		           low_amount_alert: ingredient.low_amount_alert, 
		           unit_cost: ingredient.unit_cost, used_amount: ingredient.used_amount};
		return obj;
	})
	return restructuredData;
}