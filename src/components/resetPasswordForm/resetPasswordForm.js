import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from "../../store/actions/auth";

import MessageTemplate from "../messageTemplate/messageTemplate";
import { API_SERVER } from '../../config/constant';

import './resetPasswordForm.css';

function ResetPasswordForm() {
    const params = useParams();
    const [errorMsg, setErrorMsg] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Save credentials in state
    const onChange1 = (e) => {
        const { value } = e.target;
        setPass1(value);
    }
    // Save credentials in state
    const onChange2 = (e) => {
        const { value } = e.target;
        setPass2(value);
    }

    const requestSetPassword = () => {
        return fetch(`${API_SERVER}/users/reset_password/${params.token}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              id: params.id,
              password: pass1,
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
        requestSetPassword()
        .then(() => {
            dispatch(logoutAction());
            navigate(`/reset_password_successfull`);
        })
        .catch((error) => {
            const message = (error.cause && error.cause.msg) ?
                error.cause.msg : '';
            console.log(message)
            if (message === '') setErrorMsg('something goes wrong');
            setErrorMsg(message);
            setPass1('');
            setPass2('');
        });
    }

    const isPassIdentical = () =>  {
        return pass1 === pass2;
    }

    const repeatClass = isPassIdentical() ? 'form-group__input' : 'form-group__input error__input';

    return (
        <MessageTemplate>
            <section className={`form-block form-block--is-login`}>
                <form onSubmit={onSubmit}>
                    <h3 className="form-block__header" >Set new password</h3>
                    <div className="form-group form-group--login">                        
                        <input className="form-group__input" type="password" id="password" label="password" value={pass1} onChange={onChange1} placeholder='password' />
                        <input className={repeatClass} type="password" id="repeatpassword" label="repeat password" value={pass2} onChange={onChange2} placeholder='repeat password' />
                    </div>
                    <button className="buttonLogin button-login--primary" type="submit">Set Password</button>
                </form>
            </section>
            {errorMsg ? <h5 className="login-message" >{errorMsg}</h5> : null}
        </MessageTemplate>
    )
}

export default ResetPasswordForm;
