import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
