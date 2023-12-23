import { screen, render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SEARCH_TESTS', () => {
  test('INPUT IN DOCUMENT', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Поиск');
    expect(searchInput).toBeInTheDocument();
  });

  // test('INPUT EVENT', () => {
  //     render(<SearchBar/>);
  //     const searchInput = screen.getByPlaceholderText('Поиск');
  //     const searchStr = 'Эдуард';
  //     fireEvent.input(searchInput, {
  //         target: {value: searchStr}
  //     })
  //     expect(searchInput.value).toBe(searchStr);
  // })
});
