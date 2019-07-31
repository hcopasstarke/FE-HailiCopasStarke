import React from 'react';
import Register from './forms/RegForm';

import { Route } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bucket List App
        </h1>
        <Register />
      </header>
    </div>
  );
}

export default App;
