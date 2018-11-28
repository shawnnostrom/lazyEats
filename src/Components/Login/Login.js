import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import {login} from '../../Api/Api'


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
    login(user)
      .then(res => console.log(res))
      .catch(error => console.log(error))

  }
  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({ [key] : value})
  }

render() {
  return (
    <div>
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
        <Header as='h2' color='teal' textAlign='center'>
           Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
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

            <Button color='teal' fluid size='large' onClick = {this.handleClick}>
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

export default Login;
