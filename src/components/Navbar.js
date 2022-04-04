import React from 'react'
import "../css/Navbar.css"
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' to="/wearIt"><div className='logo'>
            <span style={{color: "#F5A123"}}>wear</span>It
        </div></Link>
        <div className='menu'>
            <Link to="/wearIt/#features"><a href='#features'><span className='menu-link'>Features</span></a></Link>
            <Link to="/wearIt/#try-it"><a href='#try-it'><span className='menu-link'>Try <span style={{color: "#F5A123"}}>wear</span>It</span></a></Link>
            {/* <span className='menu-link'>About Us</span> */}
            <Link to="/wearIt/AboutUs"><a href='#our-team'><span className='menu-link'>Our Team</span></a></Link> 
        </div>
          <Link to="/wearIt/Login" className='link'><div className='login-button'>
            Login
          </div>
          </Link>
    </div>
  )
}

export default Navbar