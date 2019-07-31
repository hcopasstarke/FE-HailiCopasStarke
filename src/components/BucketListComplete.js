import React, { useEffect, useState } from "react";
import axios from "axios";
import BucketListCard from "./BucketListCard";

export default function BucketListComplete(props) {
  // const [items, setItems] = useState(data);

  //   setItems(data);

  //   console.log("Data: ", items);

  return (
    <section className="bucket-list">
      {props.items.map(item => (
        <BucketListCard
          {...props}
          item={item}
          deleteItem={props.deleteItem}
          isCompleted={true}
        />
      ))}
    </section>
  );
}
