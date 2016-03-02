var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');

var Geosuggest = require('react-geosuggest');


var LocationForm = React.createClass({

  mixins: [LinkedStateMixin, History],

  getInitialState: function() {
    this.defaultSFLocation = new google.maps.LatLng({lat: 38, lng: -122});
    return {
      title: "",
      full_address: "",
      address: "160 Spear Street",
      city: "San Francisco",
      state: "CA",
      zip_code: "94105",
      lat: 38,
      lng: -122,
      description: null,
      occupancy: 1,
      images: []
    };
  },

  render: function() {
    // debugger;
    return(
      <div className="LocationForm">
        <h2 className="Add a location">Post your location!</h2>
        <form className="LocationForm" onSubmit={this.submitLocation}>

          <div>
            <label>Title of Place<br/><br/>
              <input type="text" className="title"
                valueLink={this.linkState("title")}
                />
            </label>
          </div>

          <div>
            <Geosuggest
              location={this.defaultSFLocation}
              radius = "50"
              onSuggestSelect={this.onSuggestSelect}
              valueLink={this.linkState("full_address")}
            />
          </div>

          <div id="mapAddress" className='mapAddress' ref='mapAddress'/>
          <br/>
          <div id="addressDisplay" />

          <label>Describe your place: What is so haunted about it?<br/><br/>
            <textarea className="locationdescription"
              valueLink={this.linkState("description")}
            />
          </label>
          <br/>
          <label>How many people can stay at this location?
            <select name="Max Occupancy"
              valueLink={this.linkState("occupancy")}
            >
              {this.oneThroughTen()}
            </select>
          </label>
          <br/>
          <div>
            Be sure to include some pictures of your place!
            <button className="upload" onClick={this.uploadImage}>
              Upload picture!</button>
          </div>

          <div>
            <h2>Here are your images:{this.showImages()}</h2>
          </div>

          <div>
            <input type="submit" className="CreateLocation"
              value="Post Location!" onClick={this.submitLocation}
            />
          </div>

        </form>
      </div>
    );
  },

  oneThroughTen: function() {
    var oTT = [1,2,3,4,5,6,7,8,9,10];
    var list = oTT.map(function(num) {
      return(
        <option value={num} key={num}>{num}</option>
      );
    });
    return list;
  },

  onSuggestSelect: function(suggest) {
    if (this.mapAddressMarker !== undefined)
      {this.mapAddressMarker.setMap(null);}

    this.mapAddressMarker = new google.maps.Marker({
      position: suggest.location,
      map: this.mapAddress,
      title: suggest.label
    });
    this.mapAddress.setCenter(suggest.location);
    // debugger;

    this.setState({
      lat: suggest.location.lat,
      lng: suggest.location.lng,
      full_address: suggest.label
    });
    // ReactDOM.render(
    //   <div>
    //     {suggest.label}
    //   </div>
    //   , {},
    //   document.getElementById('addressDisplay')
    // );

  },

  showImages: function() {
    var images = this.state.images;
    var allImages = images.map(function(image, index) {
      var imageStyle = {
        backgroundImage: 'url(' + image.secure_url + ')'
      };
      // return <img key={index} src={image.secure_url}/>;
      return <div style={imageStyle} />;
    });
    return allImages;
  },

  uploadImage: function(event) {
    event.preventDefault();
    var self = this;
    var images = cloudinary.openUploadWidget({
      cloud_name: 'dazguin0y', upload_preset: "jfqawmvc", multiple: true
    },
    function(error, result) {
      self.setState({images: self.state.images.concat(result)});
    });
  },


  submitLocation: function(event) {
    event.preventDefault();
    // debugger;
    ApiUtil.createLocation({
      title: this.state.title,
      lat: this.state.lat,
      lng: this.state.lng,
      full_address: this.state.full_address,
      description: this.state.description,
      occupancy: this.state.occupancy,
      images: this.state.images
    }, this.creationSuccess);
  },

  creationSuccess: function(id) {
    this.history.push("/search/" + id);
  },

  componentDidMount: function() {
    this.geocoder = new google.maps.Geocoder;

    var mapDOMNode = this.refs.mapAddress;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 15
    };
    this.mapAddress = new google.maps.Map(mapDOMNode, mapOptions);
  }

  // componentWillUnmount: function() {
  //   this.locationListener.remove();
  // }

});

window.LocationForm = LocationForm;
module.exports = LocationForm;
