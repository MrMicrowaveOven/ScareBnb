var React = require('react');
var Show = require('./show');
var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;

var Index = React.createClass({
  getInitialState: function() {
    return {locations: this.props.locations, show: this.props.show};
  },

  render: function() {
    var self = this;
    var locations = self.props.locations.map(function(location) {
      return (
      <li key={location.id}>
        <div>{location.id}</div>
        <div onClick={self.onClick.bind(self, event, location)}> {location.description} Room for {location.occupancy} people. </div>
      </li>);
    });
    // debugger;
    return(
      <div>
        <Show show={this.props.show}/>
        <ul className="location_index" id="location_list">{locations}</ul>
      </div>
    );
  },

  onClick: function(event, location) {
    event.preventDefault();
    ApiActions.receiveLocation(location);
    // LocationStore.selectedLocation;
  },


  componentDidMount: function() {
    // this.locationListener = LocationStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.locationListener.remove();
  }

});

module.exports = Index;
