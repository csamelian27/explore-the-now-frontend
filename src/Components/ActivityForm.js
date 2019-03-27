import React from 'react';
import ActivityCard from './ActivityCard'

class ActivityForm extends React.Component {

  state = {
    term: '',
    location: '',
    price: this.props.user.price,
    radius: this.props.user.radius,
    count: 3
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleInput(this.state)
    this.setState({
      term: '',
      location: '',
      price: this.props.user.price,
      radius: this.props.user.radius
    })
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
      <div>
<<<<<<< HEAD
      <div className="login wrapper">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 class="form-signin-heading">Create Task</h1>
          <label for="term">Search term</label>
          <input className="form-control" type="text" name="term" placeholder="term" value={this.state.term} onChange={this.handleChange} />
=======
      <div className="form-style-6">
        <h1>Search Activities</h1>
        <form onSubmit={this.handleSubmit}>
        <label for="term">Search term</label>
          <input type="text" name="term" placeholder="term" value={this.state.term} onChange={this.handleChange} />
>>>>>>> 38b3fc04ccde40d0519959d6173ffddf4edadf17
          <label for="location">Zip Code</label>
          <input className="form-control" type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleChange} />
          <label for="location">Price from 1-4</label>
          <input className="form-control" type="text" name="price" placeholder="price" value={this.state.price} onChange={this.handleChange} />
          <label for="radius">Distance in meters</label>
<<<<<<< HEAD
          <input className="form-control" type="text" name="radius" placeholder="radius" value={this.state.radius} onChange={this.handleChange} />
          <button class="btn btn-lg btn-primary btn-block" type="submit" value="Submit!"> Search </button>
=======
          <input type="text" name="radius" placeholder="radius" value={this.state.radius} onChange={this.handleChange} />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Submit!</button>
>>>>>>> 38b3fc04ccde40d0519959d6173ffddf4edadf17
        </form>
        </div>
        {activityCards}
        {this.props.businesses.length > 0 ? <button onClick={this.handleReroll}>Re-roll</button> : null}
      </div>
    )
  }
}

export default ActivityForm
