var $ = require('jquery');
var React = require('react');

var apiUrl = 'https://tiny-parse-server.herokuapp.com/classes/User';

class Messages extends React.Component{
  constructor(){
    super();
    // var user = localStorage.get('username');
    //
    // this.setupAjax(user);
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
      <div className ="col-md-12">
        <div className="form-group">
          <label htmlFor="submit-message">Send a Message</label>
          <input id="submit-message" className="form-control"
            type="text" placeholder="Tell the World!"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Send Message!"
          onClick = {
            (e)=>{
              e.preventDefault();
              this.props.submitMessage($("#submit-message").val())
            }
          }
        />
      </div>
    )
  }
}

class MessageList extends React.Component{
  render(){
    return (
      <div className ='col-md-12'>
        Message List Placeholder
      </div>
    )
  }
}

module.exports={
  Messages,
  MessageList
}
