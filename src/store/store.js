import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { usersApi } from '../api/userApi';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});
