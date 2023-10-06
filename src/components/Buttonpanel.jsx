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
      1: "https://www.google.com",
      2: "https://www.youtube.com",
      3: "https://www.facebook.com",
      4: "https://www.instagram.com",
      5: "https://www.google.com",
      6: "https://www.youtube.com",
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
