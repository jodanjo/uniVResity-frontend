import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback, InputGroupAddon, InputGroup
  } from 'reactstrap';
  import { FaLock } from '../../../node_modules/react-icons/fa';
  
  

  class Login extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          validate: {
            emailState: '',
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
        const { email, password } = this.state;
        const { onRouteChange } = this.props;
        return (
          <Container className="app" style={{background:'white'}}>
          <div>
            <h3>Sign In</h3>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
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
                  <Label for="examplePassword">Password</Label>        
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    value={ password }
                    onChange={ (e) => this.handleChange(e) }  
                />   
                </FormGroup>
              </Col>
              <Button color="primary" block>Submit</Button>
              <Button color="danger" block onClick={() => onRouteChange('register')}>New to uniVresity? Register!</Button>
              
          </Form>
          </div>
          </Container>
        );
      }
    }
    
  
  
  export default Login;