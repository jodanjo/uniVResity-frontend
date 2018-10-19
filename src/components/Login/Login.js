import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
  } from 'reactstrap';
  import { withRouter } from "react-router-dom";
  import { withAlert } from 'react-alert';
//import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
//import { error } from 'util';
 
  
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

    onSubmitSignIn = () => {
      fetch('https://fierce-fortress-43881.herokuapp.com/login', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(user => {
          if (user.id) {
            this.props.loadUser(user)
            //console.log(user.name);
            this.props.alert.success(`${user.name}, you are logged in!`)
            this.props.history.push("/")
            this.props.auth(true);
          } else {
            this.props.alert.error(JSON.stringify(user).replace(/^"(.+(?="$))"$/, '$1'));
          }
        })
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
    
      //prevents submission of the form when Submit button is clicked. Form data is submited by the onSubmitSignIn function.
      submitForm(e) {
        e.preventDefault();
      }
    
    render() {
        const { email, password } = this.state;
        return (
          <Container className="app" style={{background:'white'}}>
          <img style={{marginLeft:'75px'}}src="images/logo.jpg" height="55" width="185" alt="uniVresity" />
          <hr/>
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
              <Button type="submit" color="success" onClick={this.onSubmitSignIn} block>Submit
              </Button>
              <Link to="/register">
                <Button outline color="secondary" block >New to uniVResity? Register!</Button>
              </Link>
          </Form>
          
          </div>
          </Container>
        );
      }
    }
    
  
  
  export default withRouter(withAlert(Login));
  