import React from 'react'
import './style.css'
import img from './imagenes/logo.png'

function NavBar() {
  return (
    <div className="container">
      <nav className="main-nav">
        <img src={img} alt="Mlogo" className="logo" />
        <ul className="main-menu">
          <li><p>Office</p></li>
          <li><p>Windos</p></li>
          <li><p>Surface</p></li>
          <li><p>Xbox</p></li>
          <li><p>Deals</p></li>
          <li><p>Support</p></li>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
