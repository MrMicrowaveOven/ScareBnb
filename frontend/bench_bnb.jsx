var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var BenchStore = require('./stores/bench');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement('div', {}, 'Coming soon'),
    document.getElementById("content")
  );
});
