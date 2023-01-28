import { combineReducers } from "redux";

import alert from "./alertReducer";
import login from "./loginReducer";
// Combine Reducers
const MasterReducer = combineReducers({
  //   login,
  //   users,
  alert,
  login,
});

export default MasterReducer;
