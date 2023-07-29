import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare: contact => {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },

    setRemoveContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContact, setRemoveContact, setFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
