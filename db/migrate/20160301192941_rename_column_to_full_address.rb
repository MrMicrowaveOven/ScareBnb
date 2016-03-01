class RenameColumnToFullAddress < ActiveRecord::Migration
  def change
    rename_column :locations, :fullAddress, :full_address
  end
end
