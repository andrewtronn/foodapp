import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser} from './../actions';


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
                console.log(this.state.user.username)
                this.props.addUser(this.state.user);
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
                        <form onSubmit={(e) => this.onSubmit(e)}>
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
        addUser: (user) => dispatch(addUser(user))

})

export default connect(mapStatetoProps, mapPropsToDispatch)(Register);