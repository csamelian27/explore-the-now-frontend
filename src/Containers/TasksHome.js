import React from 'react';
import CreateTask from '../Components/CreateTask';
import CurrentTask from '../Components/CurrentTask';

class TasksHome extends React.Component {

  state = {
    categories: []
  }

  handleCategories = (userInput) => {
    fetch(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${userInput.term}&location=${userInput.location}&open_now=true&radius=${userInput.radius}&price=${userInput.price}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        'Authorization': 'Bearer ' + `${process.env.REACT_APP_API_KEY}`
      }
    })
      .then(resp => resp.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="current-task">
        <h1>Tasks Home</h1>
        <CreateTask handleCategories={this.handleCategories} />
        <CurrentTask />
      </div>
    )
  }
}

export default TasksHome
