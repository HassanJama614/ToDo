// src/components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/todoActions';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (description.trim()) { // Check if description is not just whitespace
      dispatch(addTask(description.trim()));
      setDescription(''); // Clear input field after adding
    } else {
      alert("Please enter a task description!"); // Basic validation
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex' }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ flexGrow: 1, marginRight: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>
        Add Task
      </button>
    </form>
  );
};

export default AddTask;