import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFavorites} from '../../Api/Api'
import {delFavorite} from '../../Api/Api'
import './Favorite.css'


class Favorite extends Component {

  state = {
    favorite: []
  }
  componentDidMount = () => {
     this.display()
  }
  
  display = () => {
    getFavorites({id:this.props.user.id})
      .then(res => {
        this.setState({ favorite : res.data})
      })
      .catch(error => console.log(error))
  }

  handleClick = (id) => {
    delFavorite(id)
    .then( () => this.display())
    .catch(error => console.error(error))
  }
  
  render() {
    const places = this.state.favorite.map(i => {
      return (
        <div className = 'fav-box'>
          <a href = {i.url} target = '_blank' rel ='noopener noreferrer' > 
          <h1 className = 'fav-title'>{i.name}</h1>
          <img src = {i.image} alt = ''  className = 'fav-img' />
          </a>
          <button className = 'fav-btn' onClick = {() => this.handleClick(i.id)} >del</button>
        </div>
      )
    })
    return (
      <div>
        <h1> Here are the places you like to eat {this.props.user.username} </h1>
        <button  > favs</button>
        <div className = 'fav-display'>
        {places}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(Favorite);