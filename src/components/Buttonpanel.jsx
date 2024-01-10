import React, { useState } from "react";
import "./Buttonpanel.css";
import celular from "../assets/Celular.png";
import hogar from "../assets/Hogar.png";
import bici from "../assets/Bicicleta.png";
import moto from "../assets/Moto.png";
import auto from "../assets/Auto.png";
import notebook from "../assets/Notebook.png";
import { BsArrowRightCircleFill } from "react-icons/bs";

function Buttons() {
  const [buttonPressed, setButtonPressed] = useState(null);

  const handleButtonPressed = (buttonNumber) => {
    setButtonPressed(buttonNumber);

    const urls = {
      1: "https://www.sancristobal.com.ar/pas/wcseguros/seguro-hogar ",
      2: "https://docs.google.com/forms/d/e/1FAIpQLSfSi3FXgtIZ-ImojmbFTGHQc17w4ahxKV08s6j7sooDAXrS9w/viewform?usp=sf_link",
      3: "https://motos.rus.com.ar/13052",
      4: "https://www.sancristobal.com.ar/pas/wcseguros/cotizar",
      5: "https://docs.google.com/forms/d/e/1FAIpQLSdP2xxfsLft67DxlgaAeCQD_3KDq6ttiTxn7M-jc0tLiKg1yA/viewform?usp=sf_link",
      6: "https://docs.google.com/forms/d/e/1FAIpQLSd1R35Z3X3ZR_mmpsPWUah-m7PyhT9EZL0Q2dhdJ3zJqgv4Fw/viewform?usp=sf_link",
    };

    if (urls[buttonNumber]) {
      window.location.href = urls[buttonNumber];
    }
  };

  return (
    <div className="panel_container">
      <h2 className="blue_text">¿Qué tipo de seguro estás buscando?</h2>
      <h3>Descubrí las coberturas y servicios que tenemos para vos.</h3>
      <div className="Buttons_container">
        <div className="Button_container">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Hogar</span>
            <button
              className={`button ${buttonPressed === 1 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(1)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={hogar} alt="about_img" />
            </div>
          </div>
        </div>
        <div className="Button_container">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Bicicleta</span>
            <button
              className={`button ${buttonPressed === 2 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(2)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={bici} alt="about_img" />
            </div>
          </div>
        </div>

        <div className="Button_container ">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Moto</span>
            <button
              className={`button ${buttonPressed === 3 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(3)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={moto} alt="about_img" />
            </div>
          </div>
        </div>

        <div className="Button_container">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Auto</span>
            <button
              className={`button ${buttonPressed === 4 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(4)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={auto} alt="about_img" />
            </div>
          </div>
        </div>

        <div className="Button_container">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Celular</span>
            <button
              className={`button ${buttonPressed === 5 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(5)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={celular} alt="about_img" />
            </div>
          </div>
        </div>

        <div className="Button_container">
          <div className="Button_text column">
            seguro <br /> <span className="blue_text">Notebook</span>
            <button
              className={`button ${buttonPressed === 6 ? "active" : ""} vermas`}
              onClick={() => handleButtonPressed(6)}
            >
              <BsArrowRightCircleFill /> Ver más
            </button>
          </div>
          <div className="column">
            <div className="ButtonLogo_img">
              <img src={notebook} alt="about_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
