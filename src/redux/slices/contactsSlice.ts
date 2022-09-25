import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Contact {
  title: string;
  phone: string;
}

export interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    { title: "test 1", phone: "854854545" },
    { title: "test 2", phone: "811111111" },
    { title: "test 3", phone: "833333333" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<Contact>) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }: PayloadAction<Contact>) => {
      state.contacts = state.contacts.filter(
        (obj) => obj.title !== payload.title || obj.phone !== payload.phone
      );
    },
    clearContacts: (state, action) => {
      state.contacts = [];
    },
  },
});

export const contactsSelector = (state: RootState) => state.contacts;

export const { addContact, removeContact, clearContacts } =
  contactsSlice.actions;

export default contactsSlice.reducer;
