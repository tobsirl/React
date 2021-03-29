import { Typography, Container, Button } from '@material-ui/core/';
import { KeyboardArrowRight } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send'
export default function Create() {
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
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log('Button Clicked')}
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  );
}
