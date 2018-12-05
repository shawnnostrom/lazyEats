import React, { Component } from 'react'
import {connect}  from 'react-redux'
import './Dashboard.css'
import _ from 'lodash'
import {saveFavorite} from '../../Api/Api'
import {getFood} from '../../Api/Api'
import {logout} from '../../Api/Api'
import {getFavorites} from '../../Redux/actions'
import Food from '../Food/Food'


class Dashboard extends Component {

  state = {
    findFood: false,
    food: []
  }

  componentDidMount = () => {
    this.props.getFavorites({id:this.props.user.id})
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
      this.setState({findFood:true})
      getFood(location)
      .then( res => {

        this.setState({food : _.uniqBy(res.data.jsonBody.businesses, (e) => e.name) })
       })
       .catch( error => console.log(error))

      

    })
    
  }
  handleLogout = () => {
   logout()
    .then( () => this.props.history.push('./home'))
    .catch(error => console.error(error))
        
  }
  
  test = () => {
    console.log(this.props.user)
  }
  handleFavorite = (item) => {
    const [food] = this.state.food.filter(i => i.id === item)
    const favoritePlace = {
      itemId: item,
      name: food.name,
      image: food.image_url,
      url: food.url,
      userId: this.props.user.id
    }
    saveFavorite(favoritePlace)

  }
  findFood = () => {
    if(!this.state.findFood){
      return (
        <button onClick = {this.yelp} > Find Food</button>
      )
    }else{
      
    }
  }
  handleFavorite = () => {
    this.props.history.push('./favorite')
  }
  

  render() {
    
  
    const restaurants = this.state.food.map(i =>  {
      
      return (
        <Food 
        url = {i.url}
        name = {i.name}
        image_url = {i.image_url}
        id = {i.id}

        
        />
      )
    })
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        {this.findFood()}
        <button onClick = {this.handleFavorite} > Favorites</button>
        <button onClick = {this.handleLogout} > Logout </button>
        
        <div className = 'dash-display'>
       
        {restaurants}
        </div>
      </div>
    )
  }
}
const mapSateToProps = (state) => {
  return {
    user : state.user.user,
    favorite: state.user.favorites
  }
}

export default  connect(mapSateToProps,{getFavorites})(Dashboard)