import React from "react";
import nurse from '../images/1-01.svg'
import viejito from '../images/viejito.svg'
export const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 d-flex mt-4 justify-content-center">
          <h2>Cuidarte es Nuestra Responsabilidad</h2>
        </div>
      </div>
      <div className="row mt-4 todapantalla margenizquierdo margenderecho">
        <div className="col-sm-5">
          <p>
            Para Enfermería Contigo tu bienestar y buena salud es la prioridad.
            Somos la empresa número uno en enfermería a domicilio. Nuestro
            propósito es el de brindar cuidados personalizados con bases éticas
            y profesionales a la altura de nuestros pacientes. Atendemos en las
            zonas del estado Anzoátegui; Puerto la Cruz, Barcelona, Nueva
            Barcelona, Lecherias, Guanta y Puerto píritu.
          </p>
          <button type="button" className="btn btn-primary">
            Leer más
          </button>
        </div>
        <div className="offset-sm-3 col-sm-4 position">
          <svg className="profundidad" width="500" height="50">
            <rect width="300" height="100" className="rectangulocolor" />
          </svg>
          <br />

          <svg className="profundidad rectangulo2" width="500" height="50">
            <rect width="500" height="100" className="rectangulocolor" />
          </svg>
          <img src={nurse} />
        </div>
      </div>

      <div className="row fondoazul todapantalla pb-5">
        <div className="col-sm-12 d-flex justify-content-center mt-4">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="../images/viejo.svg"
            alt="imagen"
            className="mt-4 mb-4 imagenes"
          />
          <p className="pl-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            molestiae eos ea tenetur qui quam voluptatibusofficiis rem maxime
            est magni, doloribus rerum? Accusamus libero numquam saepe harum,
            quod ut?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Harum magni enim accusamus repellat nulla quo amet quos deserunt
            aliquam possimus dolores expedita iure nihil, fugiat, nesciunt
            corporis explicabo earum sequi?
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img
            src="images/cuidados.svg"
            alt="imagen 2"
            className="mt-4 mb-4 imagenes"
          />
          <p className="pl-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            magni enim accusamus repellat nulla quo amet quos deserunt aliquam
            possimus dolores expedita iure nihil, fugiat, nesciunt corporis
            explicabo earum sequi? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Harum magni enim accusamus repellat nulla quo amet
            quos deserunt aliquam possimus dolores expedita iure nihil, fugiat,
            nesciunt corporis explicabo earum sequi?
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img
            src="images/equipo.svg"
            alt="imagen 3"
            className="mt-4 mb-4 imagenes"
          />
          <p className="pl-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            optio itaque numquam doloremque non. Laudantium expedita officia,
            quis in fuga doloribus sed odio, quos unde corrupti vitae incidunt
            perferendis odit.Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Harum magni enim accusamus repellat nulla quo amet quos
            deserunt aliquam possimus dolores expedita iure nihil, fugiat,
            nesciunt corporis explicabo earum sequi?
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 d-flex justify-content-center mt-4">
          <h2>Nuestro Personal</h2>
        </div>

        <div className="col-sm-6 mt-4">
          <img src={viejito} alt="imagen" />
        </div>

        <div className="col-sm-4 mt-4 offset-sm-2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            distinctio pariatur ducimus aspernatur provident tempora, maiores
            quam aperiam. Unde, labore. Iure nihil, laboriosam eius aut vel
            perferendis explicabo perspiciatis quas.
          </p>
          <button type="button" className="btn btn-primary">
            Leer más
          </button>
        </div>
      </div>

      </>
  );
};
