import React from 'react';
class ExperienceCard extends React.Component {

  createTimer = () => {
    let endDate = parseInt(this.props.business.current_time) + (parseInt(this.props.business.set_minutes) * 60 * 1000)
    let timer = setInterval(()=>{
      let now = new Date().getTime();
      let t = endDate - now;
      if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if(document.getElementById("timer-days")) {
          document.getElementById("timer-days").innerHTML = days +
          "<span class='label'>DAY(S)</span>";
          document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
          "<span class='label'>HR(S)</span>";
          document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
          "<span class='label'>MIN(S)</span>";
          document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
          "<span class='label'>SEC(S)</span>";
        }} else {
          clearInterval(timer)
          document.getElementById("timer").innerHTML = "The countdown is over!";
      }
    }, 1000)
  }

  render() {
    console.log(this.props.business);
    return (
      <div className="experience-card">
        <div className="card">
        <div className="thumbnail"><img className="left" src={this.props.business.activity ? this.props.business.activity.image_url : this.props.activity.image_url}/></div>
        <div className="right">
          <h1>{this.props.business.activity ? this.props.business.activity.name : this.props.activity.name}</h1>
          <div className="author">
            <h2>{this.props.business.activity ? this.props.business.activity.term : this.props.activity.term}</h2>
          </div>
          <div className="separator"></div>
          <p>Location: {this.props.business.activity ? this.props.business.activity.location : this.props.activity.location}</p>
          <p>Rating: {this.props.business.activity ? this.props.business.activity.rating : this.props.activity.rating}</p>
        </div>
        <ul>
          <li><a href={this.props.business.activity ? this.props.business.activity.url : this.props.activity.url} target="_blank">Visit Website</a></li>
          <li><a href={this.props.business.activity ? this.props.business.activity.display_phone : this.props.activity.display_phone} target="_blank">Call Business</a></li>
        </ul>
        <div class="container">
          <p id="timer">
              <span id="timer-days">{this.createTimer()}</span>
              <span id="timer-hours"></span><br></br>
              <span id="timer-mins"></span>
              <span id="timer-secs"></span>
          </p>
        </div>
        <div className="fab3" onClick={(e) => this.props.handleExperienceCard(e, this.props.business)}><i className='fa fa-thumbs-up fa-3x'></i></div>
        <div className="fab2" onClick={(e) => this.props.handleExperienceCard(e, this.props.business)}><i className='fa fa-thumbs-down fa-3x'></i></div>
        <div className="fab4" onClick={(e) => this.props.handleExperienceCard(e, this.props.business)}><i className='fa fa-calendar-times fa-3x'></i></div>
        <div className="fab" onClick={(e) => this.props.handleExperienceCard(e, this.props.business)}><i className='fa fa-calendar-check fa-3x'></i></div>
        </div>
      </div>
    )
  }
}
export default ExperienceCard
