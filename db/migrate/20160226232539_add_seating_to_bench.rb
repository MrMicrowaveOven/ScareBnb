class AddSeatingToBench < ActiveRecord::Migration
  def change
    add_column :benches, :seating, :integer, null:false
  end
end
