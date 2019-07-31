import React from 'react';
import RegForm from './forms/RegForm';
import LoginForm from './forms/LoginForm';
// import Recipe from './components/Recipe';


import { Route } from "react-router-dom";
// import { PrivateRoute } from './utils/PrivateRoute';
import './App.css';

// Route is publicly accessible. PrivateRoute is only accessible with a token. 
// We are passing components to Route and PrivateRoute to define what is rendered
// at those paths. If we don't have component with Route, it won't display those components.


function App() {

  return (
    <div className='container'>
      <Route exact path="/" component={RegForm} />
      <Route path="/" component={LoginForm} />
    </div>
  );
}

export default App;

