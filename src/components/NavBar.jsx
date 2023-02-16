import React from "react";
import './navBar.css';
import Logo from '../assets/logo.png';


const NavBar = () => {
    return (
        <div className="nav_container">
            <div className="Logo">
            <img src={Logo}   alt="WcBroker"/>
            </div>
        </div>
    )
}

export default NavBar; 