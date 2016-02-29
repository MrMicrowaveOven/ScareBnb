class RenameOccupancy < ActiveRecord::Migration
  def change
    rename_column :locations, :seating, :occupancy
  end
end
