import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

test('renders Home component', () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/Elige una temática/i);
    expect(titleElement).toBeInTheDocument();
  });