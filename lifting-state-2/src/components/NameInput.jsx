import React from 'react';

export default function NameInput({ name, onNameChange }) {
  return (
    <div>
      <label htmlFor="name">Enter Name:</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
    </div>
  );
}
