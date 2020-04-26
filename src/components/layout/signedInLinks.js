import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect } from 'react-redux'
import {signOut } from '../../store/actions/authAction'
//Since it is nt a functional component we can not use this.props we have to pass props as a parameter
const SignedInLinks = (props) => {
   return (
      <ul className="right">
          <li><NavLink to="/createproject">New Project</NavLink></li>
          <li><a onClick={props.signout}>Log Out</a></li>
          <li><NavLink to="/" className="btn btn-floatng pink lighten-1">MN</NavLink></li>
      </ul> 
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      signout: () => {dispatch(signOut())}
   }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
