import { GET_CONTACTS, PAGINATE } from "./types";

const initialState = {
  contacts: [],
  pending: false,
  erorr: null,
  page: 0
};
export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS.SUCCESS: {
      return {
        ...state,
        contacts: state.contacts.concat(action.payload)
      };
    }
    default:
      return {
        ...state
      };
  }
}
