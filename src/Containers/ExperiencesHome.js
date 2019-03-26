import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import CurrentExperience from '../Components/CurrentExperience'
import HistoryContainer from './HistoryContainer'

class ExperiencesHome extends React.Component {

  render() {
    return (
      <div className="current-task">
        <h1>Experiences Home</h1>
        {this.props.currentExperience ? <CurrentExperience currentExperience={this.props.currentExperience} handleSetCurrentExp={this.props.handleSetCurrentExp}/> : <HistoryContainer experiences={this.props.user.experiences} activities={this.props.user.activities} />}
      </div>
    )
  }
}

export default withRouter(ExperiencesHome)
