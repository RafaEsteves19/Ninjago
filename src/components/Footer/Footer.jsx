import React from 'react';
import './Footer.css'
import imgFooter from '../../images/footer.jpeg'

const Footer = () => {

  return (
    <div class="container-footer">
        <img src={imgFooter} alt="Imagem" class="imagem"/>
        <div class="degrade"></div>
        <div class="degrade2"></div>
    </div>
  );
};

export default Footer ;

  