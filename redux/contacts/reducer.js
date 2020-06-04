import { GET_CONTACTS } from "./types";

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
        contacts: action.payload
      };
    }
    default:
      return {
        ...state
      };
  }
}
