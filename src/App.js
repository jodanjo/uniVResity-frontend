import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter, Link, HashRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import CardList from './components/CardList/CardList';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';
import './components/Login/Login.css';
import './components/Navigation/Navigation.css';
import './components/CardView/CardView.css';
//import {streams} from './streams';
import CreateStream from './components/CreateStream/CreateStream';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Error from './components/Error/Error';
import Stream from './components/Stream/Stream';
import history from './history';



const AuthRoute = ({ component: Component, user, isSignedIn, loadStream, ...rest }) => (
  <Route {...rest} render={(props) => (
    isSignedIn === true
      ? <Component {...props} user={user} isSignedIn = {isSignedIn} loadStream={loadStream} />
      : <Redirect to='/login'/>
  )} />
);


class App extends Component {
    constructor() {
      super();
      this.state = {
        isSignedIn: false,
        streams: [],
        searchfield: '',
        user: {
          id: '',
          name: '',
          email: '',
          joined: '',
          bio: ''
        }
      }
    }

    loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      bio: data.bio,
      joined: data.joined,
    }})
  }

  loadStream = (data) => {
    this.setState({stream: {
      title: data.title,
      subject: data.subject,
      headline: data.headline,
      description: data.description
    }})
  }


    componentDidMount(){
      fetch('http://localhost:3000/public_streams')
      .then(response=> response.json())
      .then(streams => this.setState({streams : streams}));  
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    auth = (isAuth) => {
      if (isAuth) {
        this.setState({isSignedIn: true})
      } else {
        this.setState({isSignedIn: false})
      } 
    }



    render() {
      const filteredStreams  = this.state.streams.filter(stream => {
        return stream.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
      console.log(filteredStreams);
      const { isSignedIn, isAuth, user } = this.state;
      return (
        <HashRouter history={history}>
        <div className="App"> 
      <Navigation isSignedIn={isSignedIn} 
      name={user.name}
      />
         <Switch>
            <Route exact path='/' render={() => (
              <div>
              <Searchbar searchChange={this.onSearchChange}/>
              <CardList streams = {filteredStreams}/>
              </div>
            )}/>
            <Route path='/register' render={() => (
              <Register loadUser={this.loadUser} auth={this.auth}/>
            )}/>
            <Route path='/login' isSignedIn={isSignedIn} render={() => (
              <Login loadUser={this.loadUser} auth={this.auth}/>
            )}/>
            <AuthRoute path='/createstream' loadStream={this.loadStream} isSignedIn={isSignedIn} user={user} component={CreateStream}/>
            <AuthRoute path='/dashboard' user={user} isSignedIn={isSignedIn} component={Dashboard} />
            <AuthRoute path='/settings' user={user} isSignedIn={isSignedIn} component={Settings} />
            <Route path ='/stream/' component={Stream} />
            <Route component={Error} />
            
            </Switch>
        </div>
        </HashRouter>
        
      );
    }
  }


export default App;