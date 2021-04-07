import { render, screen,  } from '@testing-library/react';
import App from './App';

describe('tests for the simple counter app', () => {
  it('should display the simple counter text', () => {
    render(<App />);
    const titleText = screen.getByRole('heading', { name: /simple counter/i });
    expect(titleText).toBeInTheDocument();
  });
});
