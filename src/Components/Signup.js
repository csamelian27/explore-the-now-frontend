import React from 'react';

class Signup extends React.Component {

  state = {
    email: "",
<<<<<<< HEAD
    password: ""
=======
    password: "",
    price: "",
    radius: ""
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
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
<<<<<<< HEAD
      password: ""
=======
      password: "",
      price: "",
      radius: ""
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
    })
  }

  render() {
<<<<<<< HEAD
    console.log(this.state);
=======
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
    return (
      <div className="signup">
        <h1>Sign up</h1>
        <form onSubmit={this.signupSubmitHandler}>
          <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
<<<<<<< HEAD
=======
          <input type="number" name="price" placeholder="price" value={this.state.price} onChange={this.changeHandler} />
          <input type="number" name="radius" placeholder="radius" value={this.state.radius} onChange={this.changeHandler} />
>>>>>>> 501c432526b2d5ffa625dd61fabfb40dedbed413
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

export default Signup
