import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Admin from './Admin';
import renderWithRedux from '../tests/helpers/renderWithRedux';

describe('Admin', () => {
  beforeEach(() => renderWithRedux(<Admin />));

  test('renders Admin component', () => {
    expect(screen.getByText('My organization')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByTestId('spinner')).toBeInTheDocument(); // Loading data
  });

  test('valid search', async () => {
    const validSearchStr = 'ervin';
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, validSearchStr);
    expect(input).toHaveValue(validSearchStr);
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole('table')).toBeInTheDocument();
    });
  });

  test('invalid search', async () => {
    const input = screen.getByPlaceholderText(/search/i);
    userEvent.type(input, 'kjlsad^&(*(*(^%');
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByRole('table')).not.toBeInTheDocument();
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });

  test('openDrawer updates isDrawerOpen and currentUser', () => {
    waitFor(() => {
      const userLine = screen.findAllByRole('tr')[0];
      userEvent.click(userLine);
      const drawer = screen.getByTestId('drawer');
      expect(drawer).toBeInTheDocument();
      expect(drawer).toBeVisible();
    });
  });

  test('close Drawer updates isDrawerOpen', () => {
    waitFor(() => {
      // Open Drawer
      const userLine = screen.findAllByRole('tr')[0];
      userEvent.click(userLine);
      // Close Drawer
      const closeButton = screen.getByTestId('closeDrawer');
      userEvent.click(closeButton);
      expect(screen.getByTestId('drawer')).not.toBeVisible();
    });
  });
});
