import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const name = JSON.parse(localStorage.getItem('name'));
const email = JSON.parse(localStorage.getItem('email'));
const token = JSON.parse(localStorage.getItem('token'));

const initialState = token
  ? { isLoggedIn: true, name, email, token }
  : { isLoggedIn: false, name: null, email: null, token: null };

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        name: payload.name,
        email: payload.email,
        token: payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        name: null,
        email: null,
        token: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        name: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
}
