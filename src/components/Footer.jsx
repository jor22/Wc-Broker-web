import React from "react";
import './Footer.css';
import footerLogo from '../assets/wc_broker_POSITIVO.png'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={footerLogo}  alt="footer-logo"/>
            </div>

            <ul className="footer_info">
                <li>+54123456789</li>
                <li>wcbroker@gmail.com</li>
            </ul>

            <div className="footer_social">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy;WC Broker. 2023 </small>
            </div>

        </div>
    )
}

export default Footer; 