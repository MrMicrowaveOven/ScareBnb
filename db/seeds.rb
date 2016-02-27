# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
myBurr = Location.create({lat: 37.7, lng: -122.43, description: "Burritos and shit.", seating: 3})
mySBurr = Location.create({lat: 37.6, lng: -122.44, description: "Burritos and crap.", seating: 5})
