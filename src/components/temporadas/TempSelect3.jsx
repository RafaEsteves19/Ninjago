import React, { useState } from 'react';
import './TempSelect.css'
import T18 from './T18/T18'

const T17 = () => <div>Season Content Not Found</div>;

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
          <button className='button-show-temp' onClick={() => handleButtonClick(<T17 />)}>Season 1</button>
          <button className='button-show-temp' onClick={() => handleButtonClick(<T18 />)}>Season 2</button>
        </div>
      )}

      <div>
        {activeComponent}
      </div>
    </div>
  );
};

export default Select;