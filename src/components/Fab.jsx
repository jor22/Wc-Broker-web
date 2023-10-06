import React from "react";
import whatsapp_logo from "../assets/whatsApp.png";

const FAB = () => (
  <a
    href="https://api.whatsapp.com/send?phone=541123667415"
    target="_blank"
    style={{
      position: "fixed",
      bottom: "30px",
      right: "30px",
      width: "5rem",
      height: "5rem",
      display: "flex",
      cursor: "pointer",
      zIndex: "2",
    }}
    rel="noreferrer"
  >
    <img
      src={whatsapp_logo}
      style={{ color: "#fff", fontSize: "36px" }}
      className="whatsapp_icon"
      alt="WcBrokerwhatsapp"
    ></img>
  </a>
);

export default FAB;
