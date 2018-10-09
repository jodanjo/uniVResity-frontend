import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, UncontrolledAlert
  } from 'reactstrap';
import UserCard from '../UserCard/UserCard';
import UserCreatedStreams from '../UserCreatedStreams/UserCreatedStreams';
import UserSavedStreams from '../UserSavedStreams/UserSavedStreams';
  


  const Dashboard = ({ user, streams  }) => {
  const d = new Date()
console.log(user); 
        return (
            <div>
            <Container>
          <Row>
          <Col lg='4' md='6'>
          <UserCard name={user.name} bio= {user.bio}/>
            </Col>
          <Col lg='8' md='6'>
              <UncontrolledAlert color="success" style={{marginTop:'20px'}}>
              <h4 className="alert-heading">Welcome to your dashboard!</h4>
      <p style={{textAlign:'left'}}>Here, you can watch your saved streams and launch, edit or delete your created streams!</p>
      <hr />
      <p className="mb-0" style={{textAlign:'left'}}>
          Tip: Adding a bio helps the UniVRestiy community to get to know you better.  
        </p>
    </UncontrolledAlert>
    <br/>
    <p style={{textAlign:'left'}}>Saved Streams</p>
    <hr/>
          <UserSavedStreams/>
    <br/>
    <p style={{textAlign:'left'}}>Created Streams</p>
    <hr />
          <UserCreatedStreams/>

    </Col>
    </Row>
            </Container>
          </div>
         
        );
      
    }
    
  
  
  export default Dashboard;