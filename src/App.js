import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import CreateTask from './Components/CreateTask';
import CurrentTask from './Components/CurrentTask';
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'

class App extends Component {

  state = {
    user: {}
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/create-task" render={() => <CreateTask user={this.state.user}/>} />
          <Route path="/current-task" render={() => <CurrentTask user={this.state.user}/>} />
          <Route path="/signup" render={() => <Login user={this.state.user}/>} />
          <Route path="/login" render={() => <Signup user={this.state.user}/>} />
          <Route exact path="/" component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default App;
