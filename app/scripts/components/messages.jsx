var React = require('react');

var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class Messages extends React.Component{
  constructor(){
    super();
    var user = localStorage.get('username');

    this.setupAjax(user);
  }
  comoponentWillMount(){

  }
  setupAjax(loggedInUser){
    $.ajaxSetup({
        beforeSend: function(xhr){
          xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
          xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
          if(loggedInUser){
            xhr.setRequestHeader("X-Parse-Session-Token", loggedInUser.sessionToken);
          }
        }
    });
  }
  render(){
      return(
      <div>
        messages
        placeholder
      </div>
    )
  }
}

module.exports={
  Messages
}
