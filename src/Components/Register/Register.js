import React, { Component } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {register} from '../../Api/Api'
import './Register.css'

class Register extends Component {

  state = {
    userName: '',
    password: ''
  }

  handleClick = () => {
    const user = {
      username: this.state.userName,
      password: this.state.password
    }
    
    register(user)
      .then( () => this.props.history.push('./login'))
      .catch( error => console.error(error))
  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({ [key] : value})
  }

    
  render() {
    return (
      <div className = 'register-body' >
      
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
        
        <Form size='large'>
          <Segment stacked>
        <img  src = './lazyeat.png' alt = '' />
            <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='user name' 
              name = 'userName' 
              value = {this.state.userName}
              onChange = {this.handleChange}
              />
            <Form.Input
              name = 'password'
              value = {this.state.password}
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange = {this.handleChange}
            />

            <Button color='teal' fluid size='large' onClick = {this.handleClick}>
              Register
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

export default Register;