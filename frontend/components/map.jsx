var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function() {
    return {benches: BenchStore.all()};
  },

  render: function() {
    return(<div/>);
  },

  componentDidMount: function() {
    BenchStore.addListener(
      this.setState({benches: BenchStore.all()})
    );
  }

});

module.exports = Index;
