import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

import './App.css';
import {getFile} from './actions'; 

import axios from 'axios';


import './App.css';



var config = {
    headers: {'X-My-Custom-Header': 'e72ea3a9fe87325d55dd0b6d7b2a010f'}
   };


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />

        </header>
        <button onClick={() => {
                  this.props.getFile();
                }}>Click</button>
              </div>
    )
}
}


const mapPropsToDispatch = dispatch => ({
  getFile: () => dispatch(getFile())
});

export default connect(null, mapPropsToDispatch)(App);
