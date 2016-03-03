var React = require('react');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');
var LocationStore = require('../stores/location');
var Search = require('./search');


var LocationScreen = React.createClass({
  getInitialState: function () {
    return {
      locations: LocationStore.all(),
      show: LocationStore.selectedLocation()
    };
  },

  componentDidMount: function () {
    this.locationListener = LocationStore.addListener(this.onChange);
    ApiUtil.fetchLocations();
  },

  onChange: function () {
    this.setState({
      locations: LocationStore.all(),
      show: LocationStore.selectedLocation()
    });
  },

  componentWillUnmount: function () {
    this.locationListener.remove();
  },

  render: function() {

    return(
      <div className="location_screen">
        <Search/>
      </div>
    );
  }
});

module.exports = LocationScreen;
