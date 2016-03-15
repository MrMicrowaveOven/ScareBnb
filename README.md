# SCAREBNB

ScareBnb is a web application inspired by AirBnb, built using Ruby on Rails and React.js.  ScareBnb allows users to:
* Create an account
* Log in / Log out
* Search available locations using the Maps api
* Create locations, complete with map coordinates and image

# Implementation Timeline

## Phase 1: Backend setup and User Authentication (0.5 days)
### Objective: Functioning rails project with Authentication:
* Create new project
* Create User model (Email, password_digest, session_token)
* Authentication
* User signup/signin pages
* Blank landing page after signin

## Phase 2: Locations Model, API, and basic APIUtil (1.5 days)
### Objective: Locations can be found through the Search function:
* Create Location model (description, location, price, photo)
* Seed the database with test locations
* LocationsController
* jBuilder views for locations
* Setup Webpack & Flux scaffold
* Setup APIUtil to interact with the API
* Test out API interaction in the console

## Phase 3: Flux Architecture and Router (1.5 days)
### Objective: Locations can be created, read, edited, and destroyed with the user interface:
* Setup the flux loop with skeleton files
* Setup React Router
~Implement each Location component, building out the flux loop as needed
* LocationsIndex
* LocationIndexItem
* LocationForm
* Save Location to the DB when submitted.

## Phase 4: Start Styling (0.5 days)
### Objective: Existing pages (including signup/signin) will look good:
* Create a basic style guide
* Position elements on the page
* Add basic colors & styles

## Phase 5: User Locations (1.5 days)
### Objective: Users can list their space as a location:
* Construct form for creating location
* Require Location, Description, AboutThisHaunt, Price, and Photo
* Place on Map?
* Add location to database and list on site

## Phase 6: Styling Cleanup and Seeding (1 day)
### Objective: Make it look like a site from 2014+:
* Send to testers, get feedback
* Refactor classes and class
* Add cute shit

Bonus Features
* Search locations with text input
* Allow users to see requests for their location
* Set reminders on bookings/requests
