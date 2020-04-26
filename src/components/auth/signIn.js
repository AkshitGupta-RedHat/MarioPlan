import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { signInAction } from '../../store/actions/authAction'
import { Redirect} from 'react-router-dom'
class SignIn extends Component {
    state = {
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
        console.log(this.props);
        this.props.signin(this.state)
    }

    render() {
        const {authError} = this.props;
        const {isLogIn} = this.props;
        if(isLogIn){
            return (
                <Redirect to ='/' />
            )
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="black">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input className="white-text" type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input className="white-text" type="password" id="password" onChange={this.handleChange} />
                    </div>
                <button>Submit</button>
                </form>
                <div className="red-text">{authError ? authError: null}</div> 
            </div>
            
        )

    }
}
    const mapStateToProps = (state) => {
       return {
        authError: state.authreducer.authError,
        isLogIn: state.firebase.auth.uid
     
       } 
    }
    const mapDispatchToProps = (dispatch) =>  {
        return {
          signin: (cred) => dispatch(signInAction(cred))   
             }
      }
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
