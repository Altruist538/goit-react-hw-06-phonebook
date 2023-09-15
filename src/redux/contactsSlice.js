import { createSlice } from '@reduxjs/toolkit';

function contactsLocalStorage() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  } else {
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  }
}

const slice = createSlice({
  name: 'contacts',
  initialState: contactsLocalStorage,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.findIndex(state => state.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
