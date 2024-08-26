import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FaPen, FaTrash } from 'react-icons/fa';
import StarRating from './StarRating';
import SmileRating from './SmileRating';
import TextArea from './TextArea';
import SingleLineInput from './SingleLineInput';
import RadioButtons from './RadioButtons';
import Categories from './Categories';
import NumericRating from './NumericRating';
import './FormBuilder.css';

const FormBuilder = () => {
  const [fields, setFields] = useState([
    { type: 'TextArea', label: 'Would you like to add a comment?', required: true },
    { type: 'NumericRating', label: 'How likely is it that you will recommend us to your family and friends?', required: true },
    { type: 'StarRating', label: 'Give a star rating for the website.', required: false },
    { type: 'SmileRating', label: 'What is your opinion of this page?', required: false },
    { type: 'TextArea', label: 'Do you have any suggestions to improve our website?', required: false },
    { type: 'RadioButtons', label: 'Multiple choice - 1 answer', required: false, options: ['Radio 1', 'Radio 2', 'Radio 3'] },
    { type: 'Categories', label: 'Pick a subject and provide your feedback:', required: false, options: ['Bug', 'Content', 'Other'] },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedFields = Array.from(fields);
    const [removed] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, removed);

    setFields(reorderedFields);
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case 'StarRating':
        return <StarRating key={index} field={field} />;
      case 'SmileRating':
        return <SmileRating key={index} field={field} />;
      case 'TextArea':
        return <TextArea key={index} field={field} />;
      case 'SingleLineInput':
        return <SingleLineInput key={index} field={field} />;
      case 'RadioButtons':
        return <RadioButtons key={index} field={field} />;
      case 'Categories':
        return <Categories key={index} field={field} />;
      case 'NumericRating':
        return <NumericRating key={index} field={field} />;
      default:
        return null;
    }
  };

  const handleDelete = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
  };

  const handleEdit = (index) => {
    // Logic to edit the field, such as opening a modal for editing
    console.log('Edit field at index:', index);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Example of how you might handle the form submission
    try {
      // Replace the URL with your backend API endpoint
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      // Handle successful submission (e.g., show a success message, reset form, etc.)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle submission error (e.g., show an error message)
    }
  };

  return (
    <div className="form-builder-container">
      <form className="form-builder" onSubmit={handleSubmit}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="formFields">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields.map((field, index) => (
                  <Draggable key={index} draggableId={`${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="form-field"
                      >
                        {renderField(field, index)}
                        <div className="field-controls">
                          <button
                            type="button"
                            className="delete-button"
                            onClick={() => handleDelete(index)}
                          >
                            <FaTrash />
                          </button>
                          <button
                            type="button"
                            className="edit-button"
                            onClick={() => handleEdit(index)}
                          >
                            <FaPen />
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormBuilder;
