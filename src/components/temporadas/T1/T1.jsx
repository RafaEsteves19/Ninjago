import React, { useState } from 'react';
import '../Temporadas.css';
import img1 from '../../../images/T1/T1E1.jpeg';
import img2 from '../../../images/T1/T1E2.jpeg';
import img3 from '../../../images/T1/T1E3.jpeg';
import img4 from '../../../images/T1/T1E4.jpeg';
import img5 from '../../../images/T1/T1E5.jpeg';
import img6 from '../../../images/T1/T1E6.jpeg';
import img7 from '../../../images/T1/T1E7.jpeg';
import img8 from '../../../images/T1/T1E8.jpeg';
import img9 from '../../../images/T1/T1E9.jpeg';
import img10 from '../../../images/T1/T1E10.jpeg';
import img11 from '../../../images/T1/T1E11.jpeg';
import img12 from '../../../images/T1/T1E12.jpeg';
import img13 from '../../../images/T1/T1E13.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const T1 = () => {
  const { setOnVideoSelect } = useVideoContext();
  const [showDescription, setShowDescription] = useState(null);
  
    const handleClick = (episode) => {
      setShowDescription(prev => (prev === episode ? null : episode));
    };

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
    }
  };

  return (
    <div>
      <h4>Season 1 - Rise Of The Snakes</h4>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/diVG09fSI3eQ/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
            <h5>Rise Of The Snakes</h5>
            <span>S1 E1</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(1)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 1 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/RIQGR2nZlViu/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
            <h5>Home</h5>
            <span>S1 E2</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(2)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 2 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/bRWCjQ3BjNpd/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
            <h5>Snake Bite</h5>
            <span>S1 E3</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(3)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 3 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/PClahbtkfGDZ/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
            <h5>Never Trust A Snake</h5>
            <span>S1 E4</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(4)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 4 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/61ctHdSKbEUz/')}
      >
        <img className='episodeos' src={img5} alt="Imagem 5" />
        <div className='flex'>
            <h5>Can Of Worms</h5>
            <span>S1 E5</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(5)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 5 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/IMOHLn8Xez7s/')}
      >
        <img className='episodeos' src={img6} alt="Imagem 6" />
        <div className='flex'>
            <h5>The Snake King</h5>
            <span>S1 E6</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(6)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 6 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/Pqt9j8ztuMi0/')}
      >
        <img className='episodeos' src={img7} alt="Imagem 7" />
        <div className='flex'>
            <h5>Tick Tack</h5>
            <span>S1 E7</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(7)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 7 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/BI6pN0tthldk/')}
      >
        <img className='episodeos' src={img8} alt="Imagem 8" />
        <div className='flex'>
            <h5>Once Bitten, Twice Shy</h5>
            <span>S1 E8</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(8)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 8 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/VVDUkpzeAOP6/')}
      >
        <img className='episodeos' src={img9} alt="Imagem 9" />
        <div className='flex'>
            <h5>The Royal Blacksmiths</h5>
            <span>S1 E9</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(9)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 9 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/scX6byyhf8NZ/')}
      >
        <img className='episodeos' src={img10} alt="Imagem 10" />
        <div className='flex'>
            <h5>The Green Ninja</h5>
            <span>S1 E10</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(10)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 10 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/GyQuKwUuttGd/')}
      >
        <img className='episodeos' src={img11} alt="Imagem 11" />
        <div className='flex'>
            <h5>All Of Nothing</h5>
            <span>S1 E11</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(11)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 11 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/EeO19FJc9Yum/')}
      >
        <img className='episodeos' src={img12} alt="Imagem 12" />
        <div className='flex'>
            <h5>The Rise Of The Great Devourer</h5>
            <span>S1 E12</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(12)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 12 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/MVTRrXPw9S1i/')}
      >
        <img className='episodeos' src={img13} alt="Imagem 13" />
        <div className='flex'>
            <h5>Day Of The Great Devourer</h5>
            <span>S1 E13</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(13)}><FontAwesomeIcon icon={faInfoCircle}/></button>
            {showDescription === 13 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
    </div>
  );
};

export default T1;
