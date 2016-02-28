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

  createLocation: function(locationParams) {
    $.ajax({
      url: "/api/locations",
      method: 'POST',
      data: {"locationParams": locationParams},
      success: function(locationInfo){
        ApiActions.receiveAll(locationInfo);
      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
