import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

export const addContact = (name, number, id) => (dispatch) => {
  const contact = { name, number, id };
  dispatch(addContactRequest);

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacs/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
