import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback, Row, FormText, Card
  } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { withAlert } from 'react-alert';
import axios from 'axios';

//generates a 10 char string used for the unique stream url
const generateURL =() =>{
  var url = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < 10; i++)
    url += possible.charAt(Math.floor(Math.random() * possible.length));
  return url;
}


class CreateStream extends React.Component {
      constructor(props) {
        super(props);
          this.state = {
          'title': '',
          'subject': '',
          'headline': '',
          'description': '',
          'is_private': 'FALSE',
          'photo':'',
          validate: {
            titleState: '',
            subjectState: '',
            headlineState: '',
          },
        }
        this.handleChange = this.handleChange.bind(this);
      }

    state = {
      selectedFile: null
    }
    fileSelectHandler = event => {
      this.setState( { selectedFile: event.target.files[0]} )
    }  
        //submits stream photo to back-end server using the axios library, receives back the assigned filename, passes it to onPhotoReceived function
        onSubmitStream = () => {
              if (this.state.selectedFile){
                const fd = new FormData();
                fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
                axios.post('https://fierce-fortress-43881.herokuapp.com/upload', fd)
                .then(res => { 
                  this.onPhotoReceived(res.data);
                 }); 
              } else {this.onPhotoReceived('noimage.png'); }
        }
        
        //submits the form data using fetch method to back-end server. If stream creation is a success, displays success message, redirects to dashboard
        onPhotoReceived = (imgFileName) => {
        fetch('https://fierce-fortress-43881.herokuapp.com/createstream', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            url:generateURL(),
            title: this.state.title,
            subject: this.state.subject,
            headline: this.state.headline,
            description: this.state.description,
            is_private: this.state.is_private,
            owner: this.props.user.id,
            photo: imgFileName
      })
    })
      .then(response => response.json())
      .then(stream => {
        if (stream) {
          this.props.loadStream(stream)
          //console.log(this.props.user.id)
          this.props.alert.success(`Stream ${stream.title}, created successfully!`)
          this.props.history.push('/dashboard')
        }
      })

  }

      validateTitle(e) {
            const titleRex = /^(?=.{3,128}$)/;
            const { validate } = this.state
              if (titleRex.test(e.target.value)) {
                validate.titleState = 'has-success'
              } else {
                validate.titleState = 'has-danger'
              }
              this.setState({ validate })
            }
      validateSubject(e) {
            const subjectRex = /^(?=.{2,32}$)/;
            const { validate } = this.state
              if (subjectRex.test(e.target.value)) {
                validate.subjectState = 'has-success'
              } else {
                validate.subjectState = 'has-danger'
              }
              this.setState({ validate })
            }
      validateHeadline(e) {
            const headlineRex = /^(?=.{30,250}$)/;
            const { validate } = this.state
              if (headlineRex.test(e.target.value)) {
                validate.headlineState = 'has-success'
              } else {
                validate.headlineState = 'has-danger'
              }
              this.setState({ validate })
            }
      
      handleChange = async (event) => {
        const { target } = event;
        const value =  target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
          
        });
      }

      handleChangeRadio(event) {
        this.setState({
          is_private: event.target.value
        });
      }
    
      submitForm(e) {
        e.preventDefault();
      }
      

  render() {
    const { title, subject, headline, description } = this.state;
    const isEnabled = this.state.validate.titleState === 'has-success' 
                   && this.state.validate.subjectState === 'has-success'
                   && this.state.validate.headlineState === 'has-success';  
    return (
        <div style={{paddingLeft:'30px', paddingRight:'30px', marginTop:'30px',  textAlign:'left', marginBottom:'30px'}}>
        <Card>
      <Form onSubmit={ (e) => this.submitForm(e) }>
        <Container>
          <h3 style={{marginBottom:'30px', marginTop:'10px'}}>Course Details</h3>
          <Row>
          <Col md='6'>
        <FormGroup>
          <Label >Course Title</Label>
          <Input type="text"
                 name="title" 
                 id="title" 
                 placeholder="Enter the title of your course"
                 value={ title }
                 valid={ this.state.validate.titleState === 'has-success' }
                 invalid={ this.state.validate.titleState === 'has-danger' }
                 onChange={ (e) => {
                                this.validateTitle(e)
                                this.handleChange(e)
                              } }

                 />
                  <FormFeedback>
                    Please enter a title, 3 to 128 characters
                  </FormFeedback>
        </FormGroup>
        </Col>
        <Col md='6'>
        <FormGroup>
          <Label >Subject</Label>
          <Input type="text"
                 name="subject" 
                 id="subject" 
                 placeholder="Enter the subject" 
                 value={ subject }
                 valid={ this.state.validate.subjectState === 'has-success' }
                 invalid={ this.state.validate.subjectState === 'has-danger' }
                 onChange={ (e) => {
                                this.validateSubject(e)
                                this.handleChange(e)
                              } }

                 />
                  <FormFeedback>
                    Please enter a subject, 2 to 32 characters 
                  </FormFeedback>
        </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label >Brief Overview</Label>
          <Input type="text"
                 name="headline" 
                 id="headline" 
                 placeholder="Overview of your course.  Keep it short and sweet"
                 value={ headline }
                 valid={ this.state.validate.headlineState === 'has-success' }
                 invalid={ this.state.validate.headlineState === 'has-danger' }
                 onChange={ (e) => {
                                this.validateHeadline(e)
                                this.handleChange(e)
                              } }

                 />
                  <FormFeedback>
                    Please enter a headline, 30 to 250 characters
                  </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label >Full Description</Label>
          <Input type="textarea"
                 name="description" 
                 id="description" 
                 placeholder="Optional detailed description, max 500 chars "
                 value={ description }
                 onChange={ (e) => {
                                this.handleChange(e)
                              } }

                 />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload Image</Label>
          <Input type="file" id="exampleFile" onChange={this.fileSelectHandler} accept="image/gif,image/jpeg,image/jpg,image/png" />
          <FormText color="muted">
            Select an image cover
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Select One</legend>
          <ul className="list-unstyled">
        <li>
          <label>
            <input
              type="radio"
              value="TRUE"
              checked={this.state.is_private === "TRUE"}
              onChange={ (e) => this.handleChangeRadio(e)}
            />
            Private (Students will need your private URL to find your project)
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="FALSE"
              checked={this.state.is_private === "FALSE"}
              onChange={ (e) => this.handleChangeRadio(e)}
            />
            Public (Anyone can find and view your project)
          </label>
        </li>
      </ul>
          </FormGroup>

 
        <Button disabled={!isEnabled} color="primary" onClick={this.onSubmitStream} style={{marginBottom:'15px'}}>Create Stream</Button>
        </Container>
      </Form>
      </Card>
      </div>
    );
  }
}

export default withRouter (withAlert(CreateStream));