class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.float :unit_cost
      t.float :used_amount
      t.float :available_amount
      t.float :low_amount_alert
      t.boolean :alert

      t.timestamps
    end
  end
end
