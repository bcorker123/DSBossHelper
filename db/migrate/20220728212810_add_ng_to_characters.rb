class AddNgToCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :characters, :ng, :integer
  end
end
