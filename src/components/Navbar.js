import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <span style={{color: "#F5A123"}}>wear</span>It
        </div>
        <div className='menu'>
            <span className='menu-link'>Features</span>
            <span className='menu-link'>FAQs</span>
            <span className='menu-link'>About Us</span>
            <span className='menu-link'>Our Team</span>
        </div>
        <div className='login-button'>
            Login
        </div>
    </div>
  )
}

export default Navbar