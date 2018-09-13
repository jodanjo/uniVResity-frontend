import React from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback
  } from 'reactstrap';
  
  

  class Dashboard extends React.Component {
    constructor(props) {
        super(props);
      
      }
    
          render() {
        return (
         <div>
          <h1>Dashboard</h1>
          <h2>saved streams and streams created by the user), cards for editing, launching and canceling rooms. </h2>
        </div>  
        );
      }
    }
    
  
  
  export default Dashboard;