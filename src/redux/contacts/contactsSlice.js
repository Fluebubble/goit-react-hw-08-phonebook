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
  // {
  //   [fetchContacts.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.items = action.payload;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [postContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [postContact.fulfilled]: state => {
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [postContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending]: state => {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled]: state => {
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [deleteContact.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, visibleContacts } = contactsSlice.actions;
