import { API_SERVER } from '../config/constant';

export const getResource = async (url, token) => {
    const options = {};
    if (token) {
        options.headers = {
            'Authorization': `Token ${token}`,
        }
    }
    const res = await fetch(`${API_SERVER}/${url}`, options);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}`
        + `, received ${res.status}`);
    }
    return await res.json();
}

export const postResource = async (url, body, token) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    if (token) {
        options.headers = {
            'Authorization': `Token ${token}`,
        }
    }
    const res = await fetch(`${API_SERVER}/${url}`, options)
    if (!res.ok) {
        const retVal = await res.json();
        if (retVal && retVal.msg) {
            throw new Error(retVal.msg);
        }
        throw new Error(`Could not fetch ${url}`
        + `, received ${res.status}`);
    }
    return await res.json();
}
