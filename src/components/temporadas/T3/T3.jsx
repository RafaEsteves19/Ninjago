import React from 'react';
import '../Temporadas.css';
import img1 from '../../../images/T3/T3E1.jpeg';
import img2 from '../../../images/T3/T3E2.jpeg';
import img3 from '../../../images/T3/T3E3.jpeg';
import img4 from '../../../images/T3/T3E4.jpeg';
import img5 from '../../../images/T3/T3E5.jpeg';
import img6 from '../../../images/T3/T3E6.jpeg';
import img7 from '../../../images/T3/T3E7.jpeg';
import img8 from '../../../images/T3/T3E8.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';

const T3 = () => {
  const { setOnVideoSelect } = useVideoContext();

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
        <h4>Season 3 - Rebooted</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/un12NyOPPFeD/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
            <h5>The Surge</h5>
            <span>S3 E1</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/Jv6f3qRKDPEi/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
            <h5>The Art Of The Silent Fist</h5>
            <span>S3 E2</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/OycoMq6fSh1z/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
            <h5>Blackout</h5>
            <span>S3 E3</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/MjbZWmt2qX1i/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
            <h5>The Curse Of The Golden Master</h5>
            <span>S3 E4</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/E78VdjTqtfOz/')}
      >
        <img className='episodeos' src={img5} alt="Imagem 5" />
        <div className='flex'>
            <h5>Enter The Digiverse</h5>
            <span>S3 E5</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/7aw0RMqTeB1l/')}
      >
        <img className='episodeos' src={img6} alt="Imagem 6" />
        <div className='flex'>
            <h5>Codename: Arcturus</h5>
            <span>S3 E6</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/LDl0EK9r6dAy/')}
      >
        <img className='episodeos' src={img7} alt="Imagem 7" />
        <div className='flex'>
            <h5>The Void</h5>
            <span>S3 E7</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img8} alt="Imagem 8" />
        <div className='flex'>
            <h5>The Titanium Ninja</h5>
            <span>S3 E8</span>
        </div>
      </button>
    </div>
  );
};

export default T3;