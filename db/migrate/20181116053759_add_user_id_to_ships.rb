class AddUserIdToShips < ActiveRecord::Migration[5.2]
  def change
    add_column :ships, :user_id, :bigint, null: false
  end
end
