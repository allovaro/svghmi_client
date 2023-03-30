import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    NAME_CHANGED,
    NAME_CHANGE_FAILED,
    EMAIL_CHANGED,
    SET_MESSAGE,
} from "./types";

import {
    register,
    login,
    logout,
    changeName,
    changeEmail,
} from '../../services/auth.service';
export const registerAction = (username, email, password) => async (dispatch) => {
    try {
        const data = await register(username, email, password);
        dispatch({
            type: REGISTER_SUCCESS,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: data.msg,
        });
    } catch (err) {
        const msg = err.message === 'db record already exist' ?
        'email already registered' : err.message;
        dispatch({
            type: REGISTER_FAIL,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: msg,
        });
        throw new Error(msg);
    }
};

export const loginAction = (username, password) => async (dispatch) => {
    try {
        const data = await login(username, password);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                name: data.name,
                user_id: data.id,
                email: data.user,
                level: data.level,
                token: data.access_token,
                expires_in: data.expires_in,
            },
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: err.message,
        });
        throw new Error(err.message);
    }
};

export const changeNameAction = (name, token) => async (dispatch) => {
    try {
        const data = await changeName(name, token);
        dispatch({
            type: NAME_CHANGED,
            payload: {
                name,
            },
        });
        return data;
    } catch (err) {
        dispatch({
            type: NAME_CHANGE_FAILED,
        });
        dispatch({
            type: SET_MESSAGE,
            payload: err.message,
        });
        throw new Error(err.message);
    }
};

export const changeEmailAction = (email, token) => async (dispatch) => {
    try {
        const data = await changeEmail(email, token);
        dispatch({
            type: EMAIL_CHANGED,
            payload: {
                email,
            },
        });
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const logoutAction = () => (dispatch) => {
    logout();

    dispatch({
        type: LOGOUT,
    });
};