class DishIngredientSerializer < ActiveModel::Serializer
  attributes :id, :ingredient_id, :used_amount

  belongs_to :dish
  belongs_to :ingredient
end
