import { API_SERVER } from '../config/constant';


export const register = (name, email, password) => {
  return fetch(`${API_SERVER}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  })
  .then((response) => (response.json()))
  .then((data) => {
    if (data.error) {
      throw new Error("Not 2xx response", {cause: data});
    }
    return data;
  });
};

export const login = (email, password) => {
  return fetch(`${API_SERVER}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  .then((response) => (response.json()))
  .then((data) => {
    if (data.error) {
      throw new Error("Not 2xx response", {cause: data});
    }
    if (data.access_token) {
      console.log(data.id);
      localStorage.setItem("name", JSON.stringify(data.name));
      localStorage.setItem("user_id", JSON.stringify(data.id));
      localStorage.setItem("email", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.access_token));
      localStorage.setItem("level", JSON.stringify(data.level));
      localStorage.setItem("expires_in", JSON.stringify(data.expires_in));
    }
    return data;
  })
};

export const changeName = (name, token) => {
  return fetch(`${API_SERVER}/users/change_credentials/name`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
    }),
  })
  .then((response) => (response.json()))
  .then((data) => {
    if (data.error) {
      throw new Error("Not 2xx response", {cause: data});
    }
    localStorage.setItem("name", JSON.stringify(name));
  })
};

export const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
};
