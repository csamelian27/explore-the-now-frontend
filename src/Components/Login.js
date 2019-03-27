import React from 'react';

class Login extends React.Component {

state = {
  email: "",
  password: ""
}

changeHandler = e => {
   this.setState({
     [e.target.name]: e.target.value
   });
 };

 loginSubmitHandler = e => {
   e.preventDefault();
   this.props.loginSubmitHandler(this.state);
   this.setState({
     email: "",
     password: ""
   });
 };

render() {
  return (
    <div className="login wrapper">
<<<<<<< HEAD
      <form className="form-signin" onSubmit={this.loginSubmitHandler}>
        <h1 class="form-signin-heading">Log In</h1>
        <input class="form-control" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
        <input class="form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
        <button class="btn btn-lg btn-primary btn-block" >Log In</button>
      </form>
    </div>
=======
         <form className="form-signin" onSubmit={this.loginSubmitHandler}>
           <h1 class="form-signin-heading">Log In</h1>
           <input class="form-control" type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
           <input class="form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
           <button class="btn btn-lg btn-primary btn-block" >Log In</button>
         </form>
       </div>
>>>>>>> 38b3fc04ccde40d0519959d6173ffddf4edadf17
  )
}
}

export default Login
