class Dish < ApplicationRecord
	has_many :dish_ingredients
	has_many :ingredients, through: :dish_ingredients

	def update_dish_order_count(orders)
		self.total_orders = self.total_orders + orders
		self.save
	end
end
