import React, { Component } from 'react';
import Trip from './Trip'
import './App.css';

const trips = [
  {
    place: 'Hollywood Blvd',
    review: {
      dateAttended: 'July 10th, 2018',
      favExperience: 'Seeing celebs',
      leastFav: 'Hot weather',

    }
  },
  {
    place: 'Las Vegas',
    review: {
      dateAttended: 'May 22, 2017',
      favExperience: 'Lotta crazy peeps',
      leastFav: 'Leaving to go home',
      
    }
  }
]


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {trips, input: ""}


    this.tripsFilter = function(trip) { 
      return (trip.place.indexOf(this.state.input) != -1) 
    };
    
    }

  render() {  
    return (
      <div>      
        <h1 className='title'>Trips</h1>

        <div className='container'>

        {this.state.trips.filter(this.tripsFilter.bind(this)).map(function(trip, index) 
        { return <Trip key={index} trip={trip} /> } 
        )}
        </div>

      
      </div>
    );
  }
}

export default App;