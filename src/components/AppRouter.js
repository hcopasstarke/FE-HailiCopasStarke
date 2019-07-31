import React from "react";
import { Switch, Route } from "react-router-dom";

import BucketList from "./BucketList";
import CompletedList from "./CompletedList";
import NewItem from "./NewItem";

export default function AppRouter(props) {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route
          path="/active"
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
        <Route
          path="/completed"
          render={() => (
            <CompletedList
              {...props}
              items={props.completedItems}
              deleteItem={props.deleteItem}
            />
          )}
        />
        <Route
          path="/new"
          render={() => <NewItem {...props} addItem={props.addItem} />}
        />
      </Switch>
    </div>
  );
}
