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
              <li className="logo">
                <img className="nav_bar_link"

                  src="https://45.media.tumblr.com/2e79b852116c3e16b659b16685c5102f/tumblr_o3nm8rDQym1v497yzo4_250.gif"/>
              </li>
              <div className="non-logo_container">
                <li className="non-logo">
                  <a onClick={ApiUtil.signOut}
                    className = "nav_bar_link">Sign Out</a>
                </li>

                <li className="non-logo">
                  <Link to={"locations/new"}
                    className="nav_bar_link" >Add Your Haunt!
                  </Link>
                </li>

                <li className="non-logo">
                  <Link to={"location_screen"}
                    className="nav_bar_link">Map
                  </Link>
                </li>
              </div>
          </ul>
      </div>
    );
  }

});

module.exports = NavBar;
