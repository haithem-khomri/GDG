import React from 'react';
import './Footer.css';
import image from "../images/logo.png"
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='Foot'>
    <div className='footer-container'>
    <div class='footer-logo'>
          <img src={image}/>
          </div>
    <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/gdg.batna'>Instagram</a>
            <a href='https://www.facebook.com/GDGBatna'>Facebook</a>
            <a href='https://www.instagram.com/gdg.batna'>Gmail</a>
            <a href='https://www.linkedin.com/company/gdg-batna/'>Linkdin</a>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <small class='website-rights'>Google Devolopers Groupe © 2023</small>
    </div>
  );
}

export default Footer;