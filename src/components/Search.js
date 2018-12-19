import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFile, getLocation, getLocationDetails } from './../actions';


class Search extends Component {
    state = {
        searchInput:'',
        locationInput:''
    }
    render() {
        return (
            <div>
                <input type="text"
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
        )
    }
}


    const mapPropsToDispatch = dispatch => ({
        getFile: (searchInput) => dispatch(getFile(searchInput)),
        getLocation: (locationInput) => dispatch(getLocation(locationInput)),
        getLocationDetails: () => dispatch(getLocationDetails()),
    
    });


 export default connect(null, mapPropsToDispatch)(Search);