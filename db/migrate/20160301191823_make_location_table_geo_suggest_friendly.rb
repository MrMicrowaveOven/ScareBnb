class MakeLocationTableGeoSuggestFriendly < ActiveRecord::Migration
  def change
    add_column :locations, :fullAddress, :string, null: false
    change_column_null :locations, :address, true
    change_column_null :locations, :city, true
    change_column_null :locations, :state, true
    change_column_null :locations, :zip_code, true
  end
end
