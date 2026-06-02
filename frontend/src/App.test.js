import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/YogaIntelliJ/i);
  expect(linkElement).toBeInTheDocument();
});
