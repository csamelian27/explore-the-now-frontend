import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import CreateTask from './Components/CreateTask';
import CurrentTask from './Components/CurrentTask';
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'

// console.log(process.env.REACT_APP_API_KEY)
// console.log("JWT", process.env.REACT_APP_JWT_KEY)

class App extends Component {


  state = {
    user: {}
  }

// Sign up submit handler posts userInfo (which is the current sign up form state) to
// our backend API. It also saves a jwt token to the local storage and pushes the
// user to "/create-task"
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
          this.props.history.push("/create-task");
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/create-task" render={() => <CreateTask user={this.state.user}/>} />
          <Route path="/current-task" render={() => <CurrentTask user={this.state.user}/>} />
          <Route path="/signup" render={() => <Login user={this.state.user}/>} />
          <Route path="/login" render={() => <Signup signupSubmitHandler={this.signupSubmitHandler} user={this.state.user}/>} />
          <Route exact path="/" component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default App;
