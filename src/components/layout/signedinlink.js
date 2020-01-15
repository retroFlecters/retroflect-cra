import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLink = () => {
  return (
    <ul className="right">
      <li><NavLink to "/">Sign Out</Navlink></li>
      <li><NavLink to "/" className='btn btn-floating green lighten-1'>SM</Navlink></li>
    </ul>
  )
}

export default SignedInLink
