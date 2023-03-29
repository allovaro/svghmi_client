import { API_SERVER, API_CRYPTOCLOUD, AUTH_CRYPTOCLOUD, SHOP_ID } from '../config/constant';


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
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const saveInvoice = async (period, user_id, invoice, token) => {
    try {
        const res = await fetch(`${API_SERVER}/payment/invoice`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
                period,
                user_id,
                invoice,
            }),
        });
        const data = await res.json();
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
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getActiveInvoice = async (user_id, token) => {
    try {
        const res = await fetch(`${API_SERVER}/payment/invoice/active`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({
                user_id,
            }),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return null;
    }
}

