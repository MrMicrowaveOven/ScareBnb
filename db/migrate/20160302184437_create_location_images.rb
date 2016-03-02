class CreateLocationImages < ActiveRecord::Migration
  def change
    create_table :location_images do |t|

      t.timestamps null: false
    end
  end
end
