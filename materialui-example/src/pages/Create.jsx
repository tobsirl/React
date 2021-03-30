import { Typography, Container, Button, useTheme } from '@material-ui/core/';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({});

export default function Create() {
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
        <TextField label="Note Title" variant="outlined" color="secondary" />
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
    </Container>
  );
}
