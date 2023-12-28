import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from './Admin';
import useDebounce from '../hooks/useDebounce';

// Мокаем хук useDebounce
jest.mock(useDebounce, () => jest.fn((fn) => fn));

describe('Admin', () => {
  test('renders Admin component', () => {
    render(<Admin />);
    expect(screen.getByText('My organization')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  test('search input triggers handleSearch', async () => {
    render(<Admin />);
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, 'test');
    await waitFor(() => {
      expect(input).toHaveValue('test');
    });
  });

  test('openDrawer updates isDrawerOpen and currentUser', () => {
    render(<Admin />);
    const userLine = screen.getByRole('tr');
    userEvent.click(userLine);
    const drawer = screen.getByTestId('drawer');
    expect(drawer).toBeInTheDocument();
    expect(drawer).toBeVisible();
  });

  test('close Drawer updates isDrawerOpen', () => {
    render(<Admin />);
    // Открываем Drawer
    const userLine = screen.getByRole('tr');
    userEvent.click(userLine);
    // Закрываем Drawer
    const closeButton = screen.getByTestId('closeDrawer');
    userEvent.click(closeButton);
    expect(screen.getByTestId('drawer')).not.toBeVisible();
  });
});
