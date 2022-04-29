import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /I got my daughter a fridge for her birthday./i
  );
  expect(linkElement).toBeInTheDocument();
});
