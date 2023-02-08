import React from "react";
import './Contact.css';
import contactImg from '../assets/img884.png'
import {MdMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
    return (
        <div className="contact_container"> 
            <div className="form_container">
                    <h2 className="contact_title">Contactate con nosotros.</h2>
                <div className="contact_option">
                    <article className="mail_options" >
                        <MdMailOutline className="contact_icon"/>
                        <h4>Email</h4>
                        <a  target="_blank">hola@wcbroker.com.ar</a>
                    </article>
                    <article className="messenger_options" >
                        <RiMessengerLine className="contact_icon"/>
                        <h4>Messenger</h4>
                        <a  target="_blank">facebook:wcbroker</a>
                    </article>

                    
                </div>
                <form action="" className="form">
                    <input type="text" name="name" placeholder="Nombre Completo"  required/>
                    <input type="email" name ="email"  placeholder="Tu Email" required/>
                    <textarea name="messege" rows="7" placeholder="Tu Mensaje" ></textarea>
                    <button type="submit" className="btn">Enviar</button>
                </form>
            </div>
            <div className="contact_img">
                <img src = {contactImg} alt="img"></img>
            </div>
        </div>
    )
}

export default Contact; 