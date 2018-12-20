import React, { Component } from 'react';
import {connect}  from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './Dashboard.css';
import _ from 'lodash';
import {saveFavorite} from '../../Api/Api';
import {getFood} from '../../Api/Api';
import {getFavorites} from '../../Redux/actions';
import Food from '../Food/Food';
import Navbar from '../Navbar/Navbar'



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
        
        
        
        <button className = 'find-food-btn'  onClick = {this.yelp} > Find Food</button>
        
      )
    }
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
      <div className = 'dashboard-body'>
        <Navbar page = {this.props.history.push}/>
        
        <div className = 'dashboard-title-background'>
            <div className='overlay1'/>
            <h2 id = 'dashboard-title'>Welcome {this.props.user.username}</h2>
        </div>
        {this.findFood()}
        
        
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