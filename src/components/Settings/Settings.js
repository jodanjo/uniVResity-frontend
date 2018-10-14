import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback, UncontrolledAlert, Row
  } from 'reactstrap';
  import { withRouter } from "react-router-dom";
  import UserCard from '../UserCard/UserCard';
  import swal from 'sweetalert';


  class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.props.history;
          this.state = {
          'email': '',
          'password': '',
          'bio': '',
          'picture' : '',
          'currentEmail': this.props.user.email ,
          validate: {
            emailState: '',
            passwordState: '',
            pictureState:'',
     
          },
        }
        this.handleChange = this.handleChange.bind(this);
      }

      user = this.props.user;

      onEmailChange = (event) => {
    this.setState({email: event.target.value})
}
       
     

      onSubmitEmailChange = () => {
    fetch('http://localhost:3000/settingsemail', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.user.id,
        email:this.state.email
      })
    })
      .then(response=> response.json())
      .then(user => {
        if (user.id) {
          this.setState({currentEmail : user.email})
          this.setState({email: ''})
          this.props.history.push("/settings")
          swal({
            title: "Email updated successfully!",
            icon: "success",
          });
        } else {
          swal({
            title: "Something went wrong!",
            text: "Please try again",
            icon: "warning",
          });
          //console.log("Did not work")
            
        }   
      })
  }

  onSubmitPasswordChange = () => {
    fetch('http://localhost:3000/settingspassword', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.user.id,
        password:this.state.password
      })
    })
      .then(response=> response.json())
      .then(user => {
        if (user.id) {
          this.setState({password: ''})
          this.props.history.push("/settings")
          swal({
            title: "Password updated successfully!",
            icon: "success",
          });
        } else {
          swal({
            title: "Something went wrong!",
            text: "Please try again",
            icon: "warning",
          });
          //console.log("Did not work") 
        }   
      })
  }

   onSubmitBioChange = () => {
    fetch('http://localhost:3000/settingsbio', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: this.props.user.id,
        bio:this.state.bio
      })
    })
      .then(response=> response.json())
      .then(user => {
        if (user.id) {
          this.setState({bio: ''})
          this.props.history.push("/settings")  
          swal({
            title: "Bio was updated successfully!",
            icon: "success",
            
          });
        } else {
          swal({
            title: "Something went wrong!",
            text: "Please try again",
            icon: "warning",
           
          });
          //console.log("Did not work")
            
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
        const isEnabledEmail = this.state.validate.emailState === 'has-success';
        const isEnabledPassword = this.state.validate.passwordState === 'has-success';
        return (




          <Container>
          <br/>
          <br/>

            <h3>Settings</h3>
            <div>
            <Container>
          <Row>
          <Col lg='4' md='6'>
          <UserCard name={this.user.name} bio= {this.user.bio} photo= {this.user.photo}/>
          <br/>
          <FormGroup>
          <Label for="exampleFile" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Change Profile Picture</Label>
          <Input style={{marginLeft: '27px'}} type="file" name="file" id="exampleFile"/>
        </FormGroup>
        </Col>
       



            
          <Col lg='8' md='6'>
              <UncontrolledAlert color="success" style={{marginTop:'20px'}}>
              <h4 className="alert-heading">Settings Page</h4>
      <p style={{textAlign:'left'}}>Change your Email Address, Password, Photo Avatar and Biography.</p>    
    </UncontrolledAlert>
    <br/>
    <p style={{textAlign:'left'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account Settings</p>
    <hr/>
  
        

            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
            <Col>
                <FormGroup>
                  <Label>Change Email</Label>
                  <p style={{textAlign:'left'}}> Current Email Address: {this.state.currentEmail} </p>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Change Email Address"
                    value={ email }
                    valid={ this.state.validate.emailState === 'has-success' }
                    invalid={ this.state.validate.emailState === 'has-danger' }
                    onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                                
                              } }
                    
                  />
                  <FormFeedback valid>
                    Valid Email Change. 
                  </FormFeedback>
                  <FormFeedback>
                    Uh oh! Looks like there is an issue with your email. Please input a correct email.
                  </FormFeedback>
                </FormGroup>
                <Button disabled={!isEnabledEmail} color="primary" onClick={this.onSubmitEmailChange} block>Submit Change</Button>
              </Col>
              </Form>



              <Form className="form" onSubmit={ (e) => this.submitForm(e) }>

              <Col>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Change Password"
                    value={ password }
                    valid={ this.state.validate.passwordState === 'has-success' }
                    invalid={ this.state.validate.passwordState === 'has-danger' }
                    onChange={ (e) => {
                                this.validatePassword(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    Valid Password Change.
                  </FormFeedback>
                  <FormFeedback>
                  Password must be at least 8 characters long! 
                  </FormFeedback>
                </FormGroup>
                <Button disabled={!isEnabledPassword} color="primary" onClick={this.onSubmitPasswordChange} block>Submit Change</Button>
                </Col>
                </Form>


                 <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
                <Col>
              <FormGroup>
          <Label for="exampleText">Change Bio</Label>
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
        <Button  color="primary" onClick={this.onSubmitBioChange} block>Submit Change</Button>
        </Col>
              
         </Form>
           </Col>
</Row>
         </Container>
        </div>
         </Container>

        );

      }
 
    }
    
  
  
  export default withRouter(Settings);