import { Typography, Container, Button } from '@material-ui/core/';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        className={classes.title}
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log('Button Clicked')}
        endIcon={<KeyboardArrowRight />}
        className={classes.btn}
      >
        Submit
      </Button>
    </Container>
  );
}
