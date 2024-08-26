import React, { useState } from "react";
import './formComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    label: "Would you like to add a comment?",
    isRequired: false,
    errorMessage: "",
    value: "",
    helperText: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const handleCancel = () => {
    console.log("Form Cancelled");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Back to Add Fields</h2>

      <div className="label1">
        <label htmlFor="label">Label</label>
        <input
          type="text"
          name="label"
          id="label"
          value={formData.label}
          onChange={handleInputChange}
          className="input-field"
        />
      </div>

      <div className="re">
        <label htmlFor="isRequired">
          <input
            type="checkbox"
            name="isRequired"
            id="isRequired"
            checked={formData.isRequired}
            onChange={handleInputChange}
          />
          Required
        </label>
        <p className="error-message">
          Error Message
        </p>
      </div>

      <div className="label1">
        <label htmlFor="value">Value</label>
        <input
          type="text"
          name="value"
          id="value"
          value={formData.value}
          onChange={handleInputChange}
          className="input-field"
        />
        <p className="helper-text">Helper Text</p>
      </div>

      <div className="buttons">
        <button type="submit" className="save-button">SAVE</button>
        <button type="button" onClick={handleCancel} className="cancel-button">CANCEL</button>
      </div>
    </form>
  );
};

export default FormComponent;
