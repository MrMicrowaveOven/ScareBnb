var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var LocationStore = new Store(AppDispatcher);

var _locations = {};

var lastLocation;
var selLocation;

LocationStore.all = function () {
  var keys = Object.keys(_locations);
  var locations = [];
  for (var i = 0; i < keys.length; i++) {
    locations.push(_locations[keys[i]]);
  }
  return locations;
};

LocationStore.find = function(id) {
  return _locations[id];
};

var resetLocations = function(locations){
  _locations = {};
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    _locations[location.id] = location;
  }
};

LocationStore.setSelectedLocation = function(location){
  // debugger;
  // if (this.selectedLocation() !== undefined){
  //   if (Map.markerIndex !== undefined) {
  //     debugger;
  //     Map.markerIndex[this.selectedLocation()].setAnimation(null);
  //   }
  // }

  selLocation = location;
  
  // debugger;
  // if (selLocation !== undefined && Map.markerIndex !== undefined) {
  //   Map.markerIndex[selLocation.id].setAnimation(google.maps.Animation.BOUNCE);
  // }
};

LocationStore.lastLocation = function(){
  return lastLocation;
};

// LocationStore.setLastLocation = function(location) {
//   lastLocation = this.s
// }

LocationStore.selectedLocation = function(){
  if(selLocation !== undefined) {return selLocation;}
  else if (Object.keys(_locations).length > 0) { return LocationStore.find(1); }
  else { return null; }
};

LocationStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LocationConstants.LOCATIONS_RECEIVED:
      var result = resetLocations(payload.locations);
      LocationStore.__emitChange();
      break;
    case LocationConstants.LOCATION_RECEIVED:
      LocationStore.setSelectedLocation(payload.location);
      LocationStore.__emitChange();
      break;
    // case LocationConstants.NEW_LOCATION_RECEIVED:

      // debugger;

      // break;
  }
};



 window.LocationStore = LocationStore;

module.exports = LocationStore;
