import React, { Component } from 'react'
import {connect}  from 'react-redux'
import './Dashboard.css'
import axios from 'axios'
import _ from 'lodash'

class Dashboard extends Component {

  state = {
    
    food: []
  }

  componentDidMount = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        
      })
    }else {
      alert('Browser does not support geolocation. ')
    }
  }
  

  yelp = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }
      axios.post('http://localhost:8080/api/yelp/info',location)
          .then( res => {

           this.setState({food : _.uniqBy(res.data.jsonBody.businesses, (e) => e.name) })
          })
          .catch( error => console.log(error))
      

    })
    
  }
  test = () => {
    console.log(this.state.food)
  
        
      
    
    
    }
  
  
  
  

  render() {
  
    const restaurants = this.state.food.map(i =>  {
      return (
        <div className = 'item-box'> 
          <a href = {i.url} target = '_blank' rel ='noopener noreferrer' > 
          <h1 className = 'item-title'>{i.name}</h1>
          <img src = {i.image_url} alt = ''  className = 'item-img' />
          </a>
        </div>
      )
    })
    return (
      <div>
        <button onClick = {this.yelp} > Find Food</button>
        <button onClick = {this.test} > find location</button>
        <div className = 'dash-display'>

        {restaurants}
        </div>
      </div>
    )
  }
}
const mapSateToProps = (state) => {
  return {
    location : state.location
  }
}

export default  connect(mapSateToProps)(Dashboard)