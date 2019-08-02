import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import BucketListMenu from "./BucketListMenu";
import BucketListActions from "./BucketListActions";
import { data } from "../data";
import { dataComplete } from "../data-complete";

function Dashboard() {
  const [items, setItems] = useState(data);
  const [completedItems, setCompletedItems] = useState(dataComplete);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(item, isCompleted) {
    if (isCompleted) {
      const index = completedItems.indexOf(item);
      const tempArray = completedItems;
      const removed = tempArray.splice(index, 1);
      setCompletedItems(tempArray);
    } else {
      const index = items.indexOf(item);
      const tempArray = items;
      const removed = tempArray.splice(index, 1);
      setItems(tempArray);
    }
  }

  function moveItem(item) {
    const index = items.indexOf(item);
    const tempItems = items;
    const removedItem = tempItems.splice(index, 1);
    setItems(tempItems);
    setCompletedItems([...completedItems, item]);
  }

  function updateItem(item, updatedItem) {
    const index = items.indexOf(item);
    const tempItems = items;
    tempItems[index] = updatedItem;
    setItems(tempItems);
  }

  console.log("items: ", items);
  console.log("completed items: ", completedItems);
  return (
    <main>
      <UserProfile />
      <BucketListMenu />
      <BucketListActions
        addItem={addItem}
        items={items}
        completedItems={completedItems}
        deleteItem={deleteItem}
        moveItem={moveItem}
        updateItem={updateItem}
      />
    </main>
  );
}

export default Dashboard;
