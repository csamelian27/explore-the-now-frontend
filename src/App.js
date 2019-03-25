import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import TasksHome from './Containers/TasksHome'
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'

// console.log(process.env.REACT_APP_API_KEY)
// console.log("JWT", process.env.REACT_APP_JWT_KEY)

class App extends Component {


  state = {
    user: {}
  }

// grabs the current user with the backend route based on if a token is in localstorage.
  componentDidMount = () => {
    let token = localStorage.token;
    token
      ? fetch("http://localhost:3000/api/v1/current_user", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "accepts": "application/json",
            "Authorization": `${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              this.props.history.push("/tasks-home");
            });
          })
      : this.props.history.push("/signup");
  };


// Sign up submit handler posts userInfo (which is the current sign up form state) to
// our backend API. It also saves a jwt token to the local storage and pushes the
// user to "/tasks-home"
  signupSubmitHandler = (userInfo) => {
    fetch( "#", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({ user: userData.user}, () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/tasks-home");
        });
      });
  }

// login handler sends over userInfo body
  loginSubmitHandler = (userInfo) => {
  fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accepts": "application/json"
    },
    body: JSON.stringify( userInfo )
  })
    .then(resp => resp.json())
    .then(
      userData => this.setState({ user: userData.user }),
      localStorage.setItem("token", userData.jwt),
      console.log(localStorage),
      () => this.props.history.push("/tasks-home")
    );
};

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/tasks-home" render={() => <TasksHome user={this.state.user}/>} />
          <Route path="/signup" render={() => <Login user={this.state.user}/>} />
          <Route path="/login" render={() => <Signup signupSubmitHandler={this.signupSubmitHandler} user={this.state.user}/>} />
          <Route exact path="/" component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
