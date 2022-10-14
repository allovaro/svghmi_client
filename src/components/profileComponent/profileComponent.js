import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './profileComponent.css';

function ProfileComponent() {
    const { email, name, isLoggedIn, level } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/');
        }
    })

    return (
        <div className="profile-wrapper">
            <h1>Email = {email}</h1>
            <h1>Name = {name}</h1>
        </div>
    );
}

export default ProfileComponent;
