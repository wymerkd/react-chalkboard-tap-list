import React from 'react'

// React Router
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/adminview">AdminView</Link>
    </div>
  )
}

export default Nav;

