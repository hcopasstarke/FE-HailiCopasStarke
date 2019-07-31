import React from 'react';
import Home from './components/Home';
import RegForm from './forms/RegForm';
// import LoginForm from './forms/LoginForm';
import Dashboard from './components/Dashboard';

import { Route } from "react-router-dom";
import { PrivateRoute } from './utils/PrivateRoute';

// Route is publicly accessible. PrivateRoute is only accessible with a token. 
// We are passing components to Route and PrivateRoute to define what is rendered
// at those paths. If we don't have component with Route, it won't display those components.


function App() {

  return (
    <div className='container'>
      <Route exact path="/" component={Home} />
      <Route path="/" component={RegForm} />
      <PrivateRoute path="/Dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
