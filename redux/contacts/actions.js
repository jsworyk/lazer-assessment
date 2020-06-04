import { GET_CONTACTS } from "./types";
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
        console.log(response.data.data);
        dispatch(getContactsSuccess(response.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
