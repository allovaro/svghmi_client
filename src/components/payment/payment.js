import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import PricingTable from '../pricingTable/pricingTable';
import Loader from '../loader/loader';
import { createInvoice, saveInvoice, getActiveInvoice } from '../../services/payment.service';

import './payment.css';

function Payment(props) {
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ ready, setReady ] = useState(false);
    const [ link, setLink ] = useState(null);
    const { user_id, isLoggedIn, token } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        async function getLastInvoice() {
            const data = await getActiveInvoice(user_id, token);
            if (data.status) {
                setReady(true);
                setLink(data.invoice.pay_url);
            }
        }
        getLastInvoice();
    }, [token, user_id]);

    const onPurchase =  async(amount, period) => {
        if (!isLoggedIn) {
            navigate('/login');
            return;
        }
        setLoader(true);

        // test only
        setLoader(false);
        setReady(true);
        setLink('https://google.com');
        return;

        // const invoice = await createInvoice(amount, user_id, 'USD', email);
        // if (invoice && invoice.status === 'success') {
        //     await saveInvoice(period, user_id, invoice, token);
        //     setLoader(false);
        //     setReady(true);
        //     setLink(invoice.pay_url);
        //     return;
        // }
        // setError(true);
        // setLoader(false);
    }

    const onNewInvoice = () => { 
        setReady(false);
        setError(false);
    }

    const LinkElement = () =>(
        <div className="link-block">
            <h1 className="link-header">Invoice is ready!</h1>
            <p className="link-text">Now you can follow the link for paying your premium account</p>
            <a href={link} className="a_link fas fa-check-circle"> Pay Link</a>
            <div>
                <button className="new_invoice_btn" onClick={onNewInvoice}>create new invoice</button>
            </div>
        </div>
    );

    const ErrorMessage = () => (
        <div className="link-block">
            <h1 className="link-header">Oops!</h1>
            <p className="link-text">Sorry, something went wrong. Cannot create invoice.</p>
        </div>
    )

    return (
        <div className="payment-content">
            <h1 className="payment-header">Choose your premium plan here</h1>
            { loader ? <Loader /> : null }
            { ready ? <LinkElement /> : null }
            { error ? <ErrorMessage /> : null }
            { !ready ? <PricingTable onPurchase={onPurchase} /> : null}
        </div>
    );
}

export default Payment;
