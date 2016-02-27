var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var BenchForm = React.createClass({
  getInitialState: function() {
    return {
      lat: 38,
      lng: -122,
      description: null,
      seating: 1
    };
  },

  render: function() {
    return {

        <div>
          <form class="" action="index.html" method="post">
            <input type="button" name="name" value="">
          </form>
        </div>
      )
    };
  },

  onChange: function() {

  },

  componentDidMount: function() {

  }

});

module.exports = BenchForm;
