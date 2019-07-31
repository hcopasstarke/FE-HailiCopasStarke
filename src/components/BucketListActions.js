import React from "react";
import { Switch, Route } from "react-router-dom";

import BucketList from "./BucketList";
import BucketListComplete from "./BucketListComplete";
import AddBucketItem from "./AddBucketItem";

export default function BucketListActions(props) {
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
            <BucketListComplete
              {...props}
              items={props.completedItems}
              deleteItem={props.deleteItem}
            />
          )}
        />
        <Route
          path="/new"
          render={() => <AddBucketItem {...props} addItem={props.addItem} />}
        />
      </Switch>
    </div>
  );
}
