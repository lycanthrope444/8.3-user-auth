var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var logIn = require('./components/login.jsx').logIn;

var AppRouter = Backbone.Router.extend({

});

var appRouter = new AppRouter();
module.exports={
  appRouter
};
