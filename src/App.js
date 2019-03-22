import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';

class App extends Component {

  state = {
    user: {}
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/createtask" component={<CreateTask />}/>
          <Route path="/" component={<CurrentTask />}/>
          <Route path="/" component={<Home />}/>
        </Switch>

      </div>
    );
  }
}

export default App;
