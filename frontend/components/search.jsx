var React = require('react');

var History = require('react-router').History;
var Map = require('./map');
var Index = require('./index');
var Show = require('./show');

// {this.props.children}
var Search = React.createClass({
  render: function() {
    return(
      <div className="loc_container">
        <div className="search_container">
          <Map/>
          <div className="index_bit">
            <Index/>
          </div>
        </div>
        <div className="show_bit">
          <Show/>
        </div>
      </div>
    );
  }
});

module.exports = Search;
