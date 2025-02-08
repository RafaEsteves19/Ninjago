import React from 'react';
import '../Temporadas.css';
import img1 from '../../../images/T2/T2E1.jpeg';
import img2 from '../../../images/T2/T2E2.jpeg';
import img3 from '../../../images/T2/T2E3.jpeg';
import img4 from '../../../images/T2/T2E4.jpeg';
import img5 from '../../../images/T2/T2E5.jpeg';
import img6 from '../../../images/T2/T2E6.jpeg';
import img7 from '../../../images/T2/T2E7.jpeg';
import img8 from '../../../images/T2/T2E8.jpeg';
import img9 from '../../../images/T2/T2E9.jpeg';
import img10 from '../../../images/T2/T2E10.jpeg';
import img11 from '../../../images/T2/T2E11.jpeg';
import img12 from '../../../images/T2/T2E12.jpeg';
import img13 from '../../../images/T2/T2E13.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';

const T2 = () => {
  const { setOnVideoSelect } = useVideoContext();

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
      <h4>Season 2 - The Legacy Of The Green Ninja</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/E9lbne5hbTnA/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
            <h5>Darkness Shall Rise</h5>
            <span>S2 E1</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/DOKO38mJojps/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
            <h5>Pirates Vs. Ninja</h5>
            <span>S2 E2</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/7fGWhn2URdBb/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
            <h5>Double Trouble</h5>
            <span>S2 E3</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/Ew31NIgcjqgA/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
            <h5>Ninjaball Run</h5>
            <span>S2 E4</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/JXnTqJkcP6ME/')}
      >
        <img className='episodeos' src={img5} alt="Imagem 5" />
        <div className='flex'>
            <h5>Child's Play</h5>
            <span>S2 E5</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/QekZgoemVRNX/')}
      >
        <img className='episodeos' src={img6} alt="Imagem 6" />
        <div className='flex'>
            <h5>Wrong Place, Wrong Time</h5>
            <span>S2 E6</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/DAuTZdSCOctN/')}
      >
        <img className='episodeos' src={img7} alt="Imagem 7" />
        <div className='flex'>
            <h5>The Stone Army</h5>
            <span>S2 E7</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/gPQS039usaEs/')}
      >
        <img className='episodeos' src={img8} alt="Imagem 8" />
        <div className='flex'>
            <h5>The Day Ninjago Stood Still</h5>
            <span>S2 E8</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/vo4aXY77UPRz/')}
      >
        <img className='episodeos' src={img9} alt="Imagem 9" />
        <div className='flex'>
            <h5>The Last Voyage</h5>
            <span>S2 E9</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/eo95EQYthOH1/')}
      >
        <img className='episodeos' src={img10} alt="Imagem 10" />
        <div className='flex'>
            <h5>Island Of Darkness</h5>
            <span>S2 E10</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/kTbRgu5kOVvh/')}
      >
        <img className='episodeos' src={img11} alt="Imagem 11" />
        <div className='flex'>
            <h5>The Last Hope</h5>
            <span>S2 E11</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/WEZXNSB9erk2/')}
      >
        <img className='episodeos' src={img12} alt="Imagem 12" />
        <div className='flex'>
            <h5>Return Of The Overlord</h5>
            <span>S2 E12</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/4FwZM89EPkxm/')}
      >
        <img className='episodeos' src={img13} alt="Imagem 13" />
        <div className='flex'>
            <h5>Rise Of The Spinjitzu Master</h5>
            <span>S2 E13</span>
        </div>
      </button>
    </div>
  );
};

export default T2;
