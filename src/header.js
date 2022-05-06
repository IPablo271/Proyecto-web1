import React from 'react'
import './style.css'

function Header() {
  return (
    <div className="container">
      <header className="showcase">
        <div className="titulo1">
          <h1 className="di1">Diseñado para la vida de hoy y de mañana</h1>
        </div>
        <div className="descripcion1">
          <p className="des">
            La nueva generacion de juegos. Tus objetivos Familia y amigos. Windows 11 este hecho
            para acercarte a lo que te encanta
          </p>
        </div>
        <button type="submit" className="btn">Ve si tu pc esta listo</button>
      </header>
    </div>

  )
}
export default Header
