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


  alcatraz = Location.create({
    description:"Tales of spirits inhabiting the halls of Alcatraz abound; however, the most interesting story comes from a park ranger who claims he once heard banjo music coming from the old shower room and then found nothing when he went inside to go check it out. There was only one inmate ever given free license to play his banjo in the shower--infamous mobster Al Capone.",
    full_address:"Alcatraz Island, San Francisco, CA, United States",
    image:"http://res.cloudinary.com/dazguin0y/image/upload/v1458552987/t7ucheqoynlmrnxcbcao.jpg",
    lat:37.8269775,
    link:"",
    lng:-122.4229555,
    occupancy:1,
    price:35,
    title:"Alcatraz Island"
  })

  curran_theater = Location.create({
    description: "Guests looking into the mirror in the building's lobby have reported seeing the ghost of a ticket-taker—presumably the same ticket-taker who was murdered inside the theater in the 1920s.",
    full_address: "Curran Theatre, Geary Street, San Francisco, CA, United States",
    id: 8,
    image: "http://res.cloudinary.com/dazguin0y/image/upload/v1458553285/y6fnvrmmiwdzlviv7c6x.jpg",
    lat: 37.7868304,
    link: "",
    lng: -122.4106388,
    occupancy: 8,
    price: 35,
    title: "Curran Theater"
  })

  queenAnne = Location.create({
    description: "The Queen Anne Hotel boasts of its mixture of historic San Francisco charm and modern luxury. But what if some of that history is still around haunting the place? Guests staying on the fourth floor have told tales of encountering the ghost of Miss Mary Lake, the woman who used to run the girls school formerly located on the site.",
    full_address: "Queen Anne Hotel, Sutter Street, San Francisco, CA, United States",
    id: 7,
    image: "http://res.cloudinary.com/dazguin0y/image/upload/v1458553178/ilae5iqi1xc8vpg6k9ua.jpg",
    lat: 37.787231,
    link: "",
    lng: -122.426512,
    occupancy: 6,
    price: 35,
    title: "Queen Anne Hotel"
  })
  winchester_house = Location.create({
    description: "Often called the 'most haunted house in the world,' San Jose's Winchester Mystery House was constructed by Sarah Winchester, the widow of rifle tycoon William Winchester, in a dizzying nonstop push starting in 1884 and ending with her death in 1922. According to legend, following her husband's death from tuberculosis, the distraught Mrs. Winchester sought the counsel of a Boston-area psychic. The psychic informed the widow that her family was cursed by the spirits of everyone killed by her husband's rifles and, in order to appease said spirits, she should move out west and use her considerable fortune to build a giant temple in their honor. As long as construction of said temple never stopped, the spirits wouldn't take their revenge by killing her. She bought a plot of land a few miles outside of San Jose and spent the remainder of her life building. Visitors to the house tell tales of ghostly sighting and paranormal activities.",
    full_address: "525 S Winchester Blvd, San Jose, CA 95128, United States",
    id: 5,
    image: "http://res.cloudinary.com/dazguin0y/image/upload/v1458552822/bsd2ijzksghzpbmccaba.jpg",
    lat: 37.3183797,
    link: "",
    lng: -121.950978,
    occupancy: 7,
    price: 35,
    title: "Winchester House"
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
