import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-logo">
          E-com
      </div>
      <div className="navbar-menu d-flex flex-row">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </div>
    </div>
  )
}

export default Navbar