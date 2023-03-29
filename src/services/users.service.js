import { postResource, getResource } from './handleFetch.service';

export const resetPassword = async (email) => {
    return await postResource('users/reset_password', { email });
}

export const confirmEmail = async (id) => {
    return await getResource(`users/email/confirm/${id}`)
}
