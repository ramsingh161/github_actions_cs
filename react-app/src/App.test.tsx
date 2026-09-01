import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const { getByText } = render(); expect(getByText(/learn react/i)).toBeInTheDocument();
});
