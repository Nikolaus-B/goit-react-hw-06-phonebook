import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filteredContacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      if (
        state.contacts.some(contact => contact.name === action.payload.name)
      ) {
        Notify.failure(`${action.payload.name} already in phonebook`);
        return;
      }
      Notify.success(`${action.payload.name} added to your contacts`);
      state.contacts.push({ ...action.payload, id: nanoid() });
    },
    deleteContact: (state, action) => {
      Notify.info(`${action.payload.name} removed from your phone book`);
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const getContacts = state => state.contacts.contacts;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
