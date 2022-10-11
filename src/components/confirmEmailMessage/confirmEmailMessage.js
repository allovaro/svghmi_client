import { useEffect } from 'react';
import { API_SERVER } from '../../config/constant';

function ConfirmEmailMessage() {
    useEffect(() => {
        fetch(`${API_SERVER}/users/register`, {
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
    });
}

export default ConfirmEmailMessage;
