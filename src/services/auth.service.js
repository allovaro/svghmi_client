import { API_SERVER } from '../config/constant';


export const register = (name, email, password) => {
  return fetch(`${API_SERVER}/register`, {
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
  .then((data) => (data));
};

export const login = (email, password) => {
  return fetch(`${API_SERVER}/login`, {
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
    if (data.access_token) {
      localStorage.setItem("name", JSON.stringify(data.user.name));
      localStorage.setItem("email", JSON.stringify(data.user.email));
      localStorage.setItem("token", JSON.stringify(data.access_token));
    }
    return data;
  });
};

export const logout = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("token");
};
