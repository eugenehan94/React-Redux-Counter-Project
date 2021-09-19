//Combine reducers
//Not necessary because only once is present, but here just
//in case more reducers will be added in the future

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  count: counterReducer,
});

export default reducers;
