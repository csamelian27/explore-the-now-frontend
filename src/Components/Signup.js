import React from 'react';

class Signup extends React.Component {

state = {
  email: "",
  password: ""
}

changeHandler = e => {
  this.setState({
    [e.target.placeholder]: e.target.value
  })
}

signupSubmitHandler = e => {
  e.preventDefault();
  this.props.userSubmitHandler(this.state);
  this.setState({
    email: "",
    password: ""
  })
}


render() {
  return (
    <div className="signup">
      <h1>Sign up</h1>
      <form onSubmit={this.userSubmitHandler}>
        <input type="text" placeholder="email"
        value={this.state.email} onChange={this.changeHandler} />
        <input type="password" placeholder="password"
        value={this.state.password} onChange={this.changeHandler} />
        <button>Sign Up</button>
      </form>
    </div>
  )
}
}

export default Signup
