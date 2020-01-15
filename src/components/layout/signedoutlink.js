import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLink = () => {
  return (
    <ul className="right">
      <li><NavLink to "/">Sign In</Navlink></li>
      <li><NavLink to "/">Sign Up</Navlink></li>
    </ul>
  )
}

export default SignedOutLink
