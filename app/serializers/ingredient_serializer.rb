class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :unit_cost, :used_amount, :available_amount, :low_amount_alert, :alert

  has_many :dish_ingredients
  has_many :dishes, through: :dish_ingredients
end
