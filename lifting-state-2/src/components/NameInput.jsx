import React from 'react';

export default function NameInput({ name, onNameChange }) {
  return (
    <form>
      <label htmlFor="name">Enter Name:</label>
      <br />
      <input type="text" id="name" value={name} onChange={onNameChange} />
    </form>
  );
}
