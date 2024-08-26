import React from 'react';

const TextArea = ({ field }) => {
  return (
    <div className="field">
      <label>
        {field.label || 'Text Area'} {field.required && '*'}
      </label>
      <textarea placeholder="Enter your text here"></textarea>
      {field.required && <span>{field.errorMessage}</span>}
    </div>
  );
};

export default TextArea;
