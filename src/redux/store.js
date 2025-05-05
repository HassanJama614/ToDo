// src/redux/store.js
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'; // For DevTools integration
import todoReducer from './reducers/todoReducer';


const composedEnhancer = composeWithDevTools(); 


const store = createStore(todoReducer, composedEnhancer);


export default store;