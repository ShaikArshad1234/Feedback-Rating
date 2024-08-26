import React, { useState } from 'react';

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Multiple choice - 1 answer</h3>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleOptionChange}
          />
          Radio 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleOptionChange}
          />
          Radio 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="Option 3"
            checked={selectedOption === 'Option 3'}
            onChange={handleOptionChange}
          />
          Radio 3
        </label>
      </div>
    </div>
  );
};

export default RadioButtonGroup;
