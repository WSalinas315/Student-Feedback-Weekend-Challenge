import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';

// studentFeedback reducer
const studentFeedback = (state = [], action) => {
  switch(action.type){
    // case 'ADD_THING':
    //   return [...state,action.payload.thing];
    default:
      break;
  }
  return state;
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
