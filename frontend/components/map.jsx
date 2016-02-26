var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function() {
    //markerIndex is a means of indexing all markers for benches in the store.
    //benchId = markerIndex key
    //It also keeps track of markers that were on the screen before onChange.
    this.markerIndex = {};

    //Used to update the markerIndex
    this.newMarkerIndex = {};
    //benches is the benches in the store, markers are the markers on the map.
    //We'll set state with
    return {benches: BenchStore.all(), markers: this.markerIndex};
  },

  render: function() {
    return(
      <div className='map' ref='map'/>
    );
  },

  //Called when the Store changes
  onChange: function(){
    var self = this;

    self.markerUpdate();
    Map.theMap = self;
    this.refreshBandM();
  },

  //reRender
  refreshBandM: function(){
    this.setState({benches: BenchStore.all(),
      markers: this.allMarkersInIndex()});
  },

  //Adds a marker to the map
  addMarker: function(bench) {
    var self = this;
    var marker = new google.maps.Marker(
      {
        position: {lat: bench.lat, lng: bench.lng},
        map: self.map,
        title: bench.description
      }
    );
    // debugger;
    self.newMarkerIndex[bench.id] = marker;
    return marker;
  },

  //Removes marker from map
  removeMarker: function(marker) {
    var benchId = this.findBenchIdByMarker(marker);
    delete this.markerIndex[benchId];
    marker.setMap(null);
    marker = null;
  },


  markerUpdate: function() {
    var self = this;

    //If there's a bench in the store that isn't in the markerIndex,
    //create a marker for it.
    BenchStore.all().forEach(function(bench) {
      if (self.markerIndex[bench.id] === undefined) {
        self.newMarkerIndex[bench.id] = self.addMarker(bench);
      } else {
        self.newMarkerIndex[bench.id] = self.markerIndex[bench.id];
        delete self.markerIndex[bench.id];
      }
    });

    //
    self.removeOldMarkers();

    self.markerIndex = self.newMarkerIndex;
    self.newMarkerIndex = {};

    this.refreshBandM();
  },

  removeOldMarkers: function() {
    var self = this;
    Object.keys(self.markerIndex).forEach(function(markerId) {
      self.removeMarker(self.markerIndex[markerId]);
    });
  },

  allMarkersInIndex: function() {
    var arr = [];
    for(var marker in this.markerIndex) {
      arr.push(this.markerIndex[marker]);
    }
    return arr;
  },

  findBenchIdByMarker: function(marker) {
    var markerIndex = this.markerIndex;
    // debugger;
    for(var benchId in markerIndex) {
      if(markerIndex.hasOwnProperty(benchId)) {
        if(markerIndex[benchId] === marker) {
          return benchId;
        }
      }
    }
    return -1;
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
