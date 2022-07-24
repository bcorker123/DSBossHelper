class CreateBuilds < ActiveRecord::Migration[7.0]
  def change
    create_table :builds do |t|
      t.string :name
      t.string :image
      t.integer :character_id

      t.timestamps
    end
  end
end
