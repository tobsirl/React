import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Why did the chicken cross the road?/i);
  expect(linkElement).toBeInTheDocument();
});
