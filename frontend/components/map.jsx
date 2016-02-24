var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function() {
    return {benches: BenchStore.all()};
  },

  render: function() {
    return(
      <div className='map' ref='map'/>
    );
  },

  componentDidMount: function() {
    BenchStore.addListener(
      this.setState({benches: BenchStore.all()})
    );
  }

});

module.exports = Map;
