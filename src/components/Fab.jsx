import React from 'react';
import whatsapp_logo from '../assets/whatsApp.png'

const FAB = () => (
  <a 
   href='https://api.whatsapp.com/send?phone=541132119006' target="_blank"
    style={{
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '90px',
    height: '90px',
    display: 'flex',
    cursor: 'pointer',
  }}>
    <img  src={whatsapp_logo} style={{ color: '#fff', fontSize: '36px' }} className="whatsapp_icon"></img>
  </a>
);

export default FAB;
