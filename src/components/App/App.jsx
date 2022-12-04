import React from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';

function App() {

  return (
    <div className='App'>
      <Router>
        {/* Default route / Add feeling */}
        <Route exact path='/'>
          <Header />
          <Form type="ADD_FEELING" />
        </Route>
        {/* Understanding route */}
        <Route exact path='/understanding'>
          <Header />

        </Route>
        {/* Support route */}
        <Route exact path='/support'>
          <Header />

        </Route>
        {/* Comments Route */}
        <Route exact path='/comments'>
          <Header />

        </Route>
        {/* Review Route */}
        <Route exact path='/review'>
          <Header />

        </Route>
        {/* Submission Route */}
        <Route exact path='/submitted'>
          <Header />

        </Route>
        {/* Admin Route */}
        <Route exact path='/admin'>
          <Header />

        </Route>
      </Router>
    </div>
  );
}

export default App;
