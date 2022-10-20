import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { changeNameAction } from '../../store/actions/auth';
import { changePassword, changeEmail, getPremiumDate } from '../../services/auth.service';

import Payment from '../payment/payment';

import './profileComponent.css';

function ProfileComponent() {
    const { email, name, isLoggedIn, level, token } = useSelector(state => state.auth);
    const [userEmail, setUserEmail] = useState(email);
    const [userName, setUserName] = useState(name);
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [emailMsg, setEmailMsg] = useState({});
    const [nameMsg, setNameMsg] = useState({});
    const [passMsg, setPassMsg] = useState({});
    const [premium, setPremium] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isValidEmail = (email) => (/\S+@\S+\.\S+/.test(email));
    let premium_expired = 0;

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
        const fetchVal = async () => {
            if (level === 'premium') {
                const res = await getPremiumDate(token);
                if (res.status) {
                    setPremium(res.premium_expired);
                }
            }
        }
        fetchVal();
        
    })

    const onChangeName = (e) => {
        setUserName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const onChangePass1 = (e) => {
        setPass1(e.target.value);
    }

    const onChangePass2 = (e) => {
        setPass2(e.target.value);
    }

    const onSubmitEmail = async (e) => {
        e.preventDefault();
        if (isValidEmail(userEmail)) {
            const res = await changeEmail(userEmail, token);
            if (res.error) {
                setEmailMsg({
                    style: 'error',
                    text: res.msg,
                });
                return;
            }
            setEmailMsg({
                style: 'success',
                text: res.msg,
            });
            return
        }
        setEmailMsg({
            style: 'error',
            text: 'Email not valid',
        });
    }

    const onSubmitName = (e) => {
        e.preventDefault();
        dispatch(changeNameAction(
            userName,
            token))
        .then(() => {
            setNameMsg({
                style: 'success',
                text: 'Name changed',
            });
        })
        .catch((e) => {
            console.error('something goes wrong...');
            setNameMsg({
                style: 'error',
                text: 'Sorry, something went wrong',
            });
        });
    }

    const onSubmitPassword = async (e) => {
        e.preventDefault();
        if (pass1 === pass2) {
            const res = await changePassword(pass1, token);
            if (res.error) {
                setPassMsg({
                    style: 'error',
                    text: res.msg,
                });
                return;
            }
            setPassMsg({
                style: 'success',
                text: res.msg,
            });
            setPass1('');
            setPass2('');
            return;
        }
        setPassMsg({
            style: 'error',
            text: 'Passwords is not identical',
        });
        setPass1('');
        setPass2('');
    }

    const passDisabled = !!pass1 && pass1 === pass2 ? false : true;
    const nameDisabled = !userName ? true : false;
    const emailDisabled = !userEmail ? true : false;

    const ExpiresOn = () => (
        <h4 className="left-column-h">
            Expires on - {}<span className={level !== 'basic' ? 'level-premium' : 'level-basic' }>{premium}</span>
        </h4>
    );

    return (
        <>
            <div className="profile-wrapper">
                <div className="profile-left">
                    <img className="profile-image-center" src="/user-profile-image.svg" alt="user profile template" />
                    <h4 className="left-column-h">{name}</h4>
                    <h4 className="left-column-h">Account - <span className={level !== 'basic' ? 'level-premium' : 'level-basic' }>{level}</span></h4>
                    { level === 'premium' ? <ExpiresOn /> : null }
                </div>

                <div className="profile-right">
                    <h2>Credentials</h2>
                    <hr/>
                    <form className="form-inline" onSubmit={onSubmitEmail} >
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="Email" value={userEmail} onChange={onChangeEmail} />
                        <button type="submit" disabled={emailDisabled}>Change email</button>
                    </form>
                    {emailMsg.text ? <p className={`form-message-${emailMsg.style}`}>{emailMsg.text}</p> : null}
                    <form className="form-inline" onSubmit={onSubmitName} >
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="Name" value={userName} onChange={onChangeName} />
                        <button type="submit" disabled={nameDisabled}>Change name</button>
                    </form>
                    {nameMsg.text ? <p className={`form-message-${nameMsg.style}`}>{nameMsg.text}</p> : null}
                    <form className="form-inline" onSubmit={onSubmitPassword} >
                        <label htmlFor="name">Password:</label>
                        <input type="password" id="password" value={pass1} name="password" onChange={onChangePass1} />
                        <input type="password" id="password-repeat" value={pass2} name="password" onChange={onChangePass2} />
                        <button type="submit" disabled={passDisabled}>Change password</button>
                    </form>
                    {passMsg.text ? <p className={`form-message-${passMsg.style}`}>{passMsg.text}</p> : null}
                </div>
            </div>
            <Payment />
        </>
    );
}

export default ProfileComponent;
