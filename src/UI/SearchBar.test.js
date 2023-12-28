import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders SearchBar component', () => {
    render(<SearchBar onSearch={jest.fn()} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  test('allows user to enter text', () => {
    render(<SearchBar onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, 'react');
    expect(input).toHaveValue('react');
  });

  test('calls onSearch when form is submitted', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, 'react{enter}');
    expect(handleSearch).toHaveBeenCalledWith('react');
  });

  test('calls onSearch on text change', () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleSearch).toHaveBeenCalledWith('test');
  });
});
