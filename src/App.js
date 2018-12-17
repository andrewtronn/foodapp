import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import { getFile, getLocation, getLocationDetails } from './actions';


class App extends Component {
  state = {
    searchInput: '',
    locationInput: '',
  }



  componentDidMount() {
    getFile();
    getLocation(this.state.locationInput)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />

        </header>
        <div>
          <input  type="text"
                  value={this.state.searchInput}
                  onChange={(e) => { this.setState({ searchInput: e.target.value }) }
                  } />
          <button onClick={() => {
            this.props.getFile(this.state.searchInput);
          }}>Click</button>
          <input
            type="text"
            value={this.state.locationInput}
            onChange={(e) => { this.setState({ locationInput: e.target.value }) }
            } />
          <button onClick={() => {
            this.props.getLocation(this.state.locationInput);
          }}>GET LOCATION</button>
          <button onClick={() => {
            this.props.getLocationDetails();
          }}>GET LOCATION DETAILS</button>
        </div>
      </div>
    )
  }
}

const mapPropstoState = state => ({
  data: state.data,
  locationData: state.locationData,
  locationDetails: state.locationDetails
});


const mapPropsToDispatch = dispatch => ({
  getFile: (searchInput) => dispatch(getFile(searchInput)),
  getLocation: (locationInput) => dispatch(getLocation(locationInput)),
  getLocationDetails: () => dispatch(getLocationDetails()),


});

export default connect(mapPropstoState, mapPropsToDispatch)(App);
