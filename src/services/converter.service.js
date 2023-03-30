import { postResource } from './handleFetch.service';


export const optimize = async (clientId, config, user) => {
    return await postResource(`converter/optimize/${clientId}`, { ...config, user });
}