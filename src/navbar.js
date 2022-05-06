import React from 'react'
import './style.css'
import img from './imagenes/logo.png'
import carro from './imagenes/shop2.png'
import search from './imagenes/search.png'

function NavBar() {
  return (
    <div className="container">
      <nav className="main-nav">
        <img src={img} alt="Mlogo" className="logo" />
        <ul className="main-menu">
          <li><p className="textm">Office</p></li>
          <li><p className="textm">Windos</p></li>
          <li><p className="textm">Surface</p></li>
          <li><p className="textm">Xbox</p></li>
          <li><p className="textm">Deals</p></li>
          <li><p className="textm">Support</p></li>
        </ul>
        <ul className="right-menu">
          <button type="submit" className="boton1"><p className="textom">Todo Microsoft</p></button>
          <ul className="main-menu">
            <li><p className="textm">Buscar</p></li>
            <li><img src={search} alt="search2" className="search" /></li>
            <li><p className="textm">Carro</p></li>
            <li><img src={carro} alt="Carro" className="carro" /></li>
          </ul>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
