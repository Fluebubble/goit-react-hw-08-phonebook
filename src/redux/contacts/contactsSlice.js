import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContactsList } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(createContact.fulfilled, (state, action) => {
        console.log('createContact.fulfilled');
      })
      .addCase(getContactsList.fulfilled, (state, action) => {
        state.items = action.payload;
      }),

});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, visibleContacts } = contactsSlice.actions;
