var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var LocationStore = new Store(AppDispatcher);

var _locations = [];

LocationStore.all = function () {
  return _locations.slice();
};

var resetLocations = function(locations){
  _locations = locations;
};

LocationStore.__onDispatch = function (payload) {
 switch(payload.actionType) {
   case LocationConstants.LOCATIONS_RECEIVED:
     var result = resetLocations(payload.locations);
       LocationStore.__emitChange();
       break;
  }
};



 window.LocationStore = LocationStore;

module.exports = LocationStore;
