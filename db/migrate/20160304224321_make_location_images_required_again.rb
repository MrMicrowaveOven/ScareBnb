class MakeLocationImagesRequiredAgain < ActiveRecord::Migration
  def change
    change_column_null :locations, :image, false
  end
end
