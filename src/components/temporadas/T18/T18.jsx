import React from 'react';
import '../Temporadas.css';
import img11 from '../../../images/T18/T18E11.jpeg';
import img12 from '../../../images/T18/T18E12.jpeg';
import img13 from '../../../images/T18/T18E13.jpeg';
import img14 from '../../../images/T18/T18E14.jpeg';
import img15 from '../../../images/T18/T18E15.jpeg';
import img16 from '../../../images/T18/T18E16.jpeg';
import img17 from '../../../images/T18/T18E17.jpeg';
import img18 from '../../../images/T18/T18E18.jpeg';
import img19 from '../../../images/T18/T18E19.jpeg';
import img20 from '../../../images/T18/T18E20.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';

const T17 = () => {
  const { setOnVideoSelect } = useVideoContext();

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
      <h4>Season 2</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/aZSNou7p05Eh/')}
      >
        <img className='episodeos' src={img11} alt="Imagem 11" />
        <div className='flex'>
          <h5>The Shape Of Motion</h5>
          <span>S2 E11</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/qcVNMbDPdh7D/')}
      >
        <img className='episodeos' src={img12} alt="Imagem 12" />
        <div className='flex'>
          <h5>Enter The City Of Temples</h5>
          <span>S2 E12</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/e62QLQ2aTKaL/')}
      >
        <img className='episodeos' src={img13} alt="Imagem 13" />
        <div className='flex'>
          <h5>They Gather For The Feast</h5>
          <span>S2 E13</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/lpxbo9EddPIS/')}
      >
        <img className='episodeos' src={img14} alt="Imagem 14" />
        <div className='flex'>
          <h5>Inside The Maze</h5>
          <span>S2 E14</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/pDDMnOkHbpMh/')}
      >
        <img className='episodeos' src={img15} alt="Imagem 15" />
        <div className='flex'>
          <h5>United We Fall</h5>
          <span>S2 E15</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/QpNXpt594omp/')}
      >
        <img className='episodeos' src={img16} alt="Imagem 16" />
        <div className='flex'>
          <h5>Truth And Lies</h5>
          <span>S2 E16</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/VBaASiVVhCs4/')}
      >
        <img className='episodeos' src={img17} alt="Imagem 17" />
        <div className='flex'>
          <h5>The Sword Shatters</h5>
          <span>S2 E17</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/sEcbZ0tDkNHC/')}
      >
        <img className='episodeos' src={img18} alt="Imagem 18" />
        <div className='flex'>
          <h5>Clues And Suspects</h5>
          <span>S2 E18</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/bSAjT9DRNlIh/')}
      >
        <img className='episodeos' src={img19} alt="Imagem 19" />
        <div className='flex'>
          <h5>The Final Game</h5>
          <span>S2 E19</span>
        </div>
      </button>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/9CRF0mHHSaSF/')}
      >
        <img className='episodeos' src={img20} alt="Imagem 20" />
        <div className='flex'>
          <h5>Elements Of Betrayal</h5>
          <span>S2 E20</span>
        </div>
      </button>
    </div>
  );
};

export default T17;
