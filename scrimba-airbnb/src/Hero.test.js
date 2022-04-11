import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

describe('Test for the <Hero /> component', () => {
  it('should display a title of "Online Experiences"', () => {
    render(<Hero />);
    const title = screen.getByText('Online Experiences');
    expect(title).toBeInTheDocument();
  });
});
