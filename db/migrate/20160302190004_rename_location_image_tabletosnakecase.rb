class RenameLocationImageTabletosnakecase < ActiveRecord::Migration
  def change
    rename_table :locationImages, :location_images
  end
end
