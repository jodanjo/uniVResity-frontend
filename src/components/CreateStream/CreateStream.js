import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, Row } from 'reactstrap';


class CreateStream extends React.Component {
  render() {
    return (
        <div style={{paddingLeft:'10px', paddingRight:'10px', marginTop:'30px', marginLeft:'10px', marginRight:'10px', textAlign:'left'}}>
      <Form>
        <Container>
          <h3 style={{marginBottom:'30px', marginTop:'10px'}}>Course Details</h3>
          <Row>
          <Col md='6'>
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input type="text" name="title" id="title" placeholder="Enter the name of your course" required/>
        </FormGroup>
        </Col>
        <Col md='6'>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input type="text" name="subject" id="subject" placeholder="Enter the subject" required/>
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label for="overview">Brief Overview</Label>
          <Input type="text" maxLength="250" name="overview" id="overview" placeholder="Overview of your course.  Keep it short and sweet" required/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Full Description</Label>
          <Input type="textarea" name="description" id="description" placeholder="Detailed description" required />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload Image</Label>
          <Input type="file" name="file" id="exampleFile"/>
          <FormText color="muted">
            Select an image cover
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Select One</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Private (Students will need your private URL to find your project)
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" checked="checked" />{' '}
              Public (Anyone can find and view your project)
            </Label>
          </FormGroup>
          </FormGroup>
        <Button color = "success" style={{marginBottom:'15px'}}>Create Stream</Button>
        </Container>
      </Form>
 
      </div>
    );
  }
}

export default CreateStream;