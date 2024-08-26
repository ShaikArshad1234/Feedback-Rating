import React, { useState } from 'react';

const Categories = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <p>Pick a subject and provide your feedback:</p>
      <div>
        <button onClick={() => handleOptionClick('Bug')}>
          Bug
        </button>
        <button onClick={() => handleOptionClick('Content')}>
          Content
        </button>
        <button onClick={() => handleOptionClick('Other')}>
          Other
        </button>
      </div>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default Categories;
