import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import NoteCard from '../components/NoteCard';
export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function onHandleDelete(noteId) {
    await fetch(`http://localhost:8000/notes/${noteId}`, {
      method: 'DELETE',
    });

    const deleteNote = notes.filter((note) => note.id !== noteId);
    
    setNotes(deleteNote);
  }

  async function fetchNotes() {
    const response = await fetch('http://localhost:8000/notes');

    const data = await response.json();

    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteCard note={note} onHandleDelete={onHandleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
