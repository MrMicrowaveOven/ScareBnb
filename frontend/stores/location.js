var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var LocationStore = new Store(AppDispatcher);

var _locations = {};

var selLocation;

LocationStore.all = function () {
  var keys = Object.keys(_locations);
  var locations = [];
  for (var i = 0; i < keys.length; i++) {
    locations.push(_locations[keys[i]])
  }
  return locations;
};

LocationStore.find = function(id) {
  return _locations[id];
}

var resetLocations = function(locations){
  _locations = {};
  for (var i = 0; i < locations.length; i++) {
    var location = locations[i];
    _locations[location.id] = location;
  }
};

LocationStore.setSelectedLocation = function(location){
  selLocation = location;
}

LocationStore.selectedLocation = function(){
  return selLocation;
}

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
  }
};



 window.LocationStore = LocationStore;

module.exports = LocationStore;
