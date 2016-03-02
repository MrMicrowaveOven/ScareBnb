class Remove2ndLocationImageTable < ActiveRecord::Migration
  def change
    drop_table :location_images
  end
end
