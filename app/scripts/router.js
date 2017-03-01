var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var logIn = require('./components/login.jsx').LogIn;
var messages = require('./components/messages.jsx').Messages;

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'login',
    'login':'login',
    'messages': 'messages'
  },
  login:function(){
    ReactDOM.render(
      React.createElement(logIn),
      document.getElementById('app')
    );
  },
  messages:function(){
    ReactDOM.render(
      React.createElement(messages),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();
module.exports={
  appRouter
};
