import React from 'react'
import './style.css'
import facebook from './imagenes/fl.png'
import linked from './imagenes/lk.png'

function Section2() {
  return (
    <div className="container">
      <div className="conetedor_h1">
        <h1 className="h1_section2">Para la empresa</h1>
      </div>
      <section className="home-cards">
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJ3u?ver=7dcf&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&x=755&y=404&aim=true" alt="img1" />
          <h1>Recibe Microsoft Teams gartis</h1>
          <p className="infotext">
            Reuniones en linea, chat y almacenamiento
            comparyido en la nube,todo en un mismo lugar
          </p>
          <button type="submit"><p className="infotext2">Inscribete gartis</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT?ver=2072&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img2" />
          <h1>Microsoft 365 para empresas</h1>
          <p className="infotext">
            Mantente a la vanguardia con nuestras
            poderosas aplicaciones para la productividad,
            la conexion y la seguridad.
          </p>
          <button type="submit"><p className="infotext2">Comprar ahora</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img3" />
          <h1>Adquiere Visual Studio 2022</h1>
          <p className="infotext">
            Descarga Visual Studio 2022, el IDE productivo,
            moderno e inovador
          </p>
          <button type="submit"><p className="infotext2">Descargar ahora</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGaY8?ver=2545&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img4" />
          <h1>Bienvenido a tu windows 365 cloud PC</h1>
          <p className="infotext">
            Disfruta de tu experiencia de Windows en
            forma segra por streaming desde la nube
            Microsoft a cualquier dispositivo
          </p>
          <button type="submit"><p className="infotext2">Adquierelo hoy</p></button>
        </div>
      </section>
      <div className="follow">
        <p className="p_info">Seguir Microsoft</p>
        <img src={facebook} alt="imgf" className="imagen_p" />
        <img src={linked} alt="imgl" className="imagen_p" />
      </div>
    </div>

  )
}
export default Section2
