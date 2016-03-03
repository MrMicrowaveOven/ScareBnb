var React = require('react');
var LocationStore = require('../stores/location');
var LocationScreen = require('./location_screen');
var LocationForm = require('./locationForm');

var FullPage = React.createClass({
  getInitialState: function () {
    return ({
      page: 1, locations: LocationStore.all(),
      show: LocationStore.selectedLocation()
    });
  },

  switchPage: function(page) {
    debugger;
    this.setState({page: page});
  },

  render: function(){
    return (
      <div>
        <LocationScreen locations={this.props.locations} show={this.props.show}/>
        <LocationForm/>
      </div>
    );
  },
  componentDidMount: function() {
    debugger;
  }

});

module.exports = FullPage;
