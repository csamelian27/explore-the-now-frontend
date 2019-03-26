import React from 'react';

class ExperienceCard extends React.Component {

  render() {
    console.log(this.props.business);
    return (
      <div className="experience-card">
        <div className="card">
        <div className="thumbnail"><img className="left" src={this.props.business.activity.image_url}/></div>
        <div className="right">
          <h1>{this.props.business.activity.name}</h1>
          <div className="author">
            <h2>{this.props.business.activity.term}</h2>
          </div>
          <div className="separator"></div>
          <p>Location: {this.props.business.activity.location}</p>
          <p>Rating: {this.props.business.activity.rating}</p>
        </div>
        <h5>{this.props.business.date.split(' G')[0]}</h5>
        <ul>
          <li><a href={this.props.business.activity.url} target="_blank">Visit Website</a></li>
          <li><a href={this.props.business.activity.display_phone} target="_blank">Call Business</a></li>
        </ul>
        <div className="fab3" onClick={() => this.props.handleAddActivity(this.props.business)}><i className='fa fa-thumbs-up fa-3x'></i></div>
        <div className="fab2" onClick={() => this.props.handleAddActivity(this.props.business)}><i className='fa fa-thumbs-down fa-3x'></i></div>
        <div className="fab" onClick={() => this.props.handleAddActivity(this.props.business)}><i className='fa fa-calendar-check fa-3x'></i></div>
        </div>
      </div>
    )
  }
}

export default ExperienceCard
