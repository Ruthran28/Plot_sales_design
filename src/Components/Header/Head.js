import React from 'react'
import logo from '../logo1.png';
import './Head.css';

const Head = () => {
  return (
    <div className="head">
        <img src={logo} alt="logo" />
        <nav className="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#ourfleet">Our Fleet</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#booking">Booking</a></li>
                <li><a href="#contactus">Contact Us</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Head