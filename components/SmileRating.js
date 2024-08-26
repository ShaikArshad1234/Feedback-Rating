import React, { useState } from 'react';
import './SmileRating.css';

const SmileyRating = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="smiley-rating">
      <h3>What is your opinion of this page?</h3>
      <div className="smileys">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            className={`smiley ${selectedRating === rating ? 'selected' : ''}`}
            onClick={() => handleRatingClick(rating)}
          >
            {getSmileyIcon(rating)}
          </button>
        ))}
      </div>
    </div>
  );
};

const getSmileyIcon = (rating) => {
  switch (rating) {
    case 1:
      return '😞'; // Very unsatisfied
    case 2:
      return '😐'; // Unsatisfied
    case 3:
      return '😐'; // Neutral
    case 4:
      return '😊'; // Satisfied
    case 5:
      return '😃'; // Very satisfied
    default:
      return '😐';
  }
};

export default SmileyRating;
