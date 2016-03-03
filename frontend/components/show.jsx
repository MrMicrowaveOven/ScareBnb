var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');

var Show = React.createClass({
  getInitialState: function() {
    // debugger;
    // LocationStore.setSelectedLocation(LocationStore.find(this.getInitialLocation()));
    return {show: this.props.show};
  },

  // getInitialLocation: function() {
  //   // debugger;
  //   if (this.props.params === undefined) {return 0;}
  //   return (this.props.params.location_id)
  // },

  render: function() {
    var location = this.props.show;
    if (location === undefined)
      {
        return(
          <div>No Location Selected</div>
        );
      }
    var self = this;
    if (this.props.show){
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
    } else {
      return (<div/> );
    }
  },

  showImagesIfAny: function() {
    // debugger;
    if (this.props.show.images.length === 0) {
      return("No images");
    }
    var pics = this.props.show.images.map(function(image, index) {
      return (<img src={image.image_url} key={index}/>);
    });
    return pics;
  },

  // componentWillReceiveProps: function (newProps) {
  //   // debugger;
  //   ApiUtil.showLocation(this.state.location);
  // },


  // componentDidMount: function() {
  //   this.locationListener = LocationStore.addListener(this.onChange);
    // location = LocationStore.selectedLocation();
    // ApiUtil.showLocation(this.state.location);
  // },

  componentWillUnmount: function() {
    this.locationListener.remove();
  },

});

module.exports = Show;
