import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './backButton.css';

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className='btn'>
        <btn onClick={() => navigate(-1)}>
            <FiArrowLeft /> Generic website Form
        </btn>
    </div>
    
  );
}

export default BackButton;
