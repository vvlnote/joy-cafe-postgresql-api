class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.float :price
      t.string :total_orders
      t.string :integer

      t.timestamps
    end
  end
end
