import React,{useRef} from "react";
import './Contact.css';
import contactImg from '../assets/img884.png'
import {MdMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    
    return (
        <div className="contact_container"> 
            <div className="form_container">
                    <h2 className="contact_title">Contactate con nosotros.</h2>
                <div className="contact_option">
                    <article className="mail_options" >
                        <MdMailOutline className="contact_icon"/>
                        <h4>Email</h4>
                        <a href="mailto:hola@wcbroker.com.ar">hola@wcbroker.com.ar</a>
                    </article>
                    <article className="messenger_options" >
                        <RiMessengerLine className="contact_icon"/>
                        <h4>Messenger</h4>
                        <a  href="https://m.me/jorgeariel.castillo.5">facebook: wcbroker</a>
                    </article>

                </div>
                <form ref={form}  onSubmit={sendEmail} className="form">
                    <input type="text" name="name" placeholder="Nombre y Apellido"  required/>
                    <input type="email" name ="email"  placeholder="Tu Email" required/>
                    <textarea name="messege" rows="7" placeholder="Tu Mensaje" ></textarea>
                    <button type="submit" className="btn">Enviar</button>
                </form>
            </div>
            <div className="contact_container_img">
                <img src = {contactImg} alt="img" className="contact_img"></img>
            </div>
        </div>
    )
}

export default Contact; 