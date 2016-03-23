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
        <div className="mdl-card--border">
          <img src={location.image} key={location.id} className="index_image"
            onClick={self.onClick.bind(self, event, location)}/>

          <div className="index_text">
                {location.title}
                <div>
                    Room for {location.occupancy} people.
                    <br/>
                </div>
          </div>
        </div>
      </div>);
    });

    return(
      <div className="index_bit">
        <ul className="location_index" id="location_list">{locations}</ul>
      </div>
    );
  },

  onClick: function(event, location) {
    event.preventDefault();
    // debugger;
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
