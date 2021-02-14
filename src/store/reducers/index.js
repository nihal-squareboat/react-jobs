import { configurePersistReducer } from "./persistReducers";

import authReducers from "./auth";

import { TYPES } from "../../containers/Login/Constants";

import { combineReducers } from "redux";

const appReducer = combineReducers({
  auth: authReducers
});

const rootReducer = (state, action) => {
  if (action.type === TYPES.USER_LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default configurePersistReducer(rootReducer);
