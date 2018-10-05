import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, UncontrolledAlert
  } from 'reactstrap';
import UserCard from '../UserCard/UserCard';
  
  

  class Dashboard extends React.Component {
    constructor(props) {
        super(props);
      
      }
          render() {
        return (
            <div>
            <Container>
          <Row>
          <Col lg='4' md='6'>
          <UserCard/>
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
    <br/>
    <p style={{textAlign:'left'}}>Created Streams</p>
    <hr />
    </Col>
    </Row>
            </Container>
          </div>
         
        );
      }
    }
    
  
  
  export default Dashboard;