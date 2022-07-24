class RenameBuildToBuildIdInCharacters < ActiveRecord::Migration[7.0]
  def change
    rename_column :characters, :build, :build_id
  end
end
