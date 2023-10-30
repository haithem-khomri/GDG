import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGasPump,faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from './button';
import "./navbar.css"

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
                    CCUS <FontAwesomeIcon icon={faGasPump}  />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon 
                size='2rem'
                color='white'
                 icon={click ? faXmark : faBars} />
                </div>
                <ul className={click ?'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'> <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
                    <li className='nav-item'> <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link></li>
                    <li className='nav-item'> <Link to="/test" className="nav-links" onClick={closeMobileMenu}>Test</Link></li>
                </ul>
                {button &&<Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar