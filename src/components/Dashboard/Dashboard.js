import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, UncontrolledAlert, Button
  } from 'reactstrap';
  
  

  class Dashboard extends React.Component {
    constructor(props) {
        super(props);
      
      }
    
          render() {
        return (
            <div>
            <Container>
          <Row>
          <Col md='4'>
            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle style={{fontWeight:'500', fontSize:'24px'}}>User Name</CardTitle>
                <CardText style={{textAlign:'left', marginTop:'10px'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              </CardBody>
              <Button style={{marginBottom:'5px'}}  color="primary" block >Edit Bio</Button>
            </Card>
            </Col>
          
          <Col md='8'>
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