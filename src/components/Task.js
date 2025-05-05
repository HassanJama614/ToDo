// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions/todoActions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  // Use local state to manage the input value during editing
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      // Save the changes if description is not empty
      if (editedDescription.trim()) {
        dispatch(editTask(task.id, editedDescription.trim()));
      } else {
         // Optionally reset to original if input is empty on save
         setEditedDescription(task.description);
      }
    }
    // Toggle editing mode
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit(); // Save on Enter key press
    }
 };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        style={{ marginRight: '10px' }}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Handle Enter key
          onBlur={handleEdit} // Save when input loses focus
          autoFocus // Focus the input when editing starts
          style={{ flexGrow: 1, marginRight: '10px' }}
        />
      ) : (
        <span
          style={{
            textDecoration: task.isDone ? 'line-through' : 'none',
            flexGrow: 1, // Allow text to take available space
            cursor: 'pointer' // Indicate it can be interacted with (for edit)
          }}
          onDoubleClick={() => setIsEditing(true)} // Double click to edit is intuitive
        >
          {task.description}
        </span>
      )}
      <button onClick={handleEdit} style={{ marginLeft: '10px' }}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
       {/* Optional: Add a delete button later if needed */}
    </li>
  );
};

export default Task;