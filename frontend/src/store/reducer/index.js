import { combineReducers } from "redux";

import alert from "./alertReducer";
import login from "./loginReducer";
import comment from "./commentReducer";
import posts from "./createpostReducer";
// Combine Reducers
const MasterReducer = combineReducers({
  //   login,
  //   users,
  alert,
  login,
  comment,
  posts,
});

export default MasterReducer;
