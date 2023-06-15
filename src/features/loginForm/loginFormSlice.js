import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = loginFormSlice.actions;

export default loginFormSlice.reducer;
