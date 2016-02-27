var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function() { return {locations: LocationStore.all()}; },

  render: function() {
    var self = this;
    var locations = self.state.locations.map(function(location) {
      return (<li key={location.id}>{location.description} Seating for {location.seating} </li>);
    });
    return(
      <ul id="location_list">{locations}</ul>
    );
  },

  onChange: function() {
    this.setState({locations: LocationStore.all()});
  },

  componentDidMount: function() {
    LocationStore.addListener(this.onChange);
  }

});

module.exports = Index;
