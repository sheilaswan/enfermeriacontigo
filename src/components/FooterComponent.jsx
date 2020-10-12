import React from 'react'

export const Footer = () => {
  return(
<footer className="row align-items-center footer">
        <div className="col-sm-2 offset-sm-1">
          <p>Contactanos al número:</p>
          <p>04169475541</p>
        </div>
        <div className="col-sm-3 offset-sm-1 mt-4">
          <p>Nuestras oficinas:</p>
          <p>Residencias"Athenas" Nueva Barcelona. Anzoátegui,Venezuela.</p>
        </div>
        <div className="col-sm-3 offset-sm-1">
          <p>Aplicar para un empleo:</p>
          <p>Escribenos en shjahs@gmail.com</p>
        </div>
        <div className="col-sm-1">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
      </footer>
  )
}
