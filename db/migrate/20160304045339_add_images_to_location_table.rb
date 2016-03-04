class AddImagesToLocationTable < ActiveRecord::Migration
  def change
    add_column :locations, :images, :string
  end
end
