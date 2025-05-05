// src/App.js
import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css'; 

function App() {
  return (
    <div className="App" style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
      <h1>My Redux ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;