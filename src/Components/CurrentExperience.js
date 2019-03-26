import React from 'react';
import ExperienceCard from './ExperienceCard'

class CurrentExperience extends React.Component {
  render() {
    return (
      <div className="current-exp">
        <h1>Current Experience</h1>
        {this.props.currentExperience ? <ExperienceCard key={this.props.currentExperience.id} business={this.props.currentExperience} handleAddActivity={this.props.handleAddActivity} handleExperienceCard={this.props.handleExperienceCard} /> : null}
      </div>
    )
  }
}

export default CurrentExperience
