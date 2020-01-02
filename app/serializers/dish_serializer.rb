class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :total_orders

  has_many :dish_ingredients
  has_many :ingredients, through: :dish_ingredients
  
end
