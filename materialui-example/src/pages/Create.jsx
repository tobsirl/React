import { Typography, Container, Button } from '@material-ui/core/';
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
      >
        Submit
      </Button>
    </Container>
  );
}
