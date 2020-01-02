class Ingredient < ApplicationRecord
	has_many :dish_ingredients
	has_many :dishes, through: :dish_ingredients

	def update_usage(amount)
		self.used_amount = self.used_amount + amount
		self.available_amount = self.available_amount - amount
		if self.available_amount <= 0 || self.available_amount <= self.low_amount_alert
			self.alert = true
			self.save
		else
			self.alert = false
			self.save
		end
		
	end
end
