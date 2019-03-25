import React from 'react';

class Signup extends React.Component {

  state = {
    email: "",
    password: "",
    price: "",
    radius: ""
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
      password: "",
      price: "",
      radius: ""
    })
  }

  render() {
    return (
      <div className="signup">
        <h1>Sign up</h1>
        <form onSubmit={this.signupSubmitHandler}>
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="number" name="price" placeholder="price" value={this.state.price} onChange={this.changeHandler} />
          <input type="number" name="radius" placeholder="radius" value={this.state.radius} onChange={this.changeHandler} />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup
