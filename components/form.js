import React, { useState } from 'react';
import './DashBoard.css';
import FormBuilder from './FormBuilder'; // Import the FormBuilder component

const Dashboard = () => {
    const [forms, setForms] = useState([
        {
            title: 'Delivery',
            submitted: 10,
            viewed: 55,
            datePublished: '08/08/2024',
        },
        {
            title: 'Product Quality',
            submitted: 100,
            viewed: 300,
            datePublished: '07/08/2024',
        },
    ]);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newFormTitle, setNewFormTitle] = useState('Generic Website Rating');
    const [isFormBuilderVisible, setIsFormBuilderVisible] = useState(false);

    const handleNewFormClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setNewFormTitle(''); // Reset the form title after closing the popup
    };

    const handleCreateForm = () => {
        if (newFormTitle.trim() !== '') {
            setIsFormBuilderVisible(true); // Show the FormBuilder component
            handleClosePopup(); // Close the popup after clicking Create
        }
    };

    const handleSaveForm = (newFormFields) => {
        const newForm = {
            title: newFormTitle,
            submitted: 0,
            viewed: 0,
            datePublished: new Date().toLocaleDateString(),
            fields: newFormFields,
        };
        setForms([...forms, newForm]);
        setIsFormBuilderVisible(false); // Go back to dashboard after saving
    };

    return (
        <div className="dashboard">
            {isFormBuilderVisible ? (
                <FormBuilder
                    formTitle={newFormTitle}
                    onSave={handleSaveForm}
                    onCancel={() => setIsFormBuilderVisible(false)}
                />
            ) : (
                <>
                    <div className="form-grid">
                        <div className="form-card new-form" onClick={handleNewFormClick}>
                            <button>+ New Form</button>
                        </div>
                        {forms.map((form, index) => (
                            <div key={index} className="form-card">
                                <h2>{form.title}</h2>
                                <p>Submitted: {form.submitted}</p>
                                <p>Viewed: {form.viewed}</p>
                                <p>Date Published: {form.datePublished}</p>
                                <div className="form-actions">
                                    <button className="view-btn">View Submission</button>
                                    <button className="edit-btn">Edit</button>
                                    <button className="delete-btn">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {isPopupOpen && (
                        <div className="popup">
                            <div className="popup-content">
                                <h3>Create Feedback Form</h3>
                                <input
                                    type="text"
                                    value={newFormTitle}
                                    onChange={(e) => setNewFormTitle(e.target.value)}
                                    placeholder="Enter form title"
                                />
                                <div className="popup-actions">
                                    <button className="create-btn" onClick={handleCreateForm}>
                                        Create
                                    </button>
                                    <button className="cancel-btn" onClick={handleClosePopup}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Dashboard;
