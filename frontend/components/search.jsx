var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function() {
    return(
      <div>
        <Map/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
