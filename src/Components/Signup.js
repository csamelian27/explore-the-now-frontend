import React from 'react';

class Signup extends React.Component {

  state = {
    email: "",
    password: ""
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  signupSubmitHandler = e => {
    e.preventDefault();
    this.props.signupSubmitHandler(this.state);
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="signup">
        <h1>Sign up</h1>
        <form onSubmit={this.signupSubmitHandler}>
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup
