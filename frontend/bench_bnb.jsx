var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var BenchStore = require('./stores/bench');
var Search = require('./components/search');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Search/>,
    document.getElementById("content")
  );
});
