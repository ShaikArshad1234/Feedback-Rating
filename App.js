import React, { useState } from 'react';
import FormBuilder from './components/FormBuilder'; // Ensure filename is correct
import FormComponent from './components/formComponent'; // Ensure filename is correct
import { Routes } from 'react-router-dom'; // Import only if using routes
import './App.css';
import BackButton from './components/backButton'; // Ensure filename is correct

const App = () => {
  const [formData, setFormData] = useState({});
  const [isPublished, setIsPublished] = useState(false);

  const handleFormChange = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const handleSave = () => {
    console.log('Form data saved:', formData);
  };

  const handlePublish = () => {
    console.log('Form data published:', formData);
    setIsPublished(true);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>USER FEEDBACK</h1>
        <div className="header-buttons">
          <button className="save" onClick={handleSave}>Save</button>
          <button className="publish" onClick={handlePublish} disabled={isPublished}>Publish</button>
        </div>
      </div>
      <div>
        <BackButton />
        <Routes>
          {/* Define your routes here */}
        </Routes>
      </div>
      <FormComponent onChange={handleFormChange} />
      <FormBuilder onChange={handleFormChange} />
    </div>
  );
};

export default App;
