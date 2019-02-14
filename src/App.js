import React, { Component } from 'react';
import Trip from './Trip'
import New from './New'
import './App.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'

// const trips = [
//   {
//     place: 'Hollywood Blvd',
//     review: {
//       dateAttended: 'July 10th, 2018',
//       favExperience: 'Seeing celebs',
//       leastFav: 'Hot weather',

//     }
//   },
//   {
//     place: 'Las Vegas',
//     review: {
//       dateAttended: 'May 22, 2017',
//       favExperience: 'Lotta crazy peeps',
//       leastFav: 'Leaving to go home',
      
//     }
//   }
// ]


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {stuff: []}


    this.tripsFilter = function(trip) { 
      return (trip.place.indexOf(this.state.input) != -1) 
    };
    
    }


componentDidMount() {
axios.get("http://localhost:1776")
  .then(res => {

    this.setState({stuff: res.data})
  })
}

  render() {  

      let boxes = this.state.stuff.map((stuff, index) => {
        return <Trip key={index} trip={stuff} />
      })



    return (
      <div>      
        <h1 className='title'>Trips</h1>

        <Link to="/newtrip">
        <div className="add new">ADD NEW</div>
        </Link>
        <div className='container'>

        <Switch>
            
            <Route path="/newtrip" component={New} />

        </Switch>

      
        {boxes}
        </div>

      
      </div>
    );
  }
}

export default App;