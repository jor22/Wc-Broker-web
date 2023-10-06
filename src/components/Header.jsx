import React from "react";
import "./Header.css";
import alianz from "../assets/Companias/alianz.png";

const Header = () => {
  return (
    <>
      <div className="header_container">
        <h1 className="title">Asegurate de disfrutar</h1>
        <div className="header_img">
          <img src={alianz} alt="WcBroker" />
        </div>
      </div>
    </>
  );
};

export default Header;
