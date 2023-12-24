import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from './Admin';

describe('ADMIN TESTS', () => {
  test('TABLE EXISTS', () => {
    render(<Admin />);
    const usersTable = screen.queryByRole('table');
    expect(usersTable).toBeInTheDocument();
  });

  test('EMPTY SEARCH', async () => {
    render(<Admin />);

    const searchBar = screen.getByPlaceholderText(/поиск/i);
    await userEvent.type(searchBar, '/**80727390)(()~');
    await screen.findByRole('table');

    await new Promise((resolve) => {setTimeout(resolve, 200)}); // wait input delay

    expect(screen.queryByRole('table')).toBeNull(); // table doesn't exist
    expect(screen.getByText('Ничего не найдено')).toBeInTheDocument(); // Not found exist
  });
});
