import React from 'react';
import ActivityCard from './ActivityCard'

class CurrentTask extends React.Component {
render() {
  return (
    <div className="current-task">
      <h1>Selected Task</h1>
      {this.props.currentTask ? <ActivityCard business={this.props.currentTask} handleAddActivity={this.props.handleAddActivity} button="fa fa-check fa-3x" /> : null}
    </div>
  )
}
}

export default CurrentTask
