import React from 'react';
import ActivityCardwithTime from './ActivityCardwithTime'

class SelectedActivityContainer extends React.Component {
  render() {
    return (
      <div className="current-task">
        <h1>Selected Task</h1>
        {this.props.SelectedActivityContainer ? <ActivityCardwithTime business={this.props.SelectedActivityContainer} handleAddActivity={this.props.handleAddActivity} button="fa fa-check fa-3x" /> : null}
      </div>
    )
  }
}
export default SelectedActivityContainer
