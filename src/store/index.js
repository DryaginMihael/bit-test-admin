import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './services/users';

export const createReduxStore = (initialState = {}) =>
  configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersApi.middleware),
    preloadedState: initialState,
  });

export default createReduxStore();
