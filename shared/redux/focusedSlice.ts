import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store/store';

interface CounterState {
  focused: '' | 'repair' | 'services' | 'parsing' | 'success';
}

const initialState: CounterState = {
  focused: '',
};

export const focusedSlice = createSlice({
  name: 'focused',
  initialState,
  reducers: {
    setFocused: (state, action) => {
      state.focused = action.payload;
    },
  },
});

export const { setFocused } = focusedSlice.actions;

export default focusedSlice.reducer;
