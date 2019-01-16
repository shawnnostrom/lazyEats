import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {login} from '../../Redux/actions';
import './Login.css';


class Login extends Component {

  state = {
    username: '',
    password: ''
  }
  handleClick = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(user)
  }
  
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key] : value})
  }
  
render() {
  return (
    <div className = 'login-body'>
      
      <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <img src = '../Home/lazyeat.png' alt = ''/>
        <Form size='large'>
          <Segment stacked>
          <img src = './lazyeat.png' alt = ''/>
            <Form.Input 
            fluid icon = 'user' 
            iconPosition = 'left' 
            placeholder = 'username'
            name = 'username'
            value = {this.state.username}
            onChange = {this.handleChange}
            />
            <Form.Input
              fluid
              icon = 'lock'
              iconPosition = 'left'
              placeholder = 'Password'
              type = 'password'
              name = 'password'
              value = {this.state.password}
              onChange = {this.handleChange}
            />

            <Button color='teal' fluid size='large' onClick = {this.handleClick} className = 'login-btn'>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
  </div>
    )
  }
}

export default connect(null,{login})(Login);
