import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';

// initial state for studentFeedback 
const initialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: ''
}

// studentFeedback reducer
const studentFeedback = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_FEELING':
      return {...state, feeling: action.payload};
    case 'ADD_UNDERSTANDING':
      return {...state, understanding: action.payload};
    case 'ADD_SUPPORT':
      return {...state, support: action.payload};
    case 'ADD_COMMENT':
      return {...state, comments: action.payload};
    case 'CLEAR_FIELDS':
      return initialState;
    default:
      return state;
  }
}

// Store created
const reduxStore = createStore(
  combineReducers({studentFeedback}), applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
