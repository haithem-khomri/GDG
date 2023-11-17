import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import image from "../images/logo.png"

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton]= useState(true);


    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true)
        }
    };
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton)
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                <img src={image}></img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon 
                size='2rem'
                color='white'
                 icon={click ? faXmark : faBars} />
                </div>
                <ul className={click ?'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'> <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
                    <li className='nav-item'> <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Generator</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar