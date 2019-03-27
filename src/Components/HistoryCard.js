import React from 'react';

class HistoryCard extends React.Component {

  render() {
    console.log(this.props.activity);
    return (
      <div className="experience-card">
        <div className="history-cards">
          <div className="history-card">
        <img id="history-img" src={this.props.activity.image_url}/>
            <div className="card-title">
              <h2>
                  {this.props.activity.name}<br></br>
                  Rating: {this.props.activity.rating}<br></br>
                  <a href={this.props.activity.url}>Visit Website</a><br></br>
              </h2>
            </div>
            <div className="card-flap flap1">
              <div className="card-description">
                This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
              </div>
              <div className="card-flap flap2">
                <div className="card-actions">
                  <a href="#" className="btn">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryCard
