class CreateHints < ActiveRecord::Migration[7.0]
  def change
    create_table :hints do |t|
      t.string :small
      t.string :medium
      t.string :big
      t.integer :boss_id

      t.timestamps
    end
  end
end
