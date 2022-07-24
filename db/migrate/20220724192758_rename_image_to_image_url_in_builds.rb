class RenameImageToImageUrlInBuilds < ActiveRecord::Migration[7.0]
  def change
    rename_column :builds, :image, :image_url
  end
end
