class DishIngredientsController < ApplicationController
  before_action :set_dish
  # before_action :set_dish_ingredient, only: [:show, :update, :destroy]

  # GET /dish_ingredients
  def index
    @ingredients = @dish.ingredients

    render json: @ingredients
  end

  # GET /dish/1/ingredients
  def show
    render json: @dish_ingredient
  end

  # POST /dish_ingredients
  def create
    @dish_ingredient = DishIngredient.new(dish_ingredient_params)

    if @dish_ingredient.save
      render json: @dish_ingredient, status: :created, location: @dish_ingredient
    else
      render json: @dish_ingredient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dish_ingredients/1
  def update
    if @dish_ingredient.update(dish_ingredient_params)
      render json: @dish_ingredient
    else
      render json: @dish_ingredient.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dish_ingredients/1
  def destroy
    @dish_ingredient.destroy
  end

  private

    def set_dish
      @dish = Dish.find(params[:dish_id])
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_dish_ingredient
      @dish_ingredient = DishIngredient.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dish_ingredient_params
      params.require(:dish_ingredient).permit(:dish_id, :ingredient_id, :used_amount)
    end
end
