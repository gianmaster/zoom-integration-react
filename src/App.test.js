import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async() => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
