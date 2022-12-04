import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers } from 'redux';


const studentFeedback = (state = [], action) => {
  switch(action.type){
    // case 'ADD_THING':
    //   return [...state,action.payload.thing];
    default:
      break;
  }
  return state;
}


const reduxStore = createStore(
  combineReducers(
    {}
  ), applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
