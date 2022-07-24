class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :build
      t.integer :user_id
      t.integer :boss_id

      t.timestamps
    end
  end
end
