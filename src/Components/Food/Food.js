import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {saveFavorite} from '../../Api/Api'
import {delFavorite} from '../../Api/Api'
import {connect} from 'react-redux'


class Food extends Component {
  state = {
    favorite:false
  }
  favorite = (id) => {
    if (!this.state.favorite) {
      return (
        <button  onClick = {this.addFavorite} className='fav-btn' >
          <i aria-hidden='true' className='heart outline icon' />
        </button>
      )
      
    }else {
      return (
        <button onClick = {() => this.deleteFavorite(id)} className='fav-btn' >
          <i aria-hidden='true' className='heart icon' />
        </button>
      )
    }
  }
  addFavorite = () => {
    const favoritePlace = {
      itemId: this.props.id,
      name: this.props.name,
      image: this.props.image_url,
      url: this.props.url,
      userId: this.props.user.id
    }
    this.setState({favorite : true})
    saveFavorite(favoritePlace)
  }
  deleteFavorite = (id) => {
    this.setState({favorite : false})
    console.log(id)
    delFavorite(id)
  }

  render() {


    return (
      <div className = 'item-box'> 
      
          <a href = {this.props.url} target = '_blank' rel ='noopener noreferrer' > 
          <h1 className = 'item-title'>{this.props.name}</h1>
          <img src = {this.props.image_url} alt = ''  className = 'item-img' />
          </a>
          {this.favorite(this.props.id)}
          {/* <button className = 'fav-btn' onClick = {() => this.handleFavorite(this.props.id)}> fav </button>
          <button className = 'del-btn' onClick = {() => this.del(this.props.id)}> del</button> */}
        </div>
      
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Food);