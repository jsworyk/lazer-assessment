import { combineReducers } from "redux";
import contactReducer from "./contacts/reducer";

const rootReducer = combineReducers({
  contactReducer
});

export default rootReducer;
