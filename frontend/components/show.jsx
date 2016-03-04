var React = require('react');

var History = require('react-router').History;
var LocationStore = require('../stores/location');
var Show = React.createClass({
  getInitialState: function() {
    // debugger;
    // LocationStore.setSelectedLocation(LocationStore.find(this.getInitialLocation()));
    return {show: LocationStore.selectedLocation()};
  },

  // getInitialLocation: function() {
  //   // debugger;
  //   if (this.props.params === undefined) {return 0;}
  //   return (this.props.params.location_id)
  // },

  render: function() {

    var location = this.state.show;

    if (location === null || location === undefined)
      {
        return(
          <div>No Location Selected</div>
        );
      }
    var self = this;
    return (
      <div className="show_location">
        <div key={location.id}>
          <h2>{location.title}</h2>
          <br/><br/>
          {self.showImagesIfAny()}
          <br/><br/>
          Address: {location.full_address}
          <br/><br/>
          {location.description}
        </div>
      </div>
    );
  },

  showImagesIfAny: function() {
    // debugger;
    if (this.state.show.images.length === 0) {
      return("No images");
    }
    var pics = this.state.show.images.map(function(image, index) {
      return (<img src={image.image_url} key={index}/>);
    });
    return pics;
  },

  // componentWillReceiveProps: function (newProps) {
  //   // debugger;
  //   ApiUtil.showLocation(this.state.location);
  // },


  componentDidMount: function() {
    this.locationListener = LocationStore.addListener(this.onChange);
    // var currentLocation = LocationStore.selectedLocation();

    // ApiUtil.showLocation(this.state.show);
  },

  onChange: function() {
    this.setState({show: LocationStore.selectedLocation()});
  },

  componentWillUnmount: function() {
    this.locationListener.remove();
  },

});

module.exports = Show;
