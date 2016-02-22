var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
    url: "/api/benches",
    method: 'GET',
      success: function(benchObjects){
        ApiActions.receiveAll(benchObjects);
      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
