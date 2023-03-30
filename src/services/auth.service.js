import { postResource } from './handleFetch.service';

export const register = async (name, email, password) => {
    return await postResource('users/register', {email, password, name});
};

export const login = async (email, password) => {
    const data = await postResource('users/login', {email, password});
    if (data.access_token) {
        localStorage.setItem('name', JSON.stringify(data.name));
        localStorage.setItem('user_id', JSON.stringify(data.id));
        localStorage.setItem('email', JSON.stringify(data.user));
        localStorage.setItem('token', JSON.stringify(data.access_token));
        localStorage.setItem('level', JSON.stringify(data.level));
        localStorage.setItem('expires_in', JSON.stringify(data.expires_in));
    }
    return data;
};

export const changeName = async (name, token) => {
    const data = await postResource('users/change_credentials/name', {name}, token);
    localStorage.setItem('name', JSON.stringify(name));
    return data;
};

export const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_in');
};

export const changePassword = async (password, token) => {
    return await postResource('users/change_credentials/password', {password}, token);
}

export const changeEmail = async (email, token) => {
    return await postResource('users/change_credentials/email', {email}, token);
}
