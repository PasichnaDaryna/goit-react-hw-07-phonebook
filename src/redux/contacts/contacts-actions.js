import { createAction } from "@reduxjs/toolkit";

export const fetchContactRequest = createAction(
  "contacts/fetchcontactsRequest"
);
export const fetchContactSuccess = createAction(
  "contacts/fetchcontactsSuccess"
);
export const fetchContactError = createAction("contacts/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const changeFilter = createAction("contacs/changeFilter");
