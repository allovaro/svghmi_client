import { API_SERVER } from '../config/constant';
import { getResource, postResource } from './handleFetch.service';

export const register = async (name, email, password) => {
    return await postResource('users/register', {email, password, name});

    // return fetch(`${API_SERVER}/users/register`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         email,
    //         password,
    //         name,
    //     }),
    // })
    //     .then((response) => (response.json()))
    //     .then((data) => {
    //         if (data.error) {
    //             throw new Error("Not 2xx response", { cause: data });
    //         }
    //         return data;
    //     });
};

export const login = async (email, password) => {
    const data = await postResource('users/login', {email, password});
    if (data.access_token) {
        localStorage.setItem("name", JSON.stringify(data.name));
        localStorage.setItem("user_id", JSON.stringify(data.id));
        localStorage.setItem("email", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.access_token));
        localStorage.setItem("level", JSON.stringify(data.level));
        localStorage.setItem("expires_in", JSON.stringify(data.expires_in));
    }
    return data;
};

export const changeName = async (name, token) => {
    const data = await getResource('users/change_credentials/name', token);
    localStorage.setItem("name", JSON.stringify(name));
    return data;
    // return fetch(`${API_SERVER}/users/change_credentials/name`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //     },
    //     body: JSON.stringify({
    //         name,
    //     }),
    // })
    //     .then((response) => (response.json()))
    //     .then((data) => {
    //         if (data.error) {
    //             throw new Error("Not 2xx response", { cause: data });
    //         }
    //         localStorage.setItem("name", JSON.stringify(name));
    //     })
};

export const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_in");
};

export const changePassword = async (password, token) => {
    try {
        const res = await fetch(`${API_SERVER}/users/change_credentials/password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
                password,
            }),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const changeEmail = async (email, token) => {
    try {
        const res = await fetch(`${API_SERVER}/users/change_credentials/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
                email,
            }),
        });
        const data = await res.json();
        localStorage.setItem("email", JSON.stringify(email));
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getPremiumDate = async (token) => {
    try {
        const res = await fetch(`${API_SERVER}/users/premium/info`, {
            headers: {
                'Authorization': `Token ${token}`,
            },
        });
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}