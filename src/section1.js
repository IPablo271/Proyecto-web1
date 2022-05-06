import React from 'react'
import './style.css'

function Section1() {
  return (
    <div className="container">
      <section className="home-cards">
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWPGs4?ver=3a6f&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img1" />
          <h3>Microsoft 365</h3>
          <p className="infotext">
            Aplicaciones primium de office, almacenamiento acicional en la nube, seguridad
            avanzada y mucho mas, todo en una conveniente suscripcion unica
          </p>
          <button type="submit"><p className="infotext2">Hasta 6 personas</p></button>
          <button type="submit" className="btn_2"><p className="infotext2">Para una persona</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rzE2?ver=aa0b&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img2" />
          <h3>Microsoft Edge</h3>
          <p className="infotext">
            Un rendimiento de categoria mundial con mas privacidad mas,
            productividad y mas valor mientras navegas
          </p>
          <button type="submit"><p className="infotext2">Descargar ahora</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hD2k?ver=6539&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img3" />
          <h3>Microsoft one Drive</h3>
          <p className="infotext">
            Guarda tus archivos y fotos en OneDrive y accede a ellos desde
            cualquier dispositivo y en cualquier lugar
          </p>
          <button type="submit"><p className="infotext2">Mas informacion</p></button>
        </div>
        <div>
          <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/REGxSz?ver=5bf8&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" alt="img4" />
          <h3>OneNote</h3>
          <p className="infotext">Organiza tus notas y tu vida</p>
          <button type="submit"><p className="infotext2">Mas informacion</p></button>
        </div>
      </section>
    </div>

  )
}
export default Section1
