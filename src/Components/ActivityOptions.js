import React from 'react';
import ActivityCard from './ActivityCard'

class ActivityOptions extends React.Component {

  state = {
    count: 3
  }

  handleReroll = () => {
    this.setState({
      count: this.state.count + 3
    })
  }

  render() {
    const activityCards = this.props.businesses.map(businessObj => <ActivityCard key={businessObj.id} business={businessObj} handleAddActivity={this.props.handleAddActivity} button="fa fa-plus fa-3x" />).slice(this.state.count - 3, this.state.count)
    console.log(activityCards);
    return (
      <div className="create-task">
        <h1>Create Task</h1>
        {activityCards}
        {this.props.businesses.length > 0 ? <button onClick={this.handleReroll}>Re-roll</button> : null}
      </div>
    )
  }
}

export default ActivityOptions
