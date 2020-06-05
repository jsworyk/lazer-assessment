import { GET_CONTACTS, UPDATE_CONTACT_LIST } from "./types";
import axios from "axios";

export function getContactsPending() {
  return {
    type: GET_CONTACTS.PENDING
  };
}
export function getContactsSuccess(contacts) {
  return {
    type: GET_CONTACTS.SUCCESS,
    payload: contacts
  };
}
export function getContactsError(error) {
  return {
    type: GET_CONTACTS.ERROR,
    payload: error
  };
}
export function getContacts(page) {
  return dispatch => {
    dispatch(getContactsPending());
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        dispatch(getContactsSuccess(response.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function setContactList(contacts) {
  return {
    type: UPDATE_CONTACT_LIST,
    payload: contacts
  };
}
