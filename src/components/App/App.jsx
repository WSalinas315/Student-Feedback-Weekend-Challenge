import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Review from '../Review/Review';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Router>
        {/* Default route / Feeling Route */}
        <Route exact path='/'>
          <Header />
          <Form typeData='ADD_FEELING' 
                property='feeling' 
                question='How are you feeling today?' 
                inputLabel='Feeling?' 
                nextBtn='/understanding' />
        </Route>
        {/* Understanding route */}
        <Route exact path='/understanding'>
          <Header />
          <Form typeData='ADD_UNDERSTANDING' 
                property='understanding' 
                question='How well are you understanding the content?' 
                inputLabel='Understanding?' 
                nextBtn='/support' 
                prevBtn='/' />
        </Route>
        {/* Support route */}
        <Route exact path='/support'>
          <Header />
          <Form typeData='ADD_SUPPORT' 
                property='support' 
                question='How well are you being supported?' 
                inputLabel='Support?' 
                nextBtn='/comments' 
                prevBtn='/understanding' />
        </Route>
        {/* Comments Route */}
        <Route exact path='/comments'>
          <Header />
          <Form typeData='ADD_COMMENT' 
                property='comments' 
                question='Any comments you want to leave?' 
                inputLabel='Comments' 
                nextBtn='/review' 
                prevBtn='/support' />
        </Route>
        {/* Review Route */}
        <Route exact path='/review'>
          <Header />
          <Review nextBtn='/submitted' 
                  prevBtn='/comments' />
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
