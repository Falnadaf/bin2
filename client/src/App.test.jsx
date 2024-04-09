import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';


// A helper function to wrap components with a router for testing
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
};

describe('App Component', () => {
  test('renders Dashboard component on root route', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Gaming Console/i)).toBeInTheDocument();
  });

  test('renders Store component on /store route', () => {
    renderWithRouter(<App />, { route: '/store' });
    expect(screen.getByText(/You have/i)).toBeInTheDocument();
  });

  // Add more tests as needed for different routes and components...
});
