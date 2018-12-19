import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newUser} from './../actions';


class Register extends Component {
        state = {
                user: 
                        {
                        username: "",
                        password: "",
                        }
                }
                
            
        setUsername= (e) => {
                this.setState({
                ...this.state,
                user: {
                ...this.state.user,
                username: e.target.value
                }
                })
        }

        setPassword= (e) => {
                this.setState({
                ...this.state,
                user: {
                ...this.state.user,
                password: e.target.value
                }
                })
        }

        onSubmit = (e) => {
                e.preventDefault();
                this.props.newUser(this.state.user);
                this.props.users.push(this.state.user)git
                this.setState({
                ...this.state,
                user: {
                ...this.state.user,
                username: '',
                password: ''
                }

                        })
        }     
        
        render() {
                return (
                <div>
                        <h1>Register User</h1>
                        <form onSubmit={(e) => this.state.onSubmit(e)}>
                                <input  className="form-control"
                                        placeholder="username"
                                        value={this.state.user.username} 
                                        onChange={(e)=>{ this.setUsername(e) }
                                        } />
                                <input  className="form-control"
                                        placeholder="password"
                                        value={this.state.user.password} 
                                        onChange={(e)=>{ this.setPassword(e) }
                                        } />
                                <button className="btn btn-primary"
                                        type = "submit"
                                >Submit</button>          
                        </form>
                </div>
                )
        }
}

const mapStatetoProps = state => ({
        users: state.users
      });

const mapPropsToDispatch = dispatch => ({
        newUser: (user) => dispatch(newUser(user))
})

export default connect(mapStatetoProps, mapPropsToDispatch)(Register);