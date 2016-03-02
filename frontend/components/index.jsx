var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;

var Index = React.createClass({
  getInitialState: function() { return {locations: LocationStore.all()}; },

  render: function() {
    var self = this;
    var locations = self.state.locations.map(function(location) {
      // debugger;
      return (<li key={location.id}>
        <Link to={"search/" + location.id}> {location.description} Room for {location.occupancy} people. </Link>
      </li>);
    });
    return(
      <ul id="location_list">{locations}</ul>
    );
  },

  onChange: function() {
    this.setState({locations: LocationStore.all()});
  },

  componentDidMount: function() {
    this.locationListener = LocationStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.locationListener.remove();
  }

});

module.exports = Index;
