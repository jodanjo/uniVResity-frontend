import React, { Component } from 'react';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import './App.css';
import './components/Login/Login.css';
import './components/Navigation/Navigation.css';


class App extends Component {
    constructor() {
      super();
      this.state = {
        route: 'home',
        isSignedIn: null
      }
    }
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      } else if (route === 'homeSignedIn'){
        this.setState ({isSignedIn: true})
      }
      this.setState({route: route});
    }

    render() {
      const { isSignedIn, route } = this.state;
      return (
        <div className="App"> 
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { route === 'home' 
            ? <div>
              
              </div>
            : (
               route === 'login' 
               ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
               : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              )
          }
        </div>
      );
    }
  }
  


export default App;
