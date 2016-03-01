var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  addMap: function() {
    var url = "/search/";
    this.history.push({pathname: url});
  },

  addLocationForm: function() {
    var url = "/locations/new";
    this.history.push({pathname:url});
  },

  render: function () {

    return (
      <div className="nav_bar">
        <div className="nav_bar_sub">
          <div className="nav_bar_link_container">
            <Link to={"/search/"}
              onClick={this.addMap}
              className="nav_bar_link">Map<br/>
            </Link>
            <Link to={"/locations/new" }
              onClick={this.addLocationForm}
              className="nav_bar_link">Add Your Location
            </Link>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = NavBar;
