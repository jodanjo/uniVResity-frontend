import React, { Component } from 'react';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import CardList from './components/CardList/CardList';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';
import './components/Login/Login.css';
import './components/Navigation/Navigation.css';
import './components/CardView/CardView.css';




class App extends Component {
    constructor() {
      super();
      this.state = {
        route: 'home',
        isSignedIn: null,
        robots: [],
        searchfield: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({robots : users}));	
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      } 
      this.setState({route: route});
    }

    render() {
      const filteredRobots  = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })

      const { isSignedIn, route } = this.state;

      return (
        <div className="App"> 
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

          { route === 'home' 
            ? <div>
              <Searchbar searchChange={this.onSearchChange}/>
              <CardList robots = {filteredRobots}/>
              
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
