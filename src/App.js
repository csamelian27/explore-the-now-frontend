import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import ActivitiesHome from './Containers/ActivitiesHome'
import ExperiencesHome from './Containers/ExperiencesHome'
import Home from './Components/Home';
import Login from './Components/Login'
import Signup from './Components/Signup'

// console.log(process.env.REACT_APP_API_KEY)
// console.log("JWT", process.env.REACT_APP_JWT_KEY)

class App extends Component {

  state = {
    user: {},
    currentExperience: null,
    currentActivity: null
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
            "Authorization": `Bearer ${token}`
          }
        })
          .then(resp => resp.json())
          .then(user => {
            this.setState({ user }, () => {
              console.log(user);
              let exp = user.experiences.find(exp => !exp.complete)
              if(exp) {
                let act = user.activities.find(act => act.id === exp.activity_id)
                this.props.history.push("/experiences-home")
                this.setState({currentExperience: exp, currentActivity: act})
              } else {
                this.props.history.push("/activities-home");
              }
            });
          })
      : this.props.history.push("/signup");
  };

// Sign up submit handler posts userInfo (which is the current sign up form state) to
// our backend API. It also saves a jwt token to the local storage and pushes the
// user to "/activities-home"
  signupSubmitHandler = (userInfo) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
      .then(resp => resp.json())
      .then(userData => {
        console.log(userData);
        this.setState({ user: userData.user}, () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/activities-home");
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
    body: JSON.stringify({user: userInfo})
  })
    .then(resp => resp.json())
    .then(userData => {
      console.log(userData);
      if(userData.message) {
        this.props.history.push("/login");
      } else {
        this.setState({ user: userData.user })
        localStorage.setItem("token", userData.jwt)
        this.props.history.push("/activities-home")
      }
    });
  };

  handleExperienceCard = (e, businessInfo) => {
    e.persist()
    if(e.target.className === 'fab3' || e.target.className === 'fa fa-thumbs-up fa-3x') {
      console.log('thumbs up');
      fetch(`http://localhost:3000/api/v1/experiences/${businessInfo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({worth_it: true})
      })
        .then(resp=>resp.json())
        .then(nada => {
          e.target.id = 'green'
        })
    } else if(e.target.className === 'fab2' || e.target.className === 'fa fa-thumbs-down fa-3x') {
      console.log('thumbs down');
      fetch(`http://localhost:3000/api/v1/experiences/${businessInfo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({worth_it: false})
      })
        .then(resp=>resp.json())
        .then(nada => {
          e.target.id = 'red'
        })
    } else if(e.target.className === 'fab4' || e.target.className === 'fa fa-calendar-times fa-3x') {
      console.log('cal x');
      fetch(`http://localhost:3000/api/v1/experiences/${businessInfo.id}`, {
        method: 'DELETE'
      })
      this.props.history.push('/activities-home')
      this.handleDeleteExp()
    } else if(e.target.className === 'fab' || e.target.className === 'fa fa-calendar-check fa-3x') {
      console.log('cal check');
      fetch(`http://localhost:3000/api/v1/experiences/${businessInfo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({complete: true})
      })
      .then(resp=>resp.json())
      .then(userObj => {
        this.props.history.push('/activities-home')
        this.setState({
          currentExperience: null,
          user: userObj
        })
      })
    }
  }

  handleConfirmActivity = (activityInfo, mins) => {
    fetch('http://localhost:3000/api/v1/activities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({activity: {term: activityInfo.categories[0].title, location: activityInfo.location.display_address.join(", "), name: activityInfo.name, image_url: activityInfo.image_url, url: activityInfo.url, rating: activityInfo.rating, display_phone: activityInfo.display_phone}})
    }).then(resp => resp.json())
      .then(activity => {
        fetch('http://localhost:3000/api/v1/experiences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
          },
          body: JSON.stringify({experience: {current_time: new Date().getTime().toString(), set_minutes: mins.setMinutes, user_id: this.state.user.id, activity_id: activity.id}})
        }).then(resp => resp.json())
          .then(experience => this.setState({
            currentExperience: experience
          }, () => this.props.history.push("/experiences-home")))
      })
  }

  handleDeleteExp = () => {
    this.setState({
      currentExperience: null
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Switch>
          <Route path="/activities-home" render={() => <ActivitiesHome user={this.state.user} handleConfirmActivity={this.handleConfirmActivity}/>} />
          <Route path="/experiences-home" render={() => <ExperiencesHome user={this.state.user} currentExperience={this.state.currentExperience} currentActivity={this.state.currentActivity} handleExperienceCard={this.handleExperienceCard} handleSetCurrentExp={this.handleSetCurrentExp} handleDeleteExp={this.handleDeleteExp} />} />
          <Route path="/login" render={() => <Login loginSubmitHandler={this.loginSubmitHandler} user={this.state.user}/>} />
          <Route path="/signup" render={() => <Signup signupSubmitHandler={this.signupSubmitHandler} user={this.state.user}/>} />
          <Route exact path="/" component={Home}/>
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
