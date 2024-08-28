import { configureStore } from '@reduxjs/toolkit';
import focusedSlice from '../focusedSlice';

export const store = configureStore({
  reducer: {
    focused: focusedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
