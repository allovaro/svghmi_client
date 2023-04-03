import { postResource, getResource } from './handleFetch.service';

export const resetPassword = async (email) => await postResource('users/reset_password', { email });

export const setPassword = async (token, id, password) => await postResource(`users/reset_password/${token}`, { id, password });

export const confirmEmail = async (id) => await getResource(`users/email/confirm/${id}`);

export const getPremiumDate = async (token) => getResource('users/premium/info', token);
