class DeleteCharacterIdFromBuilds < ActiveRecord::Migration[7.0]
  def change
    remove_column :builds, :character_id, :integer
  end
end
