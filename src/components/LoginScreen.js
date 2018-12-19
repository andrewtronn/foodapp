import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logIn} from './../actions';



class LoginScreen extends Component {

    state= {
        username:'',
        password:''
    };

    fullLogin = () => {
        this.props.logIn(this.state)
        this.setState({
            username:'',
            password:''
        })
    }    
        
    render() {
        return(
        <div>
            {this.props.isLoggedIn  && (<Redirect to="/favorites"/>) }
            <h1>Login page</h1>
            <div className="form-group">
                <label htmlFor="">Username</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}/>
            </div>
            <button 
                className="btn btn-outline-primary"
                onClick={() => this.fullLogin() }>Login
            </button>
        </div> 
        )
    }
}

const mapStatetoProps = state => ({
    isLoggedIn: state.isLoggedIn
  });

const mapPropsToDispatch = dispatch => ({
    logIn: user => dispatch(logIn(user))
});


export default connect(mapStatetoProps, mapPropsToDispatch)(LoginScreen);