var AppDispatcher = require('../dispatcher/dispatcher');
var LocationConstants = require('../constants/location_constants');
var ApiActions = {
  receiveAll: function(locations){
    AppDispatcher.dispatch({
      actionType: LocationConstants.LOCATIONS_RECEIVED,
      locations: locations
    });
  }
};

module.exports = ApiActions;
