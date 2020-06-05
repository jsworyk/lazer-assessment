import { combineReducers } from "redux";
import contactReducer from "./contacts/reducer";
import themeReducer from "./theme/reducer";

const rootReducer = combineReducers({
  contactReducer,
  themeReducer
});

export default rootReducer;
