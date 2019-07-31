import React, { useState, useEffect } from "react";

export default function ItemCard(props) {
  const [item, setItem] = useState({});

  function handleChange(event) {
    const newItem = { ...item, [event.target.name]: event.target.value };
    setItem(newItem);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem(item);
    setItem({ title: "", first_name: "", description: "" });
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={item.title}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="first_name"
          placeholder="Enter first name"
          value={item.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={item.description}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
