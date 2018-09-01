import React, { Component } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import './components/Login/Login.css';
import './components/Navbar/Navbar.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Login />
      </div>
    );
  }
}

export default App;
