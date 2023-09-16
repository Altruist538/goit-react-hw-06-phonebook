import { createSlice } from '@reduxjs/toolkit';
const contactBaz = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const slice = createSlice({
  name: 'contacts',
  initialState: contactBaz,
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
