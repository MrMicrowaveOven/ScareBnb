var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');
var FullPage = require('./full_page');
var ApiActions = require('../actions/api_actions');

var NavBar = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {selected: this.props.selected};
  },

  render: function () {
    // debugger;
    var self = this;
    return (
      <div className="nav_bar">

          <ul className="nav_bar_link_container">
              <Link to={"location_screen"} className="logo">
                <img className="nav_bar_link"

                  src="https://45.media.tumblr.com/2e79b852116c3e16b659b16685c5102f/tumblr_o3nm8rDQym1v497yzo4_250.gif"/>
              </Link>
              <div className="non-logo_container">
                <Link to={"session/new"} onClick={ApiUtil.signOut}
                  className="non-logo">
                  <div className="nav_bar_link">
                    Sign Out
                  </div>
                </Link>

                <Link to={"locations/new"}
                  id={self.is_selected(2)} className="non-logo">
                  <div className="nav_bar_link" onClick={ApiActions.setNavTab}
                    >Add Your Haunt!</div>
                </Link>

                <Link to={"location_screen"}
                  id={self.is_selected(1)} className="non-logo">
                  <div className="nav_bar_link" onClick={ApiActions.setNavTab}
                    >Map</div>
                </Link>
              </div>
          </ul>
      </div>
    );
  },

  is_selected: function(page) {
    // debugger;
    if (this.state.selected == page) {
      return "nav_selected";
    } else {
      return "nav_unselected";
    }
  }

});

module.exports = NavBar;
