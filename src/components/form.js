import React, { Component } from 'react';
//import axios from 'axios';
import { Divider,Card, Form, Input, Button,Label} from 'semantic-ui-react';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from 'react-reactive-form'
 
export default class Login extends Component {
  // Initialize the empty group control
  loginForm = FormBuilder.group({})
 
  handleSubmit = e => {
    console.log('Form values', this.loginForm.value)
    e.preventDefault()
  
  }
  render() {
    return (
        <Card>
          <Card.Content>
            <Card.Header>Sign Up Form</Card.Header>
         </Card.Content>
         <Divider />
      <FieldGroup
        control={this.loginForm}
        render={({ invalid }) => (
          <Form onSubmit={this.handleSubmit}>
            <FieldControl
              name="firstname"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError}) => (
                <div>
                  <Label>First Name :</Label>
                  <Input placeholder={'* Enter Your First Name'} {...handler()} />
                  <span>
                    {touched && hasError('required') && 'Username is required'}
                  </span>
                </div>
              )}
            />
            <Divider />
            <FieldControl
              name="lastname"
              render={({ handler }) => (
                <div>
                  <Label>Last Name  :</Label>
                    <Input placeholder={'Enter Your Last Name'} {...handler()} />
                </div>
              )}
            />
            <Divider />
            <FieldControl
              name="email"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError }) => (
                <div>
                  <Label>Email Id        :</Label>
                    <Input type="email" placeholder={'*Enter Your Email'} {...handler()} />
                    <span>
                      {touched && hasError('required') && 'Email is required'}
                  </span>
                </div>
              )}
            />
            <Divider />
            <FieldControl
              name="password"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError }) => (
                <div>
                  <Label>Password       :</Label>
                    <Input type="password" placeholder={'*Enter Your Password'} {...handler()} />
                    <span>
                      {touched && hasError('required') && 'Password is required'}
                  </span>
                </div>
              )}
            />
            <Divider />
            <FieldControl
              name="Mobileno"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError }) => (
                <div>
                  <Label>Mobile No   :</Label>
                    <Input placeholder={'*Enter Your Mobile Number'} {...handler()} />
                    <span>
                      {touched && hasError('required') && 'Username is required'}
                  </span>
                </div>
              )}
            />
            <Divider />
            <Button color='teal' type="submit" disabled={invalid}>
              Sign Up
            </Button>
          </Form>
        )}
      />
     
     </Card>
    )
  }
}