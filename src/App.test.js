import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('APP TESTS', () => {
  test('React Link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).toBeNull();
  });

  test('INPUT EVENT', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/поиск/i);
    const searchStr = 'Эдуард';
    fireEvent.input(searchInput, {
      target: { value: searchStr },
    });
    expect(searchInput.value).toBe(searchStr);
  });
});
