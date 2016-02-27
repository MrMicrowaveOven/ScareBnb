var ApiActions = require('../actions/api_actions');


var ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: "/api/benches",
      method: 'GET',
      // dataType: "json",
      data: {"bounds": bounds},
      success: function(benchObjects){
        // debugger;
        ApiActions.receiveAll(benchObjects);
      }
    });
  },

  // createBench: function()
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
