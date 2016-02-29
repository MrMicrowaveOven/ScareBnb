var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');

var Show = React.createClass({
  getInitialState: function() {
    return {location: LocationStore.selectedLocation()};
  },

  render: function() {
    var location = this.state.location;
    if (location === undefined)
      {
        return(
          <div>No Location Selected</div>
        );
      }
    var self = this;
    // debugger;
    return (<li key={location.id}>ONLY {location.description}
      Room for {location.occupancy} people.</li>);
  },

  componentWillReceiveProps: function (new_props) {
    ApiUtil.showLocation(new_props.params.location_id);
  },

  onChange: function() {
    this.setState({location: LocationStore.selectedLocation()})
  },

  componentDidMount: function() {
    this.locationListener = LocationStore.addListener(this.onChange);
    // location = LocationStore.selectedLocation();
    ApiUtil.showLocation(this.props.params.location_id);
  },

  componentWillUnmount: function() {
    this.locationListener.remove();
  },

});

module.exports = Show;
