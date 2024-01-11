// NewTodoForm.jsx
import React, { useState } from 'react';

const NewTodoForm = ({ onSubmit }) => { // Destructure 'onSubmit' from props
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className='new-item-form'>
      <label htmlFor="item">New Item</label>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        id='item'
      />
      <button className='btn'>Add</button>
    </form>
  );
}

export default NewTodoForm;
