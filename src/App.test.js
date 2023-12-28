import { screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './tests/helpers/renderWithRedux';

describe('APP TESTS', () => {
  test('React Link', () => {
    renderWithRedux(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).toBeNull();
  });
});
