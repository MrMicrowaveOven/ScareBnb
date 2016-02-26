var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function() {
    //markerIndex is a means of indexing all markers for benches in the store.
    this.markerIndex = {};
    //We add to oldMarkers when a marker comes on the screen.
    //On change, we'll see if it should still be on the screen.
    //If not, delete it and remove from oldMarkers
    this.oldMarkers = [];

    //benches is the benches in the store, markers are the markers on the map.
    return {benches: BenchStore.all(), markers: []};
  },

  render: function() {
    return(
      <div className='map' ref='map'/>
    );
  },

  onChange: function(){
    var self = this;
    // debugger;
    // self.markers = BenchStore.all().map(function(bench) {
    //   var mark = new google.maps.Marker(
    //     {
    //       position: {lat: bench.lat, lng: bench.lng},
    //       map: self.map,
    //       title: bench.description
    //     }
    //   );
    //   self.markerIndex[bench.id] = mark;
    //   return mark;
    // });
    // debugger;
    self.markerUpdate();
    Map.theMap = this;
    self.setState({benches: BenchStore.all(), markers: self.oldMarkers});
  },

  markerUpdate: function() {

    var self = this;
    var benchesInStore = BenchStore.all();
    var markersOnMap = this.markers;

    var markerIndex = self.markerIndex;


    Object.keys(markerIndex).forEach(function(key) {
      // debugger;
      self.oldMarkers.push(markerIndex[key]);
    });
    // debugger;

    benchesInStore.forEach(function(bench) {
      if (markerIndex[bench.id] === undefined) {
        self.addMarker(bench);
      }
    });
    // debugger;
    var newOldList = [];
    self.oldMarkers.forEach(function(marker) {
      // debugger;
      if (self.findBenchByMarker(marker) === -1) {
        self.removeMarker(marker);
      } else {
        newOldList.push(marker);
      }
    });
    self.oldMarkers = newOldList;
    debugger;
  },

  findBenchByMarker: function(marker) {
    var markerIndex = this.markerIndex;
    // debugger;
    for(var bench in markerIndex) {
      if(markerIndex.hasOwnProperty(bench)) {
        if(markerIndex[bench] === marker) {
          // debugger;
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
