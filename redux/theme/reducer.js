import { TOGGLE_THEME } from "./types";

const initialState = {
  darkTheme: false
};
export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        darkTheme: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
