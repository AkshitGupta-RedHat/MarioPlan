import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedInLinks'
import SignedOutLinks from './signedOutLinks'
import {connect } from 'react-redux'

const Navbar = (props) => {
    const {isUserLogIn} =props;
    const links = isUserLogIn? <SignedInLinks />:<SignedOutLinks />
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MarioPlan</Link>
                  {links}  
            </div>
        </nav>

    )
}
const mapStateToProps = (state)=>{
    console.log(state);
    console.log(state.firebase.auth.uid)
        return{
            isUserLogIn:state.firebase.auth.uid
        }
}
export default connect(mapStateToProps)(Navbar)
