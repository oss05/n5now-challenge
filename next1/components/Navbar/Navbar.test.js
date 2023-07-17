import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('renders navbar logo title', () => {
    render(<Navbar />);
    const logoTitleElement = screen.getByText(/N5 Now Challenge/i);
    expect(logoTitleElement).toBeInTheDocument();
  });

  test('changes language on flag click', () => {
    render(<Navbar />);
    const flagElement = screen.getByAltText(/English/i);

    // Initial language is 'es'
    fireEvent.click(flagElement);
    expect(screen.getByAltText(/Español/i)).toBeInTheDocument();

    // Change back to 'en'
    fireEvent.click(flagElement);
    expect(screen.getByAltText(/English/i)).toBeInTheDocument();
  });
});
