import { render, screen } from '@testing-library/react';
import Create from './pages/Create';
import Notes from './pages/Notes';

describe('render the Notes page', () => {
  it('should disple the notes text', () => {
    render(<Notes />);
    const notesElement = screen.getByText(/notes/i);
    expect(notesElement).toBeInTheDocument();
  });
});

describe('renders the Create page', () => {
  it('should display the create text', () => {
    render(<Create />);
    const createElement = screen.getByText(/create/i);
    expect(createElement).toBeInTheDocument();
  });
});
