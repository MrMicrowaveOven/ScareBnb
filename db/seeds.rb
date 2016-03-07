# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create({email: "Benj@Zagorski.com", password: "vampire"})
user2 = User.create({email: "Dracula@IDvinkYourBlood.com", password: "vampire"})

san_francisco_art_institute = Location.create({
  lat: 37.803376, lng: -122.417167,
  image: "http://res.cloudinary.com/dazguin0y/image/upload/c_crop,h_400,w_600/v1457217022/dbcslceh8l5ttoi4qnid.jpg",
  title: "San Francisco Art Institute",
  description: "Rests upon grounds that once held the earthly remains of San Francisco's earliest residents.  Over the years, a variety of manifestations, including eerie flickering lights and power tools mysteriously turning on and off, were reported by students.  In response to the incidents that year, a séance was held in the tower with several prominent psychics. One saw a lost graveyard, and a historian later verified that an adjacent cemetery had indeed been demolished before the school was built.  It is very clear that the ghosts of the San Francisco Art Institute don't want people in their tower.",
  occupancy: 8,
  link: "http://www.hauntedbay.com/features/SFAI.shtml",
  full_address: "800 Chestnut Street, San Francisco, CA, United States",
  price: 75})

neptune_society_columbarium = Location.create({
  lat: 37.780615,
  lng: -122.45707700000003,
  image: "http://res.cloudinary.com/dazguin0y/image/upload/c_crop,h_400,w_600/v1457216600/r3jq9gdu7dp0iylockxg.jpg",
  title: "Neptune Society Columbarium",
  description: "Originally part of the Odd Fellows Cemetery. Room 410 at the Queen Anne Hotel is said to be haunted by the namesake of the Miss Mary Lake's School for Girls.",
  occupancy: 6,
  link: "http://www.sfgate.com/bayarea/slideshow/Most-haunted-spots-in-the-Bay-Area-51009/photo-3614683.php",
  full_address: "1 Loraine Ct, San Francisco, CA 94118",
  price: 80,
  })

  presidio_officers_club = Location.create({
    lat: 37.797547,
    lng: -122.4589239,
    image: "http://res.cloudinary.com/dazguin0y/image/upload/c_crop,h_400,w_600/v1457216204/gfnf8amnxjz5bim9hqjg.jpg",
    title: "Presidio Officers' Club",
    description: "Previously part of the Army's garrison, is currently used by the National Park Service as a Visitor Centre and is reportedly haunted. Visions of ghosts of Army men in old uniforms knocking loudly at the empty rooms are reported.",
    occupancy: 6,
    link: "http://www.sfweekly.com/exhibitionist/2014/10/29/haunted-san-francisco-the-presidio",
    full_address: "50 Moraga Ave, San Francisco, CA 94129",
    price: 60,
    })
  #
  # presidio_officers_club = Location.create({
  #   lat: ,
  #   lng: ,
  #   image: ,
  #   title: ,
  #   description: ,
  #   occupancy: ,
  #   full_address: ,
  #   price: ,
  #   })
