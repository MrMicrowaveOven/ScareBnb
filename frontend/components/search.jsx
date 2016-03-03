var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');
var Show = require('./show');

// {this.props.children}
var Search = React.createClass({
  render: function() {
    return(
      <div className="search_container">
        <Map/>
        <Index/>
        <Show/>
      </div>
    );
  }
});

module.exports = Search;
