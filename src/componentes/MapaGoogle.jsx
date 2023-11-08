import React from 'react';

function MapaGoogle() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1525591044556!2d-46.6554453104539!3d-23.562963687444665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1694879207088!5m2!1spt-BR!2sbr"
      width="97%"
      height="400px"
      style={{ border: '0', margin:'-10px'}}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default MapaGoogle;
