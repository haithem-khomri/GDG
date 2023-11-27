import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./navbar.css"
import image from "../images/logo.png"

function Navbar() {

  return (
    
    <>
    <div className='navbar'>
    <div className="navbar-container">
        <div className='nav-item'>
            <Link to="/" className='navbar-logo'>
                <img src={image}></img>
            </Link>
        </div>
        <div className='nav-item nav'>
            <a><Link to="/" className="nav-links">Home</Link></a>
            <a><Link to="/test" className="nav-links">Generator</Link></a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar