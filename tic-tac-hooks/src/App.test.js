import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests for the tic tac toe game', () => {
  it('should check for the next player', () => {
    render(<App />);

    const nextPlayer = screen.getByText(/next player/i);
    expect(nextPlayer).toBeInTheDocument();
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/winner/i);
//   expect(linkElement).toBeInTheDocument();
// });
