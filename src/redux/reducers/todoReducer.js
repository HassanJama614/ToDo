// src/redux/reducers/todoReducer.js
// ---- Ensure this import is correct and includes the exported constants ----
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from '../actions/todoActions'; // Path seems correct

const initialState = {
  tasks: [
    { id: 1, description: 'Learn Redux Basics', isDone: true },
    { id: 2, description: 'Build a ToDo App', isDone: false },
  ],
  filter: 'all',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: // Uses the imported constant
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case TOGGLE_TASK: // Uses the imported constant
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case EDIT_TASK: // Uses the imported constant
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newDescription }
            : task
        ),
      };

    case SET_FILTER: // Uses the imported constant
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
};

export default todoReducer;