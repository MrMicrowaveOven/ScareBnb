var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var LocationStore = require('./stores/location');
var Search = require('./components/search');
var LocationForm = require('./components/locationForm');
var NavBar = require('./components/nav_bar');
var Show = require('./components/show');
var LocationScreen = require('./components/location_screen');


var App = React.createClass({
    render: function(){
      return (
          <div>
            <div><NavBar/></div>
            <header><h1>Location BnB</h1></header>
            <LocationScreen />
          </div>
      );
    }
});

// {this.props.children}
var routes = (
  <Route path="/" component={App}>
      <IndexRedirect to="location_screen"/>
      <Route path="location_screen" component={LocationScreen}>
          <Route path="search" component={Search}>
              <Route path=":location_id" component={Show}/>
          </Route>
      </Route>
      <Route path="locations/new" component={LocationForm}/>
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"));
});
