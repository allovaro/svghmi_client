import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  NAME_CHANGED,
  NAME_CHANGE_FAILED,
  EMAIL_CHANGED,
} from "../actions/types";

const name = JSON.parse(localStorage.getItem('name'));
const user_id = JSON.parse(localStorage.getItem('user_id'));
const email = JSON.parse(localStorage.getItem('email'));
const token = JSON.parse(localStorage.getItem('token'));
const expires_in = JSON.parse(localStorage.getItem('expires_in'));
const level = JSON.parse(localStorage.getItem('level'));

const initialState = token
  ? { isLoggedIn: true, name, email, token, expires_in, level, user_id }
  : { isLoggedIn: false, name: null, email: null, token: null, expires_in: null, level: null, user_id: null };

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
        user_id: payload.user_id,
        email: payload.email,
        token: payload.token,
        expires_in: payload.expires_in,
        level: payload.level,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        name: null,
        user_id: null,
        email: null,
        token: null,
        expires_in: null,
        level: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        name: null,
        user_id: null,
        email: null,
        token: null,
        expires_in: null,
        level: null,
      };
    case NAME_CHANGED:
      return {
        ...state,
        name: payload.name,
      };
    case NAME_CHANGE_FAILED:
      return {
        ...state,
      };
    case EMAIL_CHANGED:
      return {
        ...state,
        email: payload.email,
      };
    default:
      return state;
  }
}
