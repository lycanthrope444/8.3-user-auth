var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

var apiUrl = 'https://tiny-parse-server.herokuapp.com';

class LogIn extends React.Component{
  constructor(){
    super();
  }
  componentWillMount(){

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
  userLogin(email, password){
    console.log('user Login clicked', email, password);
    var user = {
      username:email,
      password:password
    }
    $.post(apiUrl + '/users', user).then(function(data){
      console.log(data);
    });
  }
  createUser(email, password){
    console.log('user create clicked', email, password);
    var user = {
      username:email,
      password:password
    }
    $.get(url).then(function(data){
      console.log(data);
      var userData = JSON.stringify(data);
      localStorage.setItem('user', userData);
    });
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <UserLogin data={this.state} userLogin={this.userLogin} />
          <CreateUser data={this.state} createUser={this.createUser} />
        </div>
      </div>
    )
  }
}

class UserLogin extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
     <div className="col-md-6">
       <h1>Please Login</h1>

       <form id="login">
         <div className="form-group">
          <label htmlFor="email-login">Email address</label>
          <input className="form-control" name="email"
            id="email-login" type="email" placeholder="email"
          />
         </div>

         <div className="form-group">
          <label htmlFor="password-login">Password</label>
          <input className="form-control"
            name="password" id="password-login"
            type="password" placeholder="Password Please"
          />
         </div>

        <input className="btn btn-primary" type="submit" value="Beam Me Up!"
          onClick = {
            (e)=>{
              e.preventDefault(); this.props.userLogin($('#email-login').val(), $('#password-login').val())
            }
          }
        />
       </form>
     </div>
    )
  }
}

class CreateUser extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div className="col-md-6">
        <h1>No Account? Sign Up!</h1>

        <form id="signup">
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input id="signup-email" className="form-control" type="text"
              name="email" placeholder="Email Address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" className="form-control"
              type="password" name="password"
              placeholder="Don't Share This!"
            />
          </div>

          <input className="btn btn-primary" type="submit" value="Sign Up!"
            onClick = {
              (e)=>{
                e.preventDefault();
                this.props.createUser($("#signup-email").val(), $('#signup-password').val())
              }
            }
          />
        </form>
      </div>
    )
  }
}


module.exports={
  LogIn
}
