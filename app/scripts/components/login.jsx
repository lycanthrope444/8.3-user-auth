var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');

class LogIn extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <UserLogin />
          <CreateUser />
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
             <input className="form-control" name="email" id="email-login" type="email" placeholder="email" />
           </div>

           <div className="form-group">
             <label htmlFor="password-login">Password</label>
             <input className="form-control" name="password" id="password-login" type="password" placeholder="Password Please" />
           </div>

           <input className="btn btn-primary" type="submit" value="Beam Me Up!" />
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
              <input id="signup-email" className="form-control" type="text" name="email" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input id="signup-password" className="form-control" type="password" name="password" placeholder="Don't Share This!" />
            </div>

            <input className="btn btn-primary" type="submit" value="Sign Up!" />
          </form>
        </div>
      )
    }
}


module.exports={
  LogIn
}
