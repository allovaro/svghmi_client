import { API_SERVER } from '../config/constant';

export const getResource = async (url, token) => {
    const timeout = 5000;
    const abortController = new AbortController();
    const id = setTimeout(() => abortController.abort(), timeout);
    const options = {
        signal: abortController.signal,
    };
    if (token) {
        options.headers = {
            'Authorization': `Token ${token}`,
        }
    }
    const res = await fetch(`${API_SERVER}/${url}`, options);
    clearTimeout(id);
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

export const postResource = async (url, body, token) => {
    const timeout = 5000;
    const abortController = new AbortController();
    const id = setTimeout(() => abortController.abort(), timeout);
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
        signal: abortController.signal,
    }
    if (token) {
        options.headers['Authorization'] = `Token ${token}`
    }
    const res = await fetch(`${API_SERVER}/${url}`, options);
    clearTimeout(id);
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
