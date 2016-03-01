class MakeLocationImageUrlMandatory < ActiveRecord::Migration
  def change
    change_column_null :locationImages, :image_url, false
  end
end
