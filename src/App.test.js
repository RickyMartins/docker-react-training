import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello there/i);
  expect(linkElement).toBeInTheDocument();
});
