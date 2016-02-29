var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var FilterStore = new Store(AppDispatcher);

var locationFilter = {
  bounds: "",
  occupancy: "",
  minPrice: "",
  maxPrice: ""
};

var resetLocations = function(locations){
  _locations = locations;
};

FilterStore.__onDispatch = function (payload) {
 switch(payload.actionType) {
   case LocationConstants.LOCATIONS_RECEIVED:
     var result = resetLocations(payload.locations);
       LocationStore.__emitChange();
       break;
  }
};

window.FilterStore = FilterStore;

module.exports = FilterStore;
