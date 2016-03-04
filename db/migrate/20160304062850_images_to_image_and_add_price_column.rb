class ImagesToImageAndAddPriceColumn < ActiveRecord::Migration
  def change
    rename_column :locations, :images, :image
    add_column :locations, :price, :integer, null:false
  end
end
