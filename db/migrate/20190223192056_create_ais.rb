class CreateAis < ActiveRecord::Migration[5.2]
  def change
    create_table :ais do |t|
      t.string :name
      t.boolean :private, default: true
      t.text :code
      t.integer :user_id 
      t.index :user_id

      t.timestamps
    end

    add_foreign_key :ais, :users
  end
end
