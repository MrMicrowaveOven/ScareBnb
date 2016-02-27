class RenameScare < ActiveRecord::Migration
  def change
    rename_table :benches, :locations
  end
end
