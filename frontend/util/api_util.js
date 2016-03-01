var ApiActions = require('../actions/api_actions');


var ApiUtil = {
  fetchLocations: function(bounds) {
    $.ajax({
      url: "/api/locations",
      method: 'GET',
      // dataType: "json",
      data: {"bounds": bounds},
      success: function(locationObjects){
        ApiActions.receiveAll(locationObjects);
      }
    });
  },

  showLocation: function(id) {
    $.ajax({
      url: "/api/locations/" + id,
      method: 'GET',
      success: function(location){
        ApiActions.receiveLocation(location);
      }
    });
  },

  createLocation: function(locationParams) {
    $.ajax({
      url: "/api/locations",
      method: 'POST',
      data: {"location": locationParams},
      success: function(locationInfo){

        ApiActions.createLocation(locationInfo);
      },
      failure: function(errorMessage){

      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
