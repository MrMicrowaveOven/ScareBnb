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

    self.markerIndex = {};
    self.markers = BenchStore.all().map(function(bench) {
      var mark = new google.maps.Marker(
        {
          position: {lat: bench.lat, lng: bench.lng},
          map: self.map,
          title: bench.description
        }
      );
      self.markerIndex[bench.id] = mark;
      return mark;
    });
    self.markerUpdate();
    Map.theMap = this;
    self.setState({benches: BenchStore.all()});
  },

  markerUpdate: function() {
    var self = this;
    var benchesInStore = BenchStore.all();
    var markersOnMap = this.markers;
    var markerIndex = this.markerIndex;
    var needToRemove = [];
    if (benchesInStore.length !== markersOnMap.length) {

      benchesInStore.forEach(function(bench) {
        if (markerIndex[bench.id] === undefined) {
          self.addMarker(bench);
        }
      });

      markersOnMap.forEach(function(marker) {
        if (self.findBenchByMarker(marker) === -1) {
          self.removeMarker(marker);
        }
      });

    }
  },

  findBenchByMarker: function(marker) {
    var markerIndex = this.markerIndex;
    for( var bench in markerIndex ) {
      if( markerIndex.hasOwnProperty( bench ) ) {
        if( markerIndex[ bench ] === marker ) {
          return bench;
        }
      }
    }
    return -1;
  },

  addMarker: function(bench) {
    var self = this;
    var mark = new google.maps.Marker(
      {
        position: {lat: bench.lat, lng: bench.lng},
        map: self.map,
        title: bench.description
      }
    );
    self.markerIndex[bench.id] = mark;
  },

  removeMarker: function(marker) {
    marker.setMap(null);
    marker = null;
  },


  onIdle: function() {
    var boundaries = this.map.getBounds();
    var northEast = boundaries.getNorthEast();
    var southWest = boundaries.getSouthWest();
    this.bounds = {northEast: {
      lat: northEast.lat(), lng: northEast.lng()
    }, southWest: {
      lat: southWest.lat(), lng: southWest.lng()
    }};
    ApiUtil.fetchBenches(this.bounds);
  },

  componentDidMount: function(){
    BenchStore.addListener(this.onChange);
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.onIdle);
  }


});
window.Map = Map;
module.exports = Map;
