import { TYPES } from "../../containers/Login/Constants";

const authReducer =  (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
        error: {},
      };
    case TYPES.USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: {},
      };
    default:
      return state;
  }
};

export default authReducer;
