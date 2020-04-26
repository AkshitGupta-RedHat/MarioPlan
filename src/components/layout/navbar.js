import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import {connect } from 'react-redux'

const Navbar = (props) => {
    const isUserLogIn =props.logInId;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                {isUserLogIn? <SignedInLinks />:<SignedOutLinks />}  
            </div>
        </nav>

    )
}
const mapStateToProps = (state)=>{
    console.log(state);
    console.log(state.firebase.auth.uid)
        return{
            logInId:state.firebase.auth.uid
        }
}
export default connect(mapStateToProps)(Navbar)
