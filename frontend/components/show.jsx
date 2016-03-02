var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');

var Show = React.createClass({
  getInitialState: function() {
    return {location: LocationStore.find()};
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
    return (<li key={location.id}>This is the BEAUTIFUL and MARVELOUS show page!
    <br/>
    It is for Location #{location.id}
    </li>);
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.showLocation(newProps.params.location_id);
  },

  onChange: function() {
    this.setState({location: LocationStore.selectedLocation()});
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
