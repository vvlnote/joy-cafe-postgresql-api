const initialState = {
	loading: false,
	orders: [],
	batch: [],
	inventory: [],
	dishes:[],
	readyToPrepare: false,
	alert: false,
}

export default function cafeReducer(state = initialState, action ) {
	console.log(action);
	switch (action.type) {
		case 'FETCH_INGREDIENTS':
			console.log('cafeReducer: fetch_ingredients', action);
			return {...state, inventory: action.payload}
		case 'FETCH_DISHES':
			console.log(action.payload);
			return {...state, dishes: action.payload}
		case 'UPDATE_A_DISH':
			console.log(action.payload);
			let dishes = [...state.dishes];
			let dIndex = dishes.findIndex((d) => d.id === action.payload.id);
			dishes[dIndex] = action.payload;
			return { ...state, dishes: dishes};
		
		case "PREPARE_FOR_CHECKOUT":
			let orders = [...state.orders];
			if (orders.length > 0) {
				let oIndex = orders.findIndex((o) => o.tableId === action.payload.tableId);
				if (oIndex >= 0 ) {
					orders[oIndex] = action.payload;
				} else {
					orders.push(action.payload);
				}
			} else {
				orders.push(action.payload);
			}
			return { ...state, orders: orders};

		case 'CHECK_OUT':
			orders = [...state.orders];
			let remainingOrders = orders.filter((o) => o.tableId !== action.payload.tableId);
			return { ...state, orders: remainingOrders}

		case 'UPDATE_A_INGREDIENT_INVENTORY':
			let inventory = [...state.inventory];
			let iIndex = inventory.findIndex((item) => item.id === action.payload.id);
			inventory[iIndex] = action.payload;
			let alert = state.alert;
			if (action.payload.alert){ 
				alert = true;
			}
			return {...state, inventory, alert: alert};

		default: 
			return state;

	}
}