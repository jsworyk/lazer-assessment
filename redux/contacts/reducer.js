import { GET_CONTACTS, UPDATE_CONTACT_LIST } from "./types";

const initialState = {
  contacts: [],
  pending: false,
  erorr: null
};
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS.SUCCESS: {
      return {
        ...state,
        contacts: state.contacts.concat(action.payload)
      };
    }
    case UPDATE_CONTACT_LIST: {
      return {
        ...state,
        contacts: action.payload
      };
    }
    default:
      return {
        ...state
      };
  }
}
