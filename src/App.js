import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import {getFile} from './actions'; 
import Nav from './components/Nav';
import Home from './components/Home';


import './App.css';
import LoginScreen from './components/LoginScreen';
import Register from './components/Register';
import Search from './components/Search';


class App extends Component {
  state = {
    searchInput: '',
    locationInput: '',
    input: '',
    
    userInfo: [
      {
        userName: "andrewtran",
        passWord: "1234",
      },
      {
        userName: "zain",
        passWord: "2222"
      },

    ],
    
      user: 
        {
          userName: '',
          passWord: '',
        }
          
  }

  setUsername= (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        userName: e.target.value
      }
    })
  }

  setPassword= (e) => {
    this.setState({
    ...this.state,
    passWord: {
      ...this.state.user,
      passWord: e.target.value
    }

    })
  }


  componentDidMount() {
    getFile();
    getLocation(this.state.locationInput)
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
        <Nav/>
                <div className="main-container">
                    <Switch>  
                        <Route exact path="/" component={Home} />
                        <Route path="/loginscreen" render={(renderProps) => <LoginScreen />} />
                        <Route path="/register" render={(renderProps) => <Register/>} />
                        <Route path="/search" render={(renderProps) => <Search/>} />
                    </Switch>
                </div>
        <Header />

        </header>
        <div>
          <input 
           type="text" 
        value={this.state.searchInput} 
        onChange={(e)=>
          {this.setState({searchInput :e.target.value})}
          } />
        <button onClick={() => {
                  this.props.getFile(this.state.searchInput);
                }}>Click</button>
        <input 
        type="text" 
        value={this.state.locationInput} 
        onChange={(e)=>
          {this.setState({locationInput :e.target.value})}
          } />
        <button onClick={() => {
                  this.props.getLocation(this.state.locationInput);
                }}>GET LOCATION</button>
        <button onClick={() => {
                  this.props.getLocationDetails(this.props.entityID, this.props.entityType);
                }}>GET LOCATION DETAILS</button>
              </div>
        <div>
          <input className="form-control" placeholder="username" name='add user' 
          value={this.state.user.userName} 
          onChange={(e)=>{this.setUserName(e)}} />
          <button onClick={() =>{

          }}>Click</button>
          <input className="form-control" placeholder="password" name= 'password'
          value={this.state.user.passWord} 
          onChange={(e)=>{this.setPassword(e)} }
          />
          <button onClick={() =>{

          }}>Click</button>
          

        </div>
        
        </div>

          
    )
    }
  


const mapPropstoState = state => ({
  data: state.data,
  locationData: state.locationData,
  locationDetails: state.locationDetails,
  entityID: state.entityID,
  enitytyType: state.entityType
});


const mapPropsToDispatch = dispatch => ({
  getFile: (searchInput) => dispatch(getFile(searchInput)),
  getLocation: (locationInput) => dispatch(getLocation(locationInput)),
  getLocationDetails: (entityID, entityType) => dispatch(getLocationDetails(entityID, entityType))


});

export default connect(mapPropstoState, mapPropsToDispatch)(App);
