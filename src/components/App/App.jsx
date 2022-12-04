import React from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';


function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <Header />
          
        </Route>
        <Route exact path='/understanding'>
          <Header />

        </Route>
        <Route exact path='/support'>
          <Header />

        </Route>
        <Route exact path='/comments'>
          <Header />

        </Route>
        <Route exact path='/review'>
          <Header />

        </Route>
        <Route exact path='/submitted'>
          <Header />

        </Route>
        <Route exact path='/admin'>
          <Header />

        </Route>
      </Router>
    </div>
  );
}

export default App;
