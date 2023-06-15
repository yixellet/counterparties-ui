import { configureStore } from '@reduxjs/toolkit';
import loginFormReducer from '../features/loginForm/loginFormSlice';

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
  },
});
