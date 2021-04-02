import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
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
      <Grid container>
        <Grid item>
          <Paper>1</Paper>
        </Grid>
        <Grid item>
          <Paper>2</Paper>
        </Grid>
        <Grid item>
          <Paper>3</Paper>
        </Grid>
        <Grid item>
          <Paper>4</Paper>
        </Grid>
      </Grid>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </div>
  );
}
