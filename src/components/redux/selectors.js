import { createSelector } from '@reduxjs/toolkit';

export const selectTerm = state => state.contactsFilter;
export const selectContacts = state => state.contacts;

export const filteredContacts = createSelector(
  [selectTerm, selectContacts],
  (term, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    )
);
