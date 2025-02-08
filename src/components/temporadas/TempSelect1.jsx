import React, { useState } from 'react';
import T1 from './T1/T1'
import T2 from './T2/T2'
import T3 from './T3/T3'
import T4 from './T4/T4'
import T5 from './T5/T5'
import './TempSelect.css'

const T6 = () => <div>Season Content Not Found</div>;
const T7 = () => <div>Season Content Not Found</div>;
const T8 = () => <div>Season Content Not Found</div>;
const T9 = () => <div>Season Content Not Found</div>;
const T10 = () => <div>Season Content Not Found</div>;

const Select = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setShowButtons(false);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div>
      <button className='button-show-temp' onClick={() => setShowButtons(!showButtons)}>
        {showButtons ? 'Seasons :' : 'Seasons'}
      </button>

      {showButtons && (
        <div>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T1 />)}>Season 1</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T2 />)}>Season 2</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T3 />)}>Season 3</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T4 />)}>Season 4</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T5 />)}>Season 5</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T6 />)}>Season 6</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T7 />)}>Season 7</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T8 />)}>Season 8</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T9 />)}>Season 9</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T10 />)}>Season 10</button>
        </div>
      )}

      <div>
        {activeComponent}
      </div>
    </div>
  );
};

export default Select;
