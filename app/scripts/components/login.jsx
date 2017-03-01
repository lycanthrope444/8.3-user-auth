var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

class LogIn extends React.Component{
  constructor(){
    super();
  }
  userLogin(email, password){
    console.log('user Login clicked', email, password);
  }
  createUser(email, password){
    console.log('user create clicked', email, password);
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <UserLogin data={this.state} userLogin={this.userLogin}/>
          <CreateUser data={this.state} createUser={this.createUser}/>
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
