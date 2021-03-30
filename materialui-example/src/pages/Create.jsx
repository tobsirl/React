import { Typography, Container, Button } from '@material-ui/core/';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const classes = useStyles();
  // const theme = useTheme()

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <form action="" noValidate autoComplete="off">
        <TextField
          onChange={(event) => setTitle(event.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
        />
        <TextField
          onChange={(event) => setDetails(event.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          className={classes.field}
        />
      </form>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={() => console.log('Button Clicked')}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
      {title}
      <br />
      {details}
    </Container>
  );
}
