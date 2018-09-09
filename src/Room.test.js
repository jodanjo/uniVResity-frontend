import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Child = ({ match }) => (
  <div>
    <h3>URL id: {match.params.url}</h3>
    <p> Based on this URL id, information about the VR room can be retrieved from db</p>
    <p> Once a room is created, the unique url needs to be saved in a db. When a new URL is generated for a new room, we need to check the db that it does not exist already</p>
    <p> You must install "npm install --save react-router-dom" for this script to work</p>
  </div>
)

const generateURL =() =>{
  var url = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 10; i++)
    url += possible.charAt(Math.floor(Math.random() * possible.length));

  return url;
}


const Room = () => {
  
    return (
      <Router>
        <div>
          <h2>VR rooms</h2>
          <ul>
            <li><Link to={generateURL()}>Some VR room</Link></li>
            <li><Link to={generateURL()}>My VR coding class</Link></li>
            <li><Link to={generateURL()}>Interactive math</Link></li>
            <li><Link to='hard-coded-url'>Teaching physics in VR</Link></li>
          </ul>
          <Route path="/:url" component={Child}/>
        </div>
      </Router>
    )
  
}

export default Room;
