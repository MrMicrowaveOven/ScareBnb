var React = require('react');
var Link = require('react-router').Link;
var History = require('react-router').History;
var ApiUtil = require('../util/api_util');
var FullPage = require('./full_page');

var NavBar = React.createClass({
  mixins: [History],

  // getInitialState: function() {
  //   return({page: 1});
  // },
  //
  // switchPage: function(page) {
  //   this.setState({page: page});
  // },

  // addMap: function() {
  //   // debugger;
  //   var url = "/location_screen";
  //   this.history.push({pathname: url});
  // },
  //
  // addLocationForm: function() {
  //   var url = "/locations/new";
  //   this.history.push({pathname:url});
  // },

  // toMap: function() {
  //   debugger;
  //   FullPage.switchPage(1);
  // },
  //
  // toLocationForm: function() {
  //   debugger;
  //   FullPage.switchPage(2);
  // },


  render: function () {
    // debugger;
    return (
      <div className="nav_bar">
        <div className="nav_bar_sub">
          <div className="nav_bar_link_container">

              <button onClick={ApiUtil.signOut}
                className="sign_out_button">Sign Out</button>

              <Link to={"location_screen"}
                className="search_location_link">Search Haunted Locations!
              </Link>

              <Link to={"locations/new"}
                className="new_location_link">Add Your Haunted Location!
              </Link>

          </div>
        </div>
      </div>
    );
  }

});

module.exports = NavBar;
