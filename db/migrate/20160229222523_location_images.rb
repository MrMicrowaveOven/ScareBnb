class LocationImages < ActiveRecord::Migration
  def change
    create_table :locationImages do |t|
      t.integer :location_id, null: false
      t.string :image_url
      t.timestamps null: false
    end
    add_index :locationImages, :location_id
  end
end
