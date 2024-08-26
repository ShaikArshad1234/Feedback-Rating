import React, { useState } from 'react';
import './NumericRating.css';

const Rating = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="rating-container">
      <h3>How satisfied are you with [feature]?</h3>
      <div className="rating">
        {Array.from({ length: 10 }, (_, index) => (
          <button
            key={index}
            className={`rating-button ${selectedValue === index + 1 ? 'selected' : ''}`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;
