json.array! @locations do |location|
  json.partial! "api/locations/locations", location: location
end
