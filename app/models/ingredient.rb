class Ingredient < ApplicationRecord
	has_many :dish_ingredients
	has_many :dishes, through: :dish_ingredients

	def update_usage(amount)
		self.used_amount = self.used_amount + amount
		self.available_amount = self.available_amount - amount
		if self.available_amount <= self.low_amount_alert
			self.alert = true
		else
			self.alert = false
		end
		self.save
		
	end
end
