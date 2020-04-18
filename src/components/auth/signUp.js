import React, { Component } from 'react'

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
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="text">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                <button classNa>Sign Up</button>
                </form>
            </div>
        )

    }
}
export default SignUp