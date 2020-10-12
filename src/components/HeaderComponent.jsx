import React from "react";

export const Header = () => {/*
  function desplegar() {
    var x = document.getElementById("header");
    if (x.className === "rodeoheader") {
      x.className += " responsive";
    } else {
      x.className = "rodeoheader";
    }
  }*/
  return (
    <nav className="row align-items-center margenderecho margenizquierdo" id="header">
      <div className="col-md-4">
        <img src="images/logo2.svg" alt="home page" width="190" height="120" />
      </div>
      <div className="col-md-8 rodeoheader" id="header">
        <div className="row align-items-center">
          <div className="offset-lg-2 col-lg-2 col-md-3 letramenu">
            <a className="animacion" href="quienessomos.html">
              Nosotros
            </a>
          </div>

          <div className="col-md-3 col-lg-2 letramenu">
            <a className="animacion" href="Nuestroequipo">
              Equipo
            </a>
          </div>
          <div className="col-md-3 col-lg-2 letramenu">
            <a className="animacion" href="contactanos.html">
              Contacto
            </a>
          </div>
          <div className="col-md-12 col-lg-3 numeromenu">
            <a href="tel:+584169475541" className="animacion">
              {" "}
              0416 947 5541{" "}
            </a>
            <i className="fas fa-phone"></i>
          </div>
        </div>
      </div>
      <div className="col-sm-12 hamburgesa">
        <a href="#" onClick={desplegar()}> 
          <i className="fas fa-bars"></i>
        </a>
      </div>
    </nav>
  );
};
