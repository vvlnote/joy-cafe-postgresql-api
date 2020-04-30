# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

dishes = Dish.create([{name: 'Shredded Cabbage', price: 14.00, total_orders: 0}, 
	{name: 'Organic Cauliflower', price: 18, total_orders: 0},
	{name: 'Hot Clay Pepper Beef', price: 15.75, total_orders: 0}, 
	{name: 'Stir Fry Lotus Root', price: 14.95, total_orders: 0},
	{name: 'Mapo Tofu', price: 15.00, total_orders: 0}, 
	{name: 'Miced Pork with Pickled Long Been', price: 18.25, total_orders: 0},
	{name: 'Stir Fry Pork with Green Bell Pepper', price: 13.29, total_orders: 0 }, 
	{name: 'Fried Spicy Chicken', price: 18.00, total_orders: 0},
	{name: 'Stir Fry Spicy Shrimp', price: 19.50, total_orders: 0}, 
	{name: 'Rice', price: 2.00, total_orders: 0} ])



ingredients = Ingredient.create([
	{name: 'Cabbage', unit_cost: 1.29, used_amount: 0.00, available_amount: 25.00, low_amount_alert: 5.00, alert: false},
	{name: 'Cauliflower', unit_cost: 2.55, used_amount: 0.00, available_amount: 30.00, low_amount_alert: 8.00, alert: false},
	{name: 'Beef', unit_cost: 3.45, used_amount: 0.00, available_amount: 25.00, low_amount_alert: 5.00, alert: false},
	{name: 'Lotus Root', unit_cost: 2.35, used_amount: 0.00, available_amount: 40.00, low_amount_alert: 15.00, alert: false},
	{name: 'Pork', unit_cost: 2.85, used_amount: 0.00, available_amount: 35.00, low_amount_alert: 5.00, alert: false},
	{name: 'Tofu', unit_cost: 1.25, used_amount: 0.00, available_amount: 15.00, low_amount_alert: 5.00, alert: false},
	{name: 'Pickled Long Been', unit_cost: 1.35, used_amount: 0.00, available_amount: 25.00, low_amount_alert: 5.00, alert: false},
	{name: 'Green Bell Pepper', unit_cost: 0.39, used_amount: 0.00, available_amount: 15.00, low_amount_alert: 3.00, alert: false},
	{name: 'Chicken', unit_cost: 2.99, used_amount: 0.00, available_amount: 35.00, low_amount_alert: 10.00, alert: false},
	{name: 'Shrimp', unit_cost: 3.99, used_amount: 0.00, available_amount: 30.00, low_amount_alert: 10.00, alert: false},
	{name: 'Rice', unit_cost: 0.75, used_amount: 0.00, available_amount: 100.00, low_amount_alert: 20.00, alert: false}])


dishIngredients = DishIngredient.create([
	{dish_id: 1, ingredient_id: 1, used_amount: 1.75},
	{dish_id: 1, ingredient_id: 5, used_amount: 0.30},
	{dish_id: 2, ingredient_id: 2, used_amount: 1.89},
	{dish_id: 2, ingredient_id: 5, used_amount: 0.50},
	{dish_id: 3, ingredient_id: 3, used_amount: 2.00},
	{dish_id: 3, ingredient_id: 8, used_amount: 1.00},
	{dish_id: 4, ingredient_id: 4, used_amount: 2.25},
	{dish_id: 4, ingredient_id: 5, used_amount: 0.50},
	{dish_id: 4, ingredient_id: 8, used_amount: 0.50},
	{dish_id: 5, ingredient_id: 5, used_amount: 1.25},
	{dish_id: 5, ingredient_id: 6, used_amount: 1.00},
	{dish_id: 6, ingredient_id: 7, used_amount: 2.25},
	{dish_id: 6, ingredient_id: 5, used_amount: 1.25},
	{dish_id: 7, ingredient_id: 5, used_amount: 1.75},
	{dish_id: 7, ingredient_id: 8, used_amount: 1.25},
	{dish_id: 8, ingredient_id: 9, used_amount: 2.25},
	{dish_id: 9, ingredient_id: 10, used_amount: 2.00},
	{dish_id: 9, ingredient_id: 8, used_amount: 0.75},
	{dish_id: 10, ingredient_id: 11, used_amount: 1}])