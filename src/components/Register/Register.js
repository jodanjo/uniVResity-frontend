import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback,
  } from 'reactstrap';

  class Register extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          validate: {
            emailState: '',
            passwordState: '',
            nameState: '',
          },
        }
        this.handleChange = this.handleChange.bind(this);
      }
    
      validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }

        validatePassword(e) {
          const pwRex = /^(?=.{8,})/;
          const { validate } = this.state
            if (pwRex.test(e.target.value)) {
              validate.passwordState = 'has-success'
            } else {
              validate.passwordState = 'has-danger'
            }
            this.setState({ validate })
          }

          validateName(e) {
            const nameRex = /^(?=.{3,})/;
            const { validate } = this.state
              if (nameRex.test(e.target.value)) {
                validate.nameState = 'has-success'
              } else {
                validate.nameState = 'has-danger'
              }
              this.setState({ validate })
            }
    
      handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }
    
      submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
      }
    render() {
        const { email, password, name } = this.state;
        const isEnabled = this.state.validate.emailState === 'has-success' && this.state.validate.passwordState === 'has-success' && this.state.validate.nameState === 'has-success';
        return (
          <Container className="app">
            <h2>Register</h2>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
            <Col>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="examplename"
                    placeholder="Full Name"
                    value={ name }
                    valid={ this.state.validate.nameState === 'has-success' }
                    invalid={ this.state.validate.nameState === 'has-danger' }
                    onChange={ (e) => {
                                this.validateName(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    Hello There! 
                  </FormFeedback>
                  <FormFeedback>
                    Please enter a valid name! 
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value={ email }
                    valid={ this.state.validate.emailState === 'has-success' }
                    invalid={ this.state.validate.emailState === 'has-danger' }
                    onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    That's a great looking email you've got there.
                  </FormFeedback>
                  <FormFeedback>
                    Uh oh! Looks like there is an issue with your email. Please input a correct email.
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    value={ password }
                    valid={ this.state.validate.passwordState === 'has-success' }
                    invalid={ this.state.validate.passwordState === 'has-danger' }
                    onChange={ (e) => {
                                this.validatePassword(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    That will work!
                  </FormFeedback>
                  <FormFeedback>
                  Password must be at least 8 characters long! 
                  </FormFeedback>
                </FormGroup>
              </Col>
              <Button disabled={!isEnabled} color="success">Submit</Button>
          </Form>
          </Container>
        );
      }
    }
    
  
  
  export default Register;