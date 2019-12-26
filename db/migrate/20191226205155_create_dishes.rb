class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.float :price
      t.integer :total_orders

      t.timestamps
    end
  end
end
