import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    user: null,
    error: null,
  },
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.access;
      localStorage.setItem('token', payload.access);
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, setUser, setError, logout } = authSlice.actions;
export default authSlice.reducer;