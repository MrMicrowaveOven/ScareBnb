var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var LocationStore = require('../stores/location');
var ApiUtil = require('../util/api_util');


var LocationForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      lat: 38,
      lng: -122,
      description: null,
      occupancy: 1,
      images: {}
    };
  },

  render: function() {
    return(
      <div>
        <h2 className="Add a location">Post your location!</h2>
        <form className="LocationForm" onSubmit={this.submitLocation}>

          <label>Latitude
            <input type="text" className="locationlat"
              valueLink={this.linkState("lat")}
            />
          </label>

          <label>Longitude
            <input type="text" className="locationlng"
              valueLink={this.linkState("lng")}
            />
          </label>

          <label>Description
            <input type="text" className="locationdescription"
              valueLink={this.linkState("description")}
            />
          </label>

          <label>How many people can stay at this location?
            <select name="Max Occupancy" valueLink={this.linkState("occupancy")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>

          <div>
            <button className="upload" onClick={this.state.images = this.uploadImage}>Upload Image!</button>
          </div>

          <input type="submit" className="CreateLocation"
            value="Post Location!" onClick={this.submitLocation}
          />

        </form>
      </div>
    );
  },

  uploadImage: function() {
    var images = cloudinary.openUploadWidget({ cloud_name: 'dazguin0y', upload_preset: "fmwjjrqp" },
    function(error, result) {
      var images = result;
      return images;
    })
    return images
  },

  oneThroughTen: function() {
    var oTT = [1,2,3,4,5,6,7,8,9,10];
    var list = oTT.map(function(num) {
      return(
        <option value="{num}">{num}</option>
      );
    });
    return list;
  },

  submitLocation: function(event) {
    event.preventDefault();
    ApiUtil.createLocation({
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description,
      occupancy: this.state.occupancy,
      images: this.state.images
    });

  },

  componentDidMount: function() {

  }

});

module.exports = LocationForm;
