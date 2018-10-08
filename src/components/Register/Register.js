import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
  } from 'reactstrap';
  import { withRouter } from "react-router-dom";
  import { withAlert } from 'react-alert';

  class Register extends React.Component {
    constructor(props) {
        super(props);
        this.props.history,
          this.state = {
          'email': '',
          'password': '',
          'name': '',
          'bio': '',
          validate: {
            emailState: '',
            passwordState: '',
            nameState: '',
          },
        }
        this.handleChange = this.handleChange.bind(this);
      }

      onSubmitSignIn = () => {
    fetch( 'https://fierce-fortress-43881.herokuapp.com/register'||'http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        bio: this.state.bio
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.alert.success(`Welcome to UniVResity, ${user.name}, you are now registered and logged in!`)
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
        const { email, password, name, bio } = this.state;
        //const { auth } = this.props;
        const isEnabled = this.state.validate.emailState === 'has-success' && this.state.validate.passwordState === 'has-success' && this.state.validate.nameState === 'has-success';
        return (
          <Container className="app">
            <h3>Register</h3>
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
          <Label for="exampleFile">Upload Profile Photo</Label>
          <Input type="file" name="file" id="exampleFile"/>
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
              <FormGroup>
          <Label for="exampleText">Bio (optional)</Label>
          <Input 
            type="textarea" 
            name="bio" 
            id="bio" 
            placeholder="Tell us a little about yourself" 
            value={ bio }
            onChange={ (e) => {
                        this.handleChange(e)
                      } }
            
            />
        </FormGroup>
        </Col>
              <Button disabled={!isEnabled} color="primary" onClick={this.onSubmitSignIn} block>Join</Button>
              <Link to="/login">
                <Button outline color="secondary" block>Already have an account? Sign in!</Button>
              </Link>
         </Form>
         </Container>

        );

      }
 
    }
    
  
  
  export default withRouter (withAlert(Register));