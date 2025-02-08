import React, { useEffect } from 'react';
import './TempMenu.css';

const Temp = ({ onClose, title, Component }) => {
  let marginTop;
  switch (title) {
    case 'The Beginning':
      marginTop = '380px';
      break;
    case 'Masters Of Spinjitzu':
      marginTop = '1800px';
      break;
    case 'Ninjago The Serie':
      marginTop = '20px';
      break;
    case 'Dragons Rising':
      marginTop = '920px';
      break;
    default:
      marginTop = '50px';
  }

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, []);

  return (
    <div className='temp-overlay'>
      <div className='temp-content' style={{ marginTop }}>
        <div>
          <h2>{title}</h2>
          {Component && <Component />}
        </div>
        <button className='close-button' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Temp;
