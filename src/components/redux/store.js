import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsFilterReducer } from './contactsFilterSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  contactsFilter: contactsFilterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
