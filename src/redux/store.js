// src/redux/store.js
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // For DevTools integration
import todoReducer from './reducers/todoReducer';

// If you only have one reducer, you can pass it directly
// If you have multiple reducers, you'd use combineReducers here

// Enable Redux DevTools Extension support
const composedEnhancer = composeWithDevTools(); // Use this if you have the extension package

// Create the store
// Pass the reducer and the enhancer (for DevTools)
const store = createStore(todoReducer, composedEnhancer);
// If not using DevTools: const store = createStore(todoReducer);

export default store;