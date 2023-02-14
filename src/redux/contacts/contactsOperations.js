import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsList = createAsyncThunk(
  'contacts/getContactsList',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, thunkApi) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log(response.data);
      thunkApi.dispatch(getContactsList());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      console.log(response.data);
      thunkApi.dispatch(getContactsList());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
