import React, { useState } from 'react';
import './StartRating.css';

const StarRating = ({ totalStars = 5, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  // handleRating function is used to set the rating and notify the parent component
  const handleRating = (index) => {
    const newRating = index + 1; // Adjusting for zero-based index
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="star-rating">
      <h3>What is your opinion of this page?</h3>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => handleRating(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
