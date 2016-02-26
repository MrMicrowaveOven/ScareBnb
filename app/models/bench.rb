# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # {
    #    "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #    "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    rightb = bounds["northEast"]["lng"].to_f
    leftb = bounds["southWest"]["lng"].to_f
    topb = bounds["northEast"]["lat"].to_f
    bottomb = bounds["southWest"]["lat"].to_f
    benches_in_bound = []

    benches = Bench.all
    benches.each do |bench|
      if bench.lat < topb && bench.lat > bottomb && bench.lng > leftb && bench.lng < rightb
        benches_in_bound << bench
      end
    end

    return benches_in_bound
  end

end
