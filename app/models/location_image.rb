# == Schema Information
#
# Table name: location_images
#
#  id          :integer          not null, primary key
#  location_id :integer          not null
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class LocationImage < ActiveRecord::Base
  validates :location_id, :image_url, presence: true

  belongs_to :location


end
