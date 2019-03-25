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
    <div className="login">
      <h1>Log In</h1>
      <form onSubmit={this.loginSubmitHandler}>
<<<<<<< HEAD
        <input type="email" placeholder="email"
        value={this.state.email} onChange={this.changeHandler} />
        <input type="password" placeholder="password"
        value={this.state.password} onChange={this.changeHandler} />
=======
        <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
        <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
        <button>Log In</button>
      </form>
    </div>
  )
}
}

export default Login
