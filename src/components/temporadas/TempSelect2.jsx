import React, { useState } from 'react';
import './TempSelect.css'

const T11 = () => <div>Season Content Not Found</div>;
const T12 = () => <div>Season Content Not Found</div>;
const T13 = () => <div>Season Content Not Found</div>;
const T14 = () => <div>Season Content Not Found</div>;
const T15 = () => <div>Season Content Not Found</div>;
const T16 = () => <div>Season Content Not Found</div>;

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
          <button className='button-show-temp' onClick={() => handleButtonClick(<T11 />)}>Season 1</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T12 />)}>Season 2</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T13 />)}>Season 3</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T14 />)}>Season 4</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T15 />)}>Season 5</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T16 />)}>Season 6</button>
        </div>
      )}

      <div>
        {activeComponent}
      </div>
    </div>
  );
};

export default Select;
