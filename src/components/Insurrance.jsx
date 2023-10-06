import React from "react";
import "./Insurrance.css";
import actitud from "../assets/actitud positiva.png";
import soluciones from "../assets/soluciones personalizadas.png";
import respuestas from "../assets/respuesta inmediata.png";
import proteccion from "../assets/Protecci+¦n.png";

const Insurrance = () => {
  return (
    <div className="Insurrance_container">
      <h3 className="insurrance_parragraph">
        Somos apasionados{" "}
        <span className="yellow_text">
          de simplificar la gestión de seguros,
        </span>
        <br /> un aliado confiable de individuos y empresas.
      </h3>
      <div className="insurrance_icons_container">
        <div className="insurrance_icon">
          <img src={soluciones} alt="actitud" className="ins_icon" />
          <p className="ins_Paragraph">
            Soluciones <br /> personalizadas.
          </p>
        </div>
        <div className="insurrance_icon">
          <img src={respuestas} alt="actitud" className="ins_icon" />
          <p className="ins_Paragraph">
            Respuesta
            <br />
            inmediata.
          </p>
        </div>
        <div className="insurrance_icon">
          <img src={actitud} alt="actitud" className="ins_icon" />
          <p className="ins_Paragraph">
            Actitud positiva <br /> y compromiso.
          </p>
        </div>
        <div className="insurrance_icon">
          <img src={proteccion} alt="actitud" className="ins_icon" />
          <p className="ins_Paragraph">
            Protección <br /> confiable y honesta.
          </p>
        </div>
      </div>
      <h3 className="insurrance_parragraph">
        En <span className="yellow_text">Wc Broker</span> forjamos alianzas
        estratégicas con las{" "}
        <span className="bold_text"> compañías líderes del mercado</span>.
        Ofreciendo a nuestros asegurados opciones de cobertura confiables,
        asegurando que estén protegidos por los mejores estándares de la
        industria y sin pagar de más.
      </h3>

      <h3 className="insurrance_parragraph">
        <span className="bold_text">
          Tu seguridad y tranquilidad son nuestra prioridad.
        </span>
      </h3>

      <div className="insurrance_img"></div>
    </div>
  );
};

export default Insurrance;
