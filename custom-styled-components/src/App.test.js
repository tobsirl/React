import { render, screen } from '@testing-library/react';
import App from './App';

describe('Custom box component tests', () => {
  it('checks for the small lightblue box', () => {
    // arrange
    render(<App />);

    // act
    const linkElement = screen.getByText(/small lightblue box/i);

    // assert
    expect(linkElement).toBeInTheDocument();
  });
  it('checks for the medium pink box', () => {
    // arrange
    render(<App />);

    // act
    const linkElement = screen.getByText(/medium pink box/i);

    // assert
    expect(linkElement).toBeInTheDocument();
  });
  it('checks for the large orange box', () => {
    // arrange
    render(<App />);

    // act
    const linkElement = screen.getByText(/large orange box/i);

    // assert
    expect(linkElement).toBeInTheDocument();
  });
});
