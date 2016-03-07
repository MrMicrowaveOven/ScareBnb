class RemoveExtraAddressColumns < ActiveRecord::Migration
  def change
    remove_column :locations, :address
    remove_column :locations, :city
    remove_column :locations, :state
    remove_column :locations, :zip_code
  end
end
