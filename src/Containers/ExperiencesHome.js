import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import CurrentExperience from '../Components/CurrentExperience'

class ExperiencesHome extends React.Component {

  render() {
    return (
      <div className="current-task">
        <h1>Experiences Home</h1>
        <CurrentExperience currentExperience={this.props.currentExperience} handleSetCurrentExp={this.props.handleSetCurrentExp}/>
      </div>
    )
  }
}

export default withRouter(ExperiencesHome)
