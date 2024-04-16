import { createSelector } from '@reduxjs/toolkit';

export const selectTerm = state => state.contactsFilter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const filteredContacts = createSelector(
  [selectTerm, selectContacts],
  (term, contacts) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    )
);
