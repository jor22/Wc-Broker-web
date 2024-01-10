import React from "react";
import "./Companies.css";
import alianz from "../assets/Companias/alianz.png";
import bbva from "../assets/Companias/bbva.png";
import expert from "../assets/Companias/expert.png";
import federacion from "../assets/Companias/federacion.png";
import galeno from "../assets/Companias/galeno.png";
import hdi from "../assets/Companias/hdi.png";
import lacaja from "../assets/Companias/la caja.png";
import segunda from "../assets/Companias/la segunda.png";
import mapfre from "../assets/Companias/mapfre.png";
import mercantil from "../assets/Companias/mercantil andina.png";
import meridional from "../assets/Companias/meridional.png";
import rus from "../assets/Companias/rus.png";
import sancristobal from "../assets/Companias/san cristobal.png";
import sancor from "../assets/Companias/sancor.png";
import smg from "../assets/Companias/smg.png";

const Companies = () => {
  return (
    <>
      <div className="Companies_container">
        <img src={alianz} alt="WcBroker" className="icon" />
        <img src={bbva} alt="WcBroker" className="icon" />
        <img src={expert} alt="WcBroker" className="icon" />
        <img src={federacion} alt="WcBroker" className="icon" />
        <img src={galeno} alt="WcBroker" className="icon" />
        <img src={hdi} alt="WcBroker" className="icon" />
        <img src={lacaja} alt="WcBroker" className="icon" />
        <img src={segunda} alt="WcBroker" className="icon" />
        <img src={mapfre} alt="WcBroker" className="icon" />
        <img src={mercantil} alt="WcBroker" className="icon" />
        <img src={meridional} alt="WcBroker" className="icon" />
        <img src={rus} alt="WcBroker" className="icon" />
        <img src={sancristobal} alt="WcBroker" className="icon" />
        <img src={sancor} alt="WcBroker" className="icon" />
        <img src={smg} alt="WcBroker" className="icon" />
      </div>
    </>
  );
};

export default Companies;
