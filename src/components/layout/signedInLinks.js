import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const SignedInLinks = () => {
   return (
      <ul className="right">
          <li><NavLink to="/createproject">New Project</NavLink></li>
          <li><NavLink to="/">Log Out</NavLink></li>
          <li><NavLink to="/" className="btn btn-floatng pink lighten-1">MN</NavLink></li>
      </ul> 
   )
}

export default SignedInLinks
