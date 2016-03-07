var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');
var FullPage = require('./full_page');

var NavBar = React.createClass({
  mixins: [History],

  render: function () {
    // debugger;
    return (
      <div className="nav_bar">
        <div className="nav_bar_link_container">

          <div className="logo">
            <img src="https://45.media.tumblr.com/ee2a1e38364c90c7b0322cb2409fa448/tumblr_o3n80k74ih1v497yzo1_400.gif"/>
          </div>

          <Link to={"location_screen"}
            className="search_location_link">Search Haunted Locations!
          </Link>

          <Link to={"locations/new"}
            className="new_location_link">Add Your Haunted Location!
          </Link>

          <button onClick={ApiUtil.signOut}
            className="sign_out_button">Sign Out</button>

        </div>
      </div>
    );
  }

});

module.exports = NavBar;
