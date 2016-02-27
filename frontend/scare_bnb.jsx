var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('content');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var LocationStore = require('./stores/location');
var Search = require('./components/search');

// var App = React.createClass({
//     render: function(){
//       return (
//           <div>
//             <header><h1>Location BnB</h1></header>
//             {this.props.children}
//           </div>
//       );
//     }
// });
//
// var routes = (
//   <Route path="/" component={App}>
// );
//
// ReactDOM.render(<Router>{routes}</Router>, root);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Search/>,
    document.getElementById("content")
  );
});
