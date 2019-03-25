import React from 'react';

class CreateTask extends React.Component {

  state = {
    term: '',
    location: '',
    price: '',
    radius: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="create-task">
        <h1 onClick={() => this.props.handleCategories(this.state)}>Create Task</h1>
        <form>
          <input type="text" name="term" placeholder="term" value={this.state.term} onChange={this.handleChange} />
          <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleChange} />
          <input type="text" name="price" placeholder="price" value={this.state.price} onChange={this.handleChange} />
          <input type="text" name="radius" placeholder="radius" value={this.state.radius} onChange={this.handleChange} />
          <input type="submit" value="Submit!" onSubmit={console.log} />
        </form>
      </div>
    )
  }
}

export default CreateTask
