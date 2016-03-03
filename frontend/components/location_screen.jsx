var React = require('react');
var ApiUtil = require('../util/api_util');
var Show = require('./show');
var Map = require('./map');
var Index = require('./index');
var LocationStore = require('../stores/location');


var LocationScreen = React.createClass({
  getInitialState: function () {
    return {locations: LocationStore.all()};
  },

  componentDidMount: function () {
    this.locationListener = LocationStore.addListener(this.onChange);
    ApiUtil.fetchLocations();
  },

  onChange: function () {
    this.setState({locations: LocationStore.all()});
  },

  componentWillUnmount: function () {
    this.locationListener.remove();
  },

  render: function() {
    return(
      <div className="location_screen">
        <Map locations={this.state.locations}/>
        <Index locations={this.state.locations} show={LocationStore.selectedLocation()}/>
      </div>
    );
  }
});

module.exports = LocationScreen;
