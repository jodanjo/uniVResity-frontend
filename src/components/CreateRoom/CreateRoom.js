import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';


class Createroom extends React.Component {
  render() {
    return (
        <div style={{paddingLeft:'10px', paddingRight:'10px', marginTop:'30px', marginLeft:'10px', marginRight:'10px'}}>
    <Card style={{paddingLeft:'10px', paddingRight:'10px', marginTop:'30px', marginLeft:'10px', marginRight:'10px', boxShadow: '5px 10px 18px #888888'}}>
      <Form>
          <h3 style={{marginBottom:'30px', marginTop:'10px'}}>Project Details</h3>
        <FormGroup>
          <Label for="title">Project Title</Label>
          <Input type="text" name="title" id="title" placeholder="Enter the name of your project" required/>
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input type="text" name="subject" id="subject" placeholder="Enter the subject" required/>
        </FormGroup>
        <FormGroup>
          <Label for="overview">Brief Overview</Label>
          <Input type="text" maxlength="250" name="overview" id="overview" placeholder="Overview of your project.  Keep it short and sweet" required/>
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
        <Button color = "success" style={{marginBottom:'15px'}}>Create Room</Button>
      </Form>
      </Card>
      </div>
    );
  }
}

export default Createroom;