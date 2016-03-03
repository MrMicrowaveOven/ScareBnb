var React = require('react');
var Show = require('./show');
var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var LocationStore = require('../stores/location');

var Index = React.createClass({
  getInitialState: function() {
    return {locations: LocationStore.all(), show: LocationStore.selectedLocation()};
  },

  render: function() {
    var self = this;
    var locations = this.state.locations.map(function(location) {
      return (
      <li key={location.id}>
        <div>{location.id}</div>
        <div onClick={self.onClick.bind(self, event, location)}> {location.description} Room for {location.occupancy} people. </div>
      </li>);
    });
    // debugger;
    return(
      <div>
        <Show/>
        <ul className="location_index" id="location_list">{locations}</ul>
      </div>
    );
  },

  onClick: function(event, location) {
    event.preventDefault();
    ApiActions.receiveLocation(location);
  },

  onChange: function() {
    this.setState({locations: LocationStore.all(), show: LocationStore.selectedLocation()});
  },

  componentDidMount: function() {
    this.locationListener = LocationStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.locationListener.remove();
  }

});

module.exports = Index;
