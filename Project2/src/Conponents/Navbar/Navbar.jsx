import React from 'react'
import logo from '../../../public/images/logo.png'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className = "Navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-element">
        <li className="nav-link">HOME</li>
        <li className="nav-link">ABOUT</li>
        <li className="nav-link">CONTACT</li>
      </ul>
    </div>
  )
}
