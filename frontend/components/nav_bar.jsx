var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  addMap: function() {
    var url = "/location_screen/";
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

              <Link to={"/location_screen/"}
                onClick={this.addMap}
                className="nav_bar_link">Scare Search!<br/>
              </Link>


              <Link to={"/locations/new" }
                onClick={this.addLocationForm}
                className="new_location_link">Add Your Location
              </Link>

          </div>
        </div>
      </div>
    );
  }

});

module.exports = NavBar;
