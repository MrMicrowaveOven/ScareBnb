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

          <ul className="nav_bar_link_container">
              <Link to={"location_screen"} className="logo">
                <img className="nav_bar_link"

                  src="https://45.media.tumblr.com/2e79b852116c3e16b659b16685c5102f/tumblr_o3nm8rDQym1v497yzo4_250.gif"/>
              </Link>
              <div className="non-logo_container">
                <Link to={"session/new"} onClick={ApiUtil.signOut} className="non-logo">
                  <div className="nav_bar_link">
                    Sign Out
                  </div>
                </Link>

                <Link to={"locations/new"} className="non-logo">
                  <div
                    className="nav_bar_link" >Add Your Haunt!
                  </div>
                </Link>

                <Link to={"location_screen"} className="non-logo">
                  <div
                    className="nav_bar_link">Map
                  </div>
                </Link>
              </div>
          </ul>
      </div>
    );
  }

});

module.exports = NavBar;
