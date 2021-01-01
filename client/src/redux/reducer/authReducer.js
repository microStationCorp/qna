import { InitialAuthState } from "../state/AuthState";
import { LOGIN_SUCCESS, LOG_OUT } from "../constant/authConstant";

export const AuthReducer = (state = InitialAuthState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
