import React from 'react';
import '../Temporadas.css';
import img1 from '../../../images/T4/T4E1.jpeg';
import img2 from '../../../images/T4/T4E2.jpeg';
import img3 from '../../../images/T4/T4E3.jpeg';
import img4 from '../../../images/T4/T4E4.jpeg';
import img5 from '../../../images/T4/T4E5.jpeg';
import img6 from '../../../images/T4/T4E6.jpeg';
import img7 from '../../../images/T4/T4E7.jpeg';
import img8 from '../../../images/T4/T4E8.jpeg';
import img9 from '../../../images/T4/T4E9.jpeg';
import img10 from '../../../images/T4/T4E10.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';

const T4 = () => {
  const { setOnVideoSelect } = useVideoContext();

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
        <h4>Season 4 - Tournament Of The Elements</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
            <h5>The Invitation</h5>
            <span>S4 E1</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
            <h5>Only One Can Remain</h5>
            <span>S4 E2</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
            <h5>Versus</h5>
            <span>S4 E3</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
            <h5>Ninja Roll</h5>
            <span>S4 E4</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img5} alt="Imagem 5" />
        <div className='flex'>
            <h5>Spy For A Spy</h5>
            <span>S4 E5</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img6} alt="Imagem 6" />
        <div className='flex'>
            <h5>Spellbound</h5>
            <span>S4 E6</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img7} alt="Imagem 7" />
        <div className='flex'>
            <h5>The Forgotten Element</h5>
            <span>S4 E7</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img8} alt="Imagem 8" />
        <div className='flex'>
            <h5>The Day Of The Dragon</h5>
            <span>S4 E8</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img9} alt="Imagem 9" />
        <div className='flex'>
            <h5>The Greatest Fear Of All</h5>
            <span>S4 E9</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/TROCAR PARA ID/')}
      >
        <img className='episodeos' src={img10} alt="Imagem 10" />
        <div className='flex'>
            <h5>The Corridor Of Elders</h5>
            <span>S4 E10</span>
        </div>
      </button>
    </div>
  );
};

export default T4;