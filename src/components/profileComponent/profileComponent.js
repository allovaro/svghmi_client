import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { changeNameAction } from '../../store/actions/auth';

import Payment from '../payment/payment';

import './profileComponent.css';

function ProfileComponent() {
    const { email, name, isLoggedIn, level, token } = useSelector(state => state.auth);
    const [userName, setUserName] = useState(name);
    const [nameMsg, setNameMsg] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    })

    const onChangeName = (e) => {
        setUserName(e.target.value);
    }

    const onSubmitName = (e) => {
        e.preventDefault();
        dispatch(changeNameAction(
            userName,
            token))
        .then(() => {
            setNameMsg('Name changed');
        })
        .catch((e) => {
            console.error('something goes wrong...');
            setNameMsg('Sorry, something goes wrong');
        });
    }

    const onSubmitPassword = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="profile-wrapper">
                <div className="profile-left">
                    <img className="profile-image-center" src="/user-profile-image.svg" alt="user profile template" />
                    <h4 className="left-column-h">{name}</h4>
                    <h4 className="left-column-h">Status - <span className={level !== 'basic' ? 'level-premium' : 'level-basic' }>{level}</span></h4>
                </div>

                <div className="profile-right">
                    <form className="form-inline" >
                        <label htmlFor="email-text">Email:</label>
                        <h5 id="email-text">{email}</h5>
                    </form>
                    <form className="form-inline" onSubmit={onSubmitName} >
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="Name" value={userName} onChange={onChangeName} />
                        <button type="submit">Change name</button>
                    </form>
                    {nameMsg ? <p>{nameMsg}</p> : null}
                    <form onSubmit={onSubmitPassword} >
                        <label htmlFor="name">Password:</label>
                        <input type="password" id="password" name="password" />
                        <input type="password" id="password-repeat" name="password" />
                        <button type="submit">Change password</button>
                    </form>
                </div>
            </div>
            
            <Payment />
        </>
    );
}

export default ProfileComponent;
