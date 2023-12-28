import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createReduxStore } from '../../store';

export default function renderWithRedux(component, initialState) {
  return render(
    <Provider store={createReduxStore(initialState)}>{component}</Provider>,
  );
}
