import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import CurrentExperience from '../Components/CurrentExperience'
import HistoryContainer from './HistoryContainer'

class ExperiencesHome extends React.Component {

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
        .then(console.log)
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
        .then(console.log)
    } else if(e.target.className === 'fab4' || e.target.className === 'fa fa-calendar-times fa-3x') {
      console.log('cal x');
      fetch(`http://localhost:3000/api/v1/experiences/${businessInfo.id}`, {
        method: 'DELETE'
      })
      this.props.history.push('/activities-home')
      this.props.handleDeleteExp()
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
        .then(console.log)
    }
  }

  render() {
    return (
      <div className="current-task">
        <h1>Experiences Home</h1>
        {this.props.currentExperience ? <CurrentExperience currentExperience={this.props.currentExperience} handleSetCurrentExp={this.props.handleSetCurrentExp} handleExperienceCard={this.handleExperienceCard}/> : <HistoryContainer experiences={this.props.user.experiences} activities={this.props.user.activities} />}
      </div>
    )
  }
}

export default withRouter(ExperiencesHome)
