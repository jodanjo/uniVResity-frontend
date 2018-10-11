import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, UncontrolledAlert, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
  } from 'reactstrap';
import UserCard from '../UserCard/UserCard';
import UserCreatedStreams from '../UserCreatedStreams/UserCreatedStreams';
import UserSavedStreams from '../UserSavedStreams/UserSavedStreams';






  const Settings = ({ user, streams  }) => {
  const d = new Date()




console.log(user); 
        return (
            <div>
            <Container>
          <Row>
          <Col lg='4' md='6'>
          <UserCard name= "Current Profile Picture" bio =" "/>
          <br/>
          <FormGroup>
          <Label for="exampleFile" >Change Profile Picture</Label>
          <Input type="file" name="file" id="exampleFile"/>
        </FormGroup>



            </Col>
          <Col lg='8' md='6'>
              <UncontrolledAlert color="success" style={{marginTop:'20px'}}>
              <h4 className="alert-heading">Settings Page</h4>
      <p style={{textAlign:'left'}}>Change your Email Address, Password, Photo Avatar and Biography.</p>    
    </UncontrolledAlert>
    <br/>
    <p style={{textAlign:'left'}}>Account Settings</p>
    <hr/>
    

     <Form>
        <FormGroup>
          <Label for="changeEmail">Change Email</Label>
          <p style={{textAlign:'left'}}> Current Email Address: {user.email} </p>
          <Input type="email" name="email" id="changeEmail" placeholder="New Email Address" />
        </FormGroup>
        </Form>
<br/>
<Form>
        <FormGroup>
          <Label for="changePassword">Change Password</Label>
          <Input type="password" name="password" id="changePassword" placeholder="New Password" />
        </FormGroup>
        </Form>
        <br/>

        <Form>
        <FormGroup>
          <Label for="changeBio">Change Biography</Label>
          <Input type="textarea" name="text" id="changeBio" placeholder="New Biography" />
        </FormGroup>
        </Form>

     


          
    <br/>

    <hr />
          

    </Col>
    </Row>
            </Container>
          </div>
         
        );
      
    }
    
  
  export default Settings;