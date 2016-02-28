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

var App = React.createClass({
    render: function(){
      return (
          <div>
            <header><h1>Location BnB</h1></header>
            {this.props.children}
          </div>
      );
    }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/search"></IndexRedirect>
    <Route path="/search" component={Search}/>
    <Route path="/locations/new" component={LocationForm}/>
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"));
});
