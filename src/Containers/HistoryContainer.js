import React from 'react';
import HistoryCard from '../Components/HistoryCard'

class HistoryContainer extends React.Component {

  generateHistoryCards = () => {
    if(this.props.experiences) {
      let userActivities = this.props.experiences.map(exp => this.props.activities.find(act => act.id === exp.activity_id))
      let historyCards = userActivities.map(act => <HistoryCard key={act.id} activity={act} />)
      return historyCards
    }
  }
  render() {
    return (
      <div>
        <h1 className="headerz" >Past Experiences</h1>
          <div className="history-home">
            {this.props.experiences ? this.generateHistoryCards() : 'Go Gain Experiences!'}
        </div>
      </div>
    )
  }
}

export default HistoryContainer
