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
import {streams} from './streams';
import CreateStream from './components/CreateStream/CreateStream';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';

class App extends Component {
    constructor() {
      super();
      this.state = {
        route: 'home',
        isSignedIn: true,
        streams: streams,
        searchfield: ''
      }
    }
/*
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({streams : users}));  
    }
*/  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState({isSignedIn: false})
        route = 'home';
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      } 
      this.setState({route: route});
    }

    render() {
      const filteredStreams  = this.state.streams.filter(stream => {
        return stream.course_title.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })


      const { isSignedIn, route } = this.state;

      return (
        <div className="App"> 
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
         { route === 'home' 
            ? <div>
                <Searchbar searchChange={this.onSearchChange}/>
                <CardList streams = {filteredStreams}/>
              </div>
            : (
               route === 'login' 
                ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                : (
                    route ==='register'
                      ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                      : ( 
                        route === 'createstream'    
                        ? <CreateStream loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
                        : (
                          route === 'dashboard'
                          ? <Dashboard loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                          : (
                            <Settings loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                            )
                          )
                        )
                  )
              )
          }

        </div>
        
      );
    }
  }


export default App;