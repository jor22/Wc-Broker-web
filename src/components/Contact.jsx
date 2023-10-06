import React, { useRef } from "react";
import "./Contact.css";
import contactImg from "../assets/Contacto-02.jpg";
import { MdMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const showAlert = () => {
    Swal.fire({
      title: "Tu Mensaje fue enviado con exito",
      text: "A la brevedad nos comunicaremos con usted",
      icon: "success",
      timer: 3000,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxou788",
        "template_q4s2zn8",
        form.current,
        "jzM_4bd6xZPY82jXp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    showAlert();
  };

  return (
    <div className="contact_container">
      <div className="form_container">
        <h2 className="contact_title">Contactate con nosotros.</h2>
        <div className="contact_option">
          <a className="mail_options" href="mailto:hola@wcbroker.com.ar">
            <MdMailOutline className="contact_icon" />
            <h4>Email</h4>
            <h5>hola@wcbroker.com.ar</h5>
          </a>
          <a className="messenger_options" href="https://m.me/wcbroker.ok">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>facebook: wcbroker</h5>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="name"
            placeholder="Nombre y Apellido"
            required
          />
          <input type="email" name="email" placeholder="Tu Email" required />
          <textarea name="messege" rows="7" placeholder="Tu Mensaje"></textarea>
          <button type="submit" className="btn">
            Enviar
          </button>
        </form>
      </div>
      <div className="contact_container_img">
        <img src={contactImg} alt="img" className="contact_img"></img>
      </div>
    </div>
  );
};

export default Contact;
