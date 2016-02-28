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
      seating: 1
    };
  },

  render: function() {
    debugger;
    return(
      <div>
        <form className="LocationForm" onSubmit={this.submitForm}>

          <label>Latitude<input type="float" className="locationlat"
            value={this.state.lat} onChange={this.handleChangelat}
            valueLink={this.linkState("lat")}/>
          </label>

          <label>Longitude<input type="float" className="locationlng"
            value={this.state.lng} onChange={this.handleChangelng}
            valueLink={this.linkState("lng")}/>
          </label>

          <label>Description<input type="text" className="locationdescription"
            value={this.state.description} onChange={this.handleChangedescription}
            valueLink={this.linkState("description")}/>
          </label>

          <button type="submit" className="CreateLocation">
            Post Location!
          </button>

        </form>
      </div>
    );
  },

  handleChangelng: function(event) {
    this.setState({
      lng: event.target.value
    });
  },

  handleChangelat: function(event) {
    this.setState({
      lat: event.target.value
    });
  },

  handleChangedescription: function(event) {
    this.setState({
      description: event.target.value
    });
  },

  submitForm: function(event) {
    event.preventDefault();

    // this.refs.LocationForm.getFormData();
    ApiUtil.CreateLocation({
      lat: this.refs.locationlat.getDOMNode().value,
      lng: this.refs.locationlng.getDOMNode().value,
      description: this.refs.locationdescription.getDOMNode().value
    });
  },

  componentDidMount: function() {

  }

});

module.exports = LocationForm;
