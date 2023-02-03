import React from "react";
import './Footer.css';
import footerLogo from '../assets/WcFooterLogo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={footerLogo}  alt="footer-logo"/>
            </div>

        </div>
    )
}

export default Footer; 