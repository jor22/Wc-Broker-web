import React from "react";
import './about.css';
import About_img from "../assets/About_Img.png"

const About = () => {
    return (
        <>
            <div className="about_container">
                <div className="about_img">
                    <img src={About_img} alt="about_img" />
                </div>
                
                <h3 className="about_paragraph_1">
                    Somos una empresa dedicada al 
                    asesoramiento integral de seguros y 
                    administración de riesgos para 
                    empresas e individuos.
                </h3>
                    
                <h3 className="about_paragraph_2">
                    Brindamos un asesoramiento actualizado y 
                    personalizado, basado en una disposición 
                    permanente, generando una respuesta inmediata
                </h3>

            </div>
        </>
    )
}

export default About; 