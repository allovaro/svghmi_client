import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import ReactGA from 'react-ga4';

import PricingTable from '../pricingTable/pricingTable';
import Loader from '../loader/loader';
import { createInvoice, saveInvoice, getActiveInvoice } from '../../services/payments.service';
import { logoutAction } from "../../store/actions/auth";

import './payment.css';

function Payment(props) {
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [ready, setReady] = useState(false);
    const [link, setLink] = useState(null);
    const { user_id, isLoggedIn, token, email } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            return;
        }
        async function getLastInvoice() {
            const data = await getActiveInvoice(user_id, token);
            if (data.error && data.msg === 'Token expired') {
                dispatch(logoutAction());
                navigate('/');
            }
            if (data.status) {
                setReady(true);
                setLink(data.invoice.pay_url);
            }
        }
        getLastInvoice();
    }, [token, user_id, isLoggedIn, dispatch, navigate]);

    const onPurchase = async (amount, period) => {
        if (!isLoggedIn) {
            navigate('/signup');
            return;
        }
        setLoader(true);
        const invoice = await createInvoice(amount, user_id, 'USD', email);
        if (invoice && invoice.status === 'success') {
            await saveInvoice(period, user_id, invoice, token);
            setLoader(false);
            setReady(true);
            setLink(invoice.pay_url);
            ReactGA.event({
                category: "Payment",
                action: "create invoice",
                label: "invoice",
                value: period,
            });
            return;
        }
        setError(true);
        setLoader(false);
    }

    const onNewInvoice = () => {
        setReady(false);
        setError(false);
    }

    const LinkElement = () => (
        <div className="link-block">
            <h1 className="link-header">Invoice is ready!</h1>
            <p className="link-text">Now you can follow the link for paying your premium account</p>
            <a target="_blank" rel="noopener noreferrer" href={link} className="a_link fas fa-check-circle"> Pay Link</a>
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
    );

    return (
        <div className="payment-content">
            <div className="payment-promo">
                <h1 className="payment-header"><i className="fas fa-arrow-down"></i> Choose your premium plan here <i className="fas fa-arrow-down"></i></h1>
                <p><span className="payment-promo-features">Features </span>want more options and convenience? Try premium access.
                    You will have access to batch file
                    conversion of up to <span className="payment-promo-highlight">100 files </span>
                    at a time and the maximum size of one file will be increased
                    up to <span className="payment-promo-highlight">2 Mb</span>.
                    You can easily <span className="payment-promo-highlight">pay with crypto </span>
                    or if you do not have it, directly by card.</p>
                <p><span className="payment-promo-features">Donate </span>
                    this donation will let me know that it is worth further developing this service and some motivation.</p>
                <p className="cannot-donate"><span className="payment-promo-features">Options* </span>
                    if you have no chance to donate, but you absolutely need full functionality,
                    just write to me and we will think along with you!</p>
            </div>
            {loader ? <Loader /> : null}
            {ready ? <LinkElement /> : null}
            {error ? <ErrorMessage /> : null}
            {!ready ? <PricingTable onPurchase={onPurchase} /> : null}
            <div className="payment-promo-options">
                <p>**Depending on the payment method chosen, the commission of the crypto processing service may change</p>
            </div>
        </div>
    );
}

export default Payment;
