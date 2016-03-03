var React = require('react');

var History = require('react-router').History;
var Map = require('./map');
var Index = require('./index');
var Show = require('./show');

// {this.props.children}
var Search = React.createClass({
  render: function() {
    return(
      <div className="search_container">
        <Map/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
