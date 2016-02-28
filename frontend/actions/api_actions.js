var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var ApiActions = {
  receiveAll: function(locations){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations
    });
  }

  // createLocation: function(locationInfo){
  //   AppDispatcher.dispatch({
  //     actionType: LocationConstants.NEW_LOCATION_RECEIVED,
  //     location
  //   })
  // }

};

module.exports = ApiActions;
