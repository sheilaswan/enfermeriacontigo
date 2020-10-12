import React from "react";
import mujerhospitalizada from '../images/mujerhospitalizada.svg'

export const Contacto = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <h1>Contáctanos para más información</h1>
        </div>
      </div>

      <div className="row margenizquierdo margenderecho">
        <div className="col-12 col-md-5">
          <h2 className="mt-3 mb-4">Envianos tus Dudas</h2>
          <form>
            <div className="form-group">
              <label for="nombrecompleto">Nombre y Apellido</label>
              <br />
              <input
                type="text"
                id="nombrecompleto"
                name="nombrecompleto"
                className="form-control"
                placeholder="Juan Perez"
              />
              <br />
            </div>
            <div className="form-group">
              <label for="telefono">Número de teléfono</label>
              <br />
              <input
                type="tel"
                id="telefono"
                name="telefono"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="form-control"
                placeholder="0412 555 55 55"
              />
              <br />
            </div>
            <div className="form-group">
              <label for="correo">Correo Electronico</label>
              <br />

              <input
                type="email"
                id="correo"
                name="correo"
                className="form-control"
                placeholder="juanperez@ejemplo.com"
              />
              <br />
            </div>
            <div className="form-group">
              <label for="dudas">Dudas sobre los servicios</label>
              <br />
              <textarea
                id="dudas"
                name="dudas"
                rows="4"
                className="form-control"
              ></textarea>
              <br />
            </div>

            <input type="submit" value="Enviar " className="btn btn-primary" />
            <br />
          </form>
        </div>
        <div className="col-12 col-md-5 offset-sm-2">
          <h2 className="mt-3 mb-5">Numeros de Contacto</h2>
          <h3 className="mt-5 mb-4">0416 947 55 41</h3>
          <img src={mujerhospitalizada} width="50%" />
        </div>
      </div>
    </>
  );
};
