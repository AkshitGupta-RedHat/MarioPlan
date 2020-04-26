import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authAction'
class SignUp extends Component {
    state = {
        lastname:'',
        firstname:'',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.newUser(this.state);
    }

    render() {
        const {isLogIn} = this.props;
        if(isLogIn){
            return (
                <Redirect to ='/' />
            )
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="black">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="text">First Name</label>
                        <input  className = 'white-text' type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Last Name</label>
                        <input className = 'white-text' type="text" id="lastname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input className = 'white-text' type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input className = 'white-text' type="password" id="password" onChange={this.handleChange} />
                    </div>
                <button classNa>Sign Up</button>
                </form>
            </div>
        )

    }
}
    const mapStateToProps = (state) => {
        return{
            isLogIn:state.firebase.auth.uid
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            newUser : (data) => {dispatch(signUp(data))}
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)