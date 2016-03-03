# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create({email: "Benj", password: "violet"})

loc1 = Location.create({
  lat: 37.803376, lng: -122.417167,
  title: "San Francisco Art Institute",
  description: "Built on the site of a cemetery.  Said to be haunted.",
  occupancy: 8, address: "800 Chestnut St.", city: "San Francisco",
  state: "CA", zip_code: "94133",
  full_address: "San Francisco Art Institute, Chestnut Street, San Francisco, CA, United States"})
loc2 = Location.create({title: "fdsofih", lat: 37.5, lng: -122.44, description: "Burritos and crap.", occupancy: 5, address: "jio", city: "jiof", state: "CA", zip_code: "90623", full_address: "address_here"})
# loc4 = Location.create({title: "2", lat: 37.6, lng: -122.44, description: "Burritos and things.", occupancy: 5, address: "jio", city: "jiof", state: "CA", zip_code: "90623", full_address: "address_here"})
# loc3 = Location.create({title: "3", lat: 37.7, lng: -122.43, description: "Burritos and stuff.", occupancy: 3, address: "jio", city: "jiof", state: "CA", zip_code: "90623", full_address: "address_here"})
# loc5 = Location.create({title: "4", lat: 37.8, lng: -122.43, description: "Burritos and junk.", occupancy: 3, address: "jio", city: "jiof", state: "CA", zip_code: "90623", full_address: "address_here"})

limage1 = LocationImage.create({
  location_id: 1,
  image_url: "http://foundsf.org/images/d/d2/Sfai-tower-and-roof-0307.jpg"
})

limage2 = LocationImage.create({
  location_id: 1,
  image_url: "http://foundsf.org/images/9/9f/Art1%24the-making-of-a-fresco.jpg"
})
