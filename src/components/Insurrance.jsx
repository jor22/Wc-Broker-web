import React from "react";
import './Insurrance.css';
import Sky from '../assets/CieloPng.png'
import InsurranceImg from '../assets/marcasSeguros.png'

const Insurrance = () => {
    return (
        <div className="Insurrance_container">
          <div className="sky_img">
            <img src={Sky} alt="Cielo" />
          </div>

          <h3 className="insurrance_parragraph">
            Contamos con el respaldo de las compañías 
            líderes del mercado, y un excelente equipo 
            de profesionales dispuesto a garantizar una 
            experiencia óptima en la contratación y 
            gestión de sus productos.
          </h3>

          <div className="insurrance_img">
            <img src={InsurranceImg} alt="InsurranceImg" />
          </div>

        </div>
    )
}

export default Insurrance; 