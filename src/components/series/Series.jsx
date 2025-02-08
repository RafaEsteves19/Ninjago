import React, { useState } from 'react';
import './Series.css';
import img1 from '../../images/series/begin.jpeg';
import img2 from '../../images/series/spin.jpg';
import img3 from '../../images/series/the-serie.jpeg';
import img4 from '../../images/series/rising.jpg';
import Temp from '../temp-menu/TempMenu';
import Begin from '../temporadas/Begin/Begin';
import Masters from '../temporadas/TempSelect1';
import TheSerie from '../temporadas/TempSelect2';
import Rising from '../temporadas/TempSelect3';

const Series = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isTempVisible, setTempVisible] = useState(false);

  const handleShowTemp = (title) => {
    setSelectedTitle(title);

    switch (title) {
      case 'The Beginning':
        setSelectedComponent(() => Begin);
        break;
      case 'Masters Of Spinjitzu':
        setSelectedComponent(() => Masters);
        break;
      case 'Ninjago The Serie':
        setSelectedComponent(() => TheSerie);
        break;
      case 'Dragons Rising':
        setSelectedComponent(() => Rising);
        break;
      default:
        setSelectedComponent(null);
    }

    setTempVisible(true);
  };

  const handleCloseTemp = () => {
    setTempVisible(false);
    window.location.reload();
  };

  return (
    <div className='container'>
      {isTempVisible && <Temp onClose={handleCloseTemp} title={selectedTitle} Component={selectedComponent} />}
      <div>
        <button onClick={() => handleShowTemp('The Beginning')}>
          <img src={img1} alt="Imagem 1" />
          <h4>The Beginning</h4>
        </button>
      </div>
      <div>
        <button onClick={() => handleShowTemp('Masters Of Spinjitzu')}>
          <img src={img2} alt="Imagem 2" />
          <h4>Masters Of Spinjitzu</h4>
        </button>
      </div>
      <div>
        <button onClick={() => handleShowTemp('Ninjago The Serie')}>
          <img src={img3} alt="Imagem 3" />
          <h4>Ninjago The Serie</h4>
        </button>
      </div>
      <div>
        <button onClick={() => handleShowTemp('Dragons Rising')}>
          <img src={img4} alt="Imagem 4" />
          <h4>Dragons Rising</h4>
        </button>
      </div>
    </div>
  );
};

export default Series;
