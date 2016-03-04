class MakeLocationImagesRequired < ActiveRecord::Migration
  def change
    change_column_null :locations, :image, true
  end
end
