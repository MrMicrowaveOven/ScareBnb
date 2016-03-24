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
        <div key={location.id} className="index_location">
          <div className="mdl-card--border" onClick={self.onClick.bind(self, event, location)} id={self.isSelected(location.id)}>
            <img src={location.image} key={location.id} className="index_image"/>
            <div className="mdl-card__supporting-text">
                <div className="index_title">
                  {location.title}
                </div>
                <div className="index_text">
                  Room for {location.occupancy} people.
                </div>
            </div>
          </div>
        </div>);
    });

    return(
      <div className="index_bit">
        <div className="location_index" id="location_list">{locations}</div>
      </div>
    );
  },

  isSelected: function(id) {
    if (id === this.state.show.id) {
      return ("selected");
    } else {
    return ("notSelected");
    }
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
