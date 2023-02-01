import React from "react";
import './Header.css';
import headerImg from "../assets/Headerimg.png"

const Header = () => {
    return (
        <>
            <div className="header_container">
                <h1 className="title">Asegurate de disfrutar.</h1>
                <div className="header_img">
                    <img src={headerImg}  alt="header_img"/>
                </div>
            </div>
        </>
    )
}

export default Header; 