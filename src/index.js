import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './index.css';

// studentFeedback reducer
const studentFeedback = (state = {}, action) => {
  switch(action.type){
    case 'ADD_FEELING':
      return {...state, feeling: action.payload.feeling};
    case 'ADD_UNDERSTANDING':
      return {...state, feeling: action.payload.understanding};
    case 'ADD_SUPPORT':
      return {...state, feeling: action.payload.support};
    case 'ADD_COMMENT':
      return {...state, feeling: action.payload.comment};
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
