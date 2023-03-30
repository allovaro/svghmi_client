import { postResource, getResource } from './handleFetch.service';

export const resetPassword = async (email) => {
    return await postResource('users/reset_password', { email });
}

export const setPassword = async (token, id, password) => {
    return await postResource(`users/reset_password/${token}`, { id, password });
}

export const confirmEmail = async (id) => {
    return await getResource(`users/email/confirm/${id}`)
}

export const getPremiumDate = async (token) => {
    return getResource('users/premium/info', token);
}
