import { API_CRYPTOCLOUD, AUTH_CRYPTOCLOUD, SHOP_ID } from '../config/constant';


export const createInvoice = async (amount, user_id, currency, email) => {
    try {
        const res = await fetch(`${API_CRYPTOCLOUD}/invoice/create`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${AUTH_CRYPTOCLOUD}`,
            },
            body: JSON.stringify({
                shop_id: SHOP_ID,
                amount,
                order_id: user_id,
                currency,
                email,
            }),
        });
        const data = await res.json();
        if (!data.ok) {
            throw new Error("Not 2xx response", {code: data.status});
        }
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const checkInvoice = async (uuid) => {
    try {
        const res = await fetch(`${API_CRYPTOCLOUD}/invoice/info`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${AUTH_CRYPTOCLOUD}`,
            },
            body: JSON.stringify({
                uuid,
            }),
        });
        const data = await res.json();
        if (!data.ok) {
            throw new Error("Not 2xx response", {code: data.status});
        }
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

