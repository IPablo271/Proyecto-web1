import React from 'react'
import './style.css'
import globo from './imagenes/tierra.png'

function Footer() {
  return (
    <footer className="footer">
      <div clasName="footer-inner">
        <div className="div_footer">
          <img src={globo} className="" alt="Globo" />
          <p className="p_globo">Español Guatemala</p>
        </div>
        <div className="ulf">
          <ul>
            <li><p>Ponte en contacto con Microsoft</p></li>
            <li><p>Privacidad</p></li>
            <li><p>Aviso legal</p></li>
            <li><p>Marcas registradas</p></li>
            <li><p>Sobre nuestra publicidad</p></li>
            <li><p>Microsoft 2022</p></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
