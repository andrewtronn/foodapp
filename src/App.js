import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import {getFile} from './actions'; 






class App extends Component {

  // componentDidMount() {
  //   getFile
  // }
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
