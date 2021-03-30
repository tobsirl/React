import { render, screen } from '@testing-library/react';
import Check from './pages/Check';
import Create from './pages/Create';
import Notes from './pages/Notes';

describe('renders the Notes page', () => {
  it('should display the notes text', () => {
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

  describe('renders the Checkboxes page', () => {
    it('should display a checkbox', () => {
      render(<Check />);
      const checkboxInput = screen.getByRole('checkbox');
      expect(checkboxInput).toBeInTheDocument();
    });
  });
});
