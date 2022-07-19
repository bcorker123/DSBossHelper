class CreateBosses < ActiveRecord::Migration[7.0]
  def change
    create_table :bosses do |t|
      t.string :name
      t.integer :health
      t.string :image_url
      t.string :location

      t.timestamps
    end
  end
end
