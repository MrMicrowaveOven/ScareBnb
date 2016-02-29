# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
loc1 = Location.create({lat: 37.4, lng: -122.46, description: "Burritos and shit.", occupancy: 3})
loc2 = Location.create({lat: 37.5, lng: -122.44, description: "Burritos and crap.", occupancy: 5})
loc4 = Location.create({lat: 37.6, lng: -122.44, description: "Burritos and things.", occupancy: 5})
loc3 = Location.create({lat: 37.7, lng: -122.43, description: "Burritos and stuff.", occupancy: 3})
loc5 = Location.create({lat: 37.8, lng: -122.43, description: "Burritos and junk.", occupancy: 3})
