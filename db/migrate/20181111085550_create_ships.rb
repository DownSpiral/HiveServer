class CreateShips < ActiveRecord::Migration[5.2]
  def change
    create_table :ships do |t|
      t.string :type
      t.string :status
      t.datetime :done_at

      t.timestamps
    end
  end
end
