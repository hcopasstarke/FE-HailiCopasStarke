import React from "react";
import axios from "axios";
import BucketListCard from "./BucketListCard";

export default function BucketList(props) {
  return (
    <section className="bucket-list">
      {props.items.map(item => (
        <BucketListCard
          {...props}
          item={item}
          deleteItem={props.deleteItem}
          isCompleted={false}
          moveItem={props.moveItem}
          updateItem={props.updateItem}
        />
      ))}
    </section>
  );
}
