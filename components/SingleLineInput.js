import React from 'react';

const SingleLineInput = ({ field }) => {
  return (
    <div className="field">
      <label>
        {field.label || 'Single Line Input'} {field.required && '*'}
      </label>
      <input type="text" placeholder="Enter text" />
      {field.required && <span>{field.errorMessage}</span>}
    </div>
  );
};

export default SingleLineInput;
