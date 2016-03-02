
json.extract! location, :id, :description, :lat, :lng, :created_at, :updated_at, :occupancy, :address, :city, :state, :zip_code, :full_address, :title

json.images location.location_images
