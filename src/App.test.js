import { render, screen } from '@testing-library/react';
import App from './App';

test('renders load react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/load react/i);
  expect(linkElement).toBeInTheDocument();
});
