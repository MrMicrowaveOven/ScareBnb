var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function() { return {benches: BenchStore.all()}; },

  render: function() {
    return(
      <div className='map' ref='map'/>
    );
  },

  onChange: function(){
    var self = this;
    this.markers = BenchStore.all().map(function(bench) {
      var mark = new google.maps.Marker(
        {
          position: {lat: bench.lat, lng: bench.lng},
          map: self.map,
          title: bench.description
        }
      );
      return mark;
    });
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function(){
    BenchStore.addListener(this.onChange);
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }


});

module.exports = Map;
