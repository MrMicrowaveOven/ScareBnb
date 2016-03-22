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
      <div className= "mdl-card" id="show_location">
        <h2 className="show_title">{location.title}</h2>

        <div className="show_image">
          {self.showImageIfAny()}
        </div>

        <br/>

        <div className="show_location_info">
          Address: {location.full_address}
          <br/><br/>
          <div className="show_description">
            {location.description}
          </div>
          <br/>
          Room for {location.occupancy} people.
          {self.showLinkIfAny()}
          <br/>
          Price: ${location.price} per night.

        </div>
      </div>
    );
  },

  showLinkIfAny: function() {
    var link = this.state.show.link;
    // debugger;
    if (link === "" || link === undefined) {return <br/>;}

    return (
      <div>
        <br/>
        Click <a target="_blank" href={link}>here</a> for more haunted location information.
      </div>
    );

  },

  showImageIfAny: function() {
    var image_string = this.state.show.image;
    if (image_string === "") {
      return("No image");
    }
    var image_show = <img className="show_pic" src={image_string}/>;

    // var pics = this.state.show.images.map(function(image, index) {
    //   return (<img src={image.image_url} key={index}/>);
    // });
    return (image_show);
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
