import React, { Component } from 'react';


class Trip extends Component {
  
  render() {
    return (
      <div className = 'trip'>
      <h2 className="place"> { this.props.trip.place }</h2>
        <h4><div className="part">Date Attended: </div> { this.props.trip.review.dateAttended }</h4>
        <h4><div className="part">Favorite experience: </div> { this.props.trip.review.favExperience }</h4>
        <h4><div className="part">Least favorite experience: </div> { this.props.trip.review.leastFav }</h4>

     
      </div>
    )}
}

export default Trip;