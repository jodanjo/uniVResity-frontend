import React from 'react';
import {
    Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, UncontrolledAlert
  } from 'reactstrap';

  
  

  class Dashboard extends React.Component {
    constructor(props) {
        super(props);
      
      }
    
          render() {
            const { name, bio } = this.props;
        return (
            <div>
            <Container>
          <Row>
          <Col lg='4' md='6'>

            <Card style={{ width: '300px', marginTop:'20px', marginLeft:'10px', marginBottom:'5px'}}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle style={{fontWeight:'500', fontSize:'24px'}}>{`${name}`}</CardTitle>
                <CardText style={{textAlign:'left', marginTop:'10px'}}>{`${bio}`}</CardText>
              </CardBody>
            </Card>

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