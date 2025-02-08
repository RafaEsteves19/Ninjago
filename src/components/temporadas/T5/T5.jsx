import React from 'react';
import '../Temporadas.css';
import img1 from '../../../images/T5/T5E1.jpeg';
import img2 from '../../../images/T5/T5E2.jpeg';
import img3 from '../../../images/T5/T5E3.jpeg';
import img4 from '../../../images/T5/T5E4.jpeg';
import img5 from '../../../images/T5/T5E5.jpeg';
import img6 from '../../../images/T5/T5E6.jpeg';
import img7 from '../../../images/T5/T5E7.jpeg';
import img8 from '../../../images/T5/T5E8.jpeg';
import img9 from '../../../images/T5/T5E9.jpeg';
import img10 from '../../../images/T5/T5E10.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';

const T5 = () => {
  const { setOnVideoSelect } = useVideoContext();

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
        <h4>Season 5 - Possession</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
            <h5>Winds Of Change</h5>
            <span>S5 E1</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
            <h5>Ghost Story</h5>
            <span>S5 E2</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
            <h5>Stiix And Stones</h5>
            <span>S5 E3</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
            <h5>The Temple On Haunted Hill</h5>
            <span>S5 E4</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img5} alt="Imagem 5" />
        <div className='flex'>
            <h5>Peek-a-Boo</h5>
            <span>S5 E5</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img6} alt="Imagem 6" />
        <div className='flex'>
            <h5>Kingdom Come</h5>
            <span>S5 E6</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img7} alt="Imagem 7" />
        <div className='flex'>
            <h5>The Crooked Path</h5>
            <span>S5 E7</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img8} alt="Imagem 8" />
        <div className='flex'>
            <h5>Grave Danger</h5>
            <span>S5 E8</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img9} alt="Imagem 9" />
        <div className='flex'>
            <h5>Curseworld, Part I</h5>
            <span>S5 E9</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img10} alt="Imagem 10" />
        <div className='flex'>
            <h5>Curseworld, Part II</h5>
            <span>S5 E10</span>
        </div>
      </button>
    </div>
  );
};

export default T5;