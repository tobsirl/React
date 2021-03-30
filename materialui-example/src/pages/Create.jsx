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
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const classes = useStyles();
  // const theme = useTheme()

  function handleSubmit(event) {
    event.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (!title) {
      setTitleError(true);
    }

    if (!details) {
      setDetailsError(true);
    }

    if (title && details) {
      console.log('title :>> ', title);
      console.log('details :>> ', details);
    }
  }

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
      <form action="" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(event) => setTitle(event.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className={classes.field}
          error={titleError}
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
          error={detailsError}
          className={classes.field}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
      {title}
      <br />
      {details}
    </Container>
  );
}
