class AddAddressColumn < ActiveRecord::Migration
  def change
    add_column :locations, :address, :string, null:false
    add_column :locations, :city, :string, null:false
    add_column :locations, :state, :string, null:false
    add_column :locations, :zip_code, :string, null:false
  end
end
