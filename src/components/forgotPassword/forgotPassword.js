import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import MessageTemplate from "../messageTemplate/messageTemplate";
import { API_SERVER } from "../../config/constant";

import './forgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();

    // Validation functions
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
        }

    // Save credentials in state
    const onChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    }

    const requestReset = (email) => {
        return fetch(`${API_SERVER}/users/reset_password`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
            }),
          })
          .then((response) => (response.json()))
          .then((data) => {
            if (data.error) {
              throw new Error("Not 2xx response", {cause: data});
            }
            return data;
          });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        requestReset(email)
        .then(() => {
            navigate(`/reset_email_sent/${email}`);
        })
        .catch((error) => {
            const message = (error.cause && error.cause.msg) ?
                error.cause.msg : '';
            setErrorMsg(message);
            setEmail('');
        });
    }
    let submitClass = 'buttonLogin button-login--primary full-width';
    if (!isValidEmail(email)) submitClass += ' button-login-disabled';

    return (
        <MessageTemplate>
            <section className={`form-block form-block--is-login`}>
                <form onSubmit={onSubmit}>
                    <h3 className="form-block__header" >Forgot your password?</h3>
                    <div className="form-group form-group--login">                        
                        <input className="form-group__input" type="text" id="email" label="email" value={email} onChange={onChange} placeholder='name@domain.com'/>
                    </div>
                    <button className={submitClass} type="submit">Reset Password</button>
                </form>
            </section>
            {errorMsg ? <h5 className="login-message" >{errorMsg}</h5> : null}
        </MessageTemplate>
    )
}


export default ForgotPassword;
