import React from 'react';
import Home from './components/Home';
import RegForm from './forms/RegForm';
import LoginForm from './forms/LoginForm';
import Dashboard from './components/Dashboard';
import BucketList from './components/BucketList';
import BucketListComplete from './components/BucketListComplete';
import AddBucketItem from './components/AddBucketItem';

import { Route } from 'react-router-dom';
import { PrivateRoute } from './utils/PrivateRoute';

// Route is publicly accessible. PrivateRoute is only accessible with a token. 
// We are passing components to Route and PrivateRoute to define what is rendered
// at those paths. If we don't have component with Route, it won't display those components.


function App(props) {

  return (
    <div className='container'>
        <Route exact path="/" component={Home} />
        <Route path="/RegForm" component={RegForm} />
        <Route path="/LoginForm" component={LoginForm} />
        <Route path="/test" />
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <PrivateRoute path="/active"
          render={() => (
            <BucketList
              {...props}
              items={props.items}
              deleteItem={props.deleteItem}
              moveItem={props.moveItem}
              updateItem={props.updateItem}
            />
          )}
        />
        <PrivateRoute
          path="/completed"
          render={() => (
            <BucketListComplete
              {...props}
              items={props.completedItems}
              deleteItem={props.deleteItem}
            />
          )}
        />
        <PrivateRoute
          path="/new"
          render={() => <AddBucketItem {...props} addItem={props.addItem} />}
        />
    </div>
  );
}

export default App;
