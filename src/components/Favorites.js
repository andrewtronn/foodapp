import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {logOut} from './../actions';

const Favorites = (props) => {
    return(
        <div className="head-container">
            {props.isLoggedIn === false  && (<Redirect to="/loginscreen"/>) }
            <h1>Favorites</h1>
            <button 
                className="btn btn-outline-primary"
                onClick={() => props.logOut()}>logout
            </button>        
        </div>
    )
}

const mapStatetoProps = state => ({
    isLoggedIn: state.isLoggedIn
});

const mapPropsToDispatch = dispatch => ({
    logOut: () => dispatch(logOut())
});

export default connect(mapStatetoProps, mapPropsToDispatch)(Favorites);