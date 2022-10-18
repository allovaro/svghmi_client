import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import PricingTable from '../pricingTable/pricingTable';
import Loader from '../loader/loader';
import { createInvoice, saveInvoice } from '../../services/payment.service';

import './payment.css';

function Payment(props) {
    const [ loader, setLoader ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ ready, setReady ] = useState(false);
    const [ link, setLink ] = useState(null);
    const { email, user_id, isLoggedIn, token } = useSelector(state => state.auth);

    const navigate = useNavigate();

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

    const LinkElement = () =>(
        <div className="link-block">
            <h1 className="link-header">Invoice is ready!</h1>
            <p>Now you can follow link for paying your premium account</p>
            <a href={link} className="a_link fas fa-check-circle"> Pay Link</a>
        </div>
    );

    return (
        <div className="payment-content">
            { loader ? <Loader /> : null }
            { ready ? <LinkElement /> : null }
            { !ready ? <PricingTable onPurchase={onPurchase} /> : null}
        </div>
    );
}

export default Payment;
