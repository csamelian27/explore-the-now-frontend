import React from 'react';
import CreateTask from '../Components/CreateTask';
import CurrentTask from '../Components/CurrentTask';

class TasksHome extends React.Component {
render() {
  return (
    <div className="current-task">
      <h1>Tasks Home</h1>
      <CreateTask />
      <CurrentTask />
    </div>
  )
}
}

export default CurrentTask
