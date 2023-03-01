import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshLogin, signUpUser } from 'redux/auth/authOperations';

const initialState = {
  credentials: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(signUpUser.pending, state => state)
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log(action);
        state.credentials = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(signUpUser.rejected, state => state)
      .addCase(login.pending, state => state)
      .addCase(login.fulfilled, (state, action) => {
        console.log('login.fulfilled ', action);
        state.credentials = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logout.pending, state => state)
      .addCase(logout.fulfilled, state => {
        state.credentials.email = '';
        state.credentials.name = '';
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refreshLogin.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshLogin.fulfilled, (state, action) => {
        console.log(action);
        state.credentials = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshLogin.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authSliceReducer = authSlice.reducer;
