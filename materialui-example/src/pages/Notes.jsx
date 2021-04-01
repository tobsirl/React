import React, { useState, useEffect } from 'react';
export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function fetchNotes() {
    const response = await fetch('http://localhost:8000/notes');

    const data = await response.json();

    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}
