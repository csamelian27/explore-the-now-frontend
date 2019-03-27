import React from 'react';
import ActivityForm from '../Components/ActivityForm';
import SelectedActivityContainer from '../Components/SelectedActivityContainer';

class ActivitiesHome extends React.Component {

  state = {
    businesses: [],
    SelectedActivity: null
  }

  handleInput = (userInput) => {
    fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${userInput.term}&location=${userInput.location}&open_now=true&radius=${userInput.radius}&price=${userInput.price}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': 'Bearer ' + `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(resp => resp.json())
      .then(businesses => this.setState({businesses: businesses.businesses}))
  }

  handleAddActivity = (activityInfo) => {
    this.setState({
      SelectedActivity: activityInfo
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="current-task">
        {this.state.SelectedActivity ? <SelectedActivityContainer SelectedActivityContainer={this.state.SelectedActivity} handleAddActivity={this.props.handleConfirmActivity} /> : <ActivityForm user={this.props.user} handleInput={this.handleInput} businesses={this.state.businesses} handleAddActivity={this.handleAddActivity} />}
      </div>
    )
  }
}

export default ActivitiesHome
