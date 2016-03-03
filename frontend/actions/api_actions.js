var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var ApiActions = {
  receiveAll: function(locations){

    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations
    });
  },

  createdLocation: function(location){
    AppDispatcher.dispatch({
      actionType: LocationConstants.NEW_LOCATION_RECEIVED,
      location: location
    });
  },

  receiveLocation: function(location){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATION_RECEIVED,
      location: location
    });
  },



};

module.exports = ApiActions;
