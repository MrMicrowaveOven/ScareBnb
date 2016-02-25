var React = require('react');

var History = require('react-router').History;
var ApiActions = require('../actions/api_actions');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function() { return {benches: BenchStore.all()}; },

  render: function() {
    var self = this;
    var benches = self.state.benches.map(function(bench) {
      return (<li key={bench.id}>{bench.description}</li>);
    });
    return(
      <ul id="bench_list">{benches}</ul>
    );
  },

  onChange: function() {
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function() {
    BenchStore.addListener(this.onChange);
    ApiUtil.fetchBenches();
  }

});

module.exports = Index;
