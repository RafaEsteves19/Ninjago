import React, { useState } from 'react';
import '../Temporadas.css';
import img1 from '../../../images/begin/begin2.jpeg';
import img2 from '../../../images/begin/king.jpeg';
import img3 from '../../../images/begin/battle.jpeg';
import img4 from '../../../images/begin/under.jpeg';
import { useVideoContext } from '../../video-player/VideoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Begin = () => {
  const { setOnVideoSelect } = useVideoContext();
  const [showDescription, setShowDescription] = useState(null);

  const handleClick = (episode) => {
    setShowDescription(prev => (prev === episode ? null : episode));
  };

  const handleVideoSelect = (url) => {
    if (setOnVideoSelect) {
      setOnVideoSelect(url);
      setShowDescription(null);
    }
  };

  return (
    <div>
      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/oiDGIs20bOE2/')}
      >
        <img className='episodeos' src={img1} alt="Imagem 1" />
        <div className='flex'>
          <h5>Way Of The Ninja</h5>
          <span>E1</span>
        </div>
      </button>
      <button className='description' onClick={() => handleClick(1)}><FontAwesomeIcon icon={faInfoCircle}/></button>
      {showDescription === 1 && <p>Kai, a young blacksmith, joins Sensei Wu and begins training to become a ninja, while Nya, his sister, worries about his fate. Together, they must learn the art of Spinjitzu to face the challenges that lie ahead.</p>}

      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/KwNG7Uyo8h5Q/')}
      >
        <img className='episodeos' src={img2} alt="Imagem 2" />
        <div className='flex'>
          <h5>King Of Shadows</h5>
          <span>E2</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(2)}><FontAwesomeIcon icon={faInfoCircle}/></button>
      {showDescription === 2 && <p>The ninjas face the Shadow King, who tries to regain his power and dominate Ninjago. As they fight this new threat, they must overcome their own fears and work together to protect their home.</p>}

      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/3hzpmOAbToCK/')}
      >
        <img className='episodeos' src={img3} alt="Imagem 3" />
        <div className='flex'>
          <h5>Battle Between Brothers</h5>
          <span>E3</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(3)}><FontAwesomeIcon icon={faInfoCircle}/></button>
      {showDescription === 3 && <p>Sensei Wu tells the story of how he and his brother Garmadon became enemies, revealing the battle that resulted in Garmadon's banishment to the Underworld.</p>}

      <button 
        className='container-episodeos'
        onClick={() => handleVideoSelect('https://old.bitchute.com/embed/utQzOfQ9VC3S/')}
      >
        <img className='episodeos' src={img4} alt="Imagem 4" />
        <div className='flex'>
          <h5>An Under Worldly Take Over</h5>
          <span>E4</span>
        </div>
      </button>
      <button  className='description' onClick={() => handleClick(4)}><FontAwesomeIcon icon={faInfoCircle}/></button>
      {showDescription === 4 && <p>Wu reveals how Lord Garmadon took control of the Underworld, becoming the new ruler.</p>}
    </div>
  );
};

export default Begin;
