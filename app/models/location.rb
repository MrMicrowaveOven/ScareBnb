# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  description  :string           not null
#  lat          :float            not null
#  lng          :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  occupancy    :integer          not null
#  full_address :string           not null
#  title        :string           not null
#  image        :string           not null
#  price        :integer          not null
#  link         :string
#

class Location < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  # has_many :location_images


  def self.in_bounds(bounds)
    # {
    #    "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #    "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    rightb = bounds["northEast"]["lng"].to_f
    leftb = bounds["southWest"]["lng"].to_f
    topb = bounds["northEast"]["lat"].to_f
    bottomb = bounds["southWest"]["lat"].to_f
    locations_in_bound = []

    locations = Location.all
    locations.each do |location|
      if location.lat < topb && location.lat > bottomb && location.lng > leftb && location.lng < rightb
        locations_in_bound << location
      end
    end

    return locations_in_bound
  end



end
