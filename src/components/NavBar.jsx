import React, { useState } from "react";
import "./navBar.css";
import Logo from "../assets/wcLogo.png";
import logoMobile from "../assets/LogoMobile.png";
import { Link } from "react-scroll";
import BurgerButton from "./BurgerButton";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="nav_container">
      <div className="Logo">
        <img src={Logo} alt="WcBroker" />
      </div>
      <div className="LogoMobile">
        <img src={logoMobile} alt="WcBroker" />
      </div>
      <div className="Links">
        <ul className="Menu_container">
          <li>
            <Link to="insurrance" smooth={true} duration={500} className="a">
              Seguros
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={600} className="a">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={750} className="a">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
      <div className="burger">
        <BurgerButton isActive={isActive} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default NavBar;
