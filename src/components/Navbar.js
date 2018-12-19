import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';




class Navbar extends Component {    
    render() {
        return ( 
            <div className="nav">
                <div className="nav-items">
                    <Link className="item" to="/home">Home</Link>
                    <Link className="item" to="/register">Register</Link>
                    <Link className="item" to="/search">Search</Link>
                    {this.props.isLoggedIn ?
                    <Link className="item" to="/favorites">Favorites</Link>:
                    (<Link className="item" to="/loginscreen">Login Screen</Link>)
                    }
                </div>
            </div>
            )};
}

const mapStatetoProps = state => ({
    isLoggedIn: state.isLoggedIn,
  });

  export default connect(mapStatetoProps)(Navbar);