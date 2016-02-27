var ApiActions = require('../actions/api_actions');


var ApiUtil = {
  fetchLocations: function(bounds) {
    $.ajax({
      url: "/api/locations",
      method: 'GET',
      // dataType: "json",
      data: {"bounds": bounds},
      success: function(locationObjects){
        // debugger;
        ApiActions.receiveAll(locationObjects);
      }
    });
  },

  // createLocation: function()
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
