class AddAddressColumn < ActiveRecord::Migration
  def change
    add_column :locations, :address, :string, null:false
  end
end
