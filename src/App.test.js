import { render, screen } from '@testing-library/react';
import App from './App';

test('renders there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/there/i);
  expect(linkElement).toBeInTheDocument();
});
