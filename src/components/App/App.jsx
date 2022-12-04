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
          <Form typeData='ADD_FEELING' 
                question='How are you feeling today?' 
                inputLabel='Feeling?' 
                nextBtn='/understanding' />
        </Route>
        {/* Understanding route */}
        <Route exact path='/understanding'>
          <Header />
          <Form typeData='ADD_UNDERSTANDING' 
                question='How well are you understanding the content?' 
                inputLabel='Understanding?' 
                nextBtn='/support' 
                prevBtn='/' />
        </Route>
        {/* Support route */}
        <Route exact path='/support'>
          <Header />
          <Form typeData='ADD_SUPPORT' 
                question='How well are you being supported?' 
                inputLabel='Support?' 
                nextBtn='/comments' 
                prevBtn='/understanding' />
        </Route>
        {/* Comments Route */}
        <Route exact path='/comments'>
          <Header />
          <Form typeData='ADD_COMMENT' 
                question='Any comments you want to leave?' 
                inputLabel='Comments' 
                nextBtn='/review' 
                prevBtn='/support' />
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
