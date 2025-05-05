// src/redux/actions/todoActions.js
// ---- REMOVE THIS LINE ----
// import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from './todoActions'; // <-- REMOVE

// ---- ADD export HERE ----
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER'; // For filtering

// Action creator for adding a task
export const addTask = (description) => ({
  type: ADD_TASK, // This uses the constant defined above
  payload: {
    id: Date.now(),
    description: description,
    isDone: false,
  },
});

// Action creator for toggling a task's completion status
export const toggleTask = (id) => ({
  type: TOGGLE_TASK, // This uses the constant defined above
  payload: { id },
});

// Action creator for editing a task's description
export const editTask = (id, newDescription) => ({
  type: EDIT_TASK, // This uses the constant defined above
  payload: { id, newDescription },
});

// Action creator for setting the current filter
export const setFilter = (filter) => ({ // filter: 'all', 'done', 'notDone'
  type: SET_FILTER, // This uses the constant defined above
  payload: { filter },
});