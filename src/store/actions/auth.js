import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import { register, login, logout } from '../../services/auth.service';
export const registerAction = (username, email, password) => (dispatch) => {
  return register(username, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: 'Message from nodejs',
        // payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.cause && error.cause.msg) ?
      error.cause.msg : '';

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const loginAction = (username, password) => (dispatch) => {
  return login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: data.name,
          email: data.user,
          level: data.level,
          token: data.access_token,
          expires_in: data.expires_in,
        },
      });
      return Promise.resolve();
    },
    (error) => {
      const message = (error.cause && error.cause.msg) ?
      error.cause.msg : '';
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logoutAction = () => (dispatch) => {
  logout();

  dispatch({
    type: LOGOUT,
  });
};
