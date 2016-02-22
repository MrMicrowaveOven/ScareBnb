# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
myBurr = Bench.create({lat: 38.72, lng: -122.32, description: "Burritos and shit."})
mySBurr = Bench.create({lat: 38.44, lng: -122.73, description: "Burritos and crap."})
