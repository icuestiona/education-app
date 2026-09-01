import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page hero content', () => {
  render(<App />);
  expect(screen.getByText(/EnlightNet/i)).toBeInTheDocument();
});
