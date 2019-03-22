import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import CreateTask from './Components/CreateTask';
import CurrentTask from './Components/CurrentTask';
import Home from './Components/Home';

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
          <Route path="/" component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default App;
