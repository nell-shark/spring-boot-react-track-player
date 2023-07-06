import { configureStore } from '@reduxjs/toolkit';

import { trackPlayerReducer } from '@store/slices';
import { userReducer } from '@store/slices/userSlice';

export const store = configureStore({
  reducer: {
    trackPlayer: trackPlayerReducer,
    user: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;