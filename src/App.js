import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import {getFile} from './actions'; 






class App extends Component {
  state = {
    searchInput: ''
  }



  componentDidMount() {
    getFile()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />

        </header>
        <input 
        type="text" 
        value={this.state.searchInput} 
        onChange={(e)=>
          {this.setState({searchInput :e.target.value})}
          } />
        <button onClick={() => {
                  this.props.getFile(this.state.searchInput);
                }}>Click</button>
              </div>
    )
}
}


const mapPropsToDispatch = dispatch => ({
  getFile: (searchInput) => dispatch(getFile(searchInput))
});

export default connect(null, mapPropsToDispatch)(App);
