import { Component, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { registerAction, loginAction } from '../../store/actions/auth';
import './loginComponent2.css';

const mode = 'login';

function LoginComponent2(props) {
    const { message } = useSelector(state => state.message);
    const [login, setLogin] = useState({
        email_signup: '',
        password: '',
        fullname: '',
        email: '',
        createpassword: '',
        repeatpassword: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Validation functions
    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const isPassIdentical = () => {
        return login.createpassword === login.repeatpassword;
    }

    const isLoginFormValid = () => {
        if (isValidEmail(login.email) && login.password && login.password !== '') {
            return true;
        }
        return false;
    }

    const isSignupFormValid = () => {
        if (isValidEmail(login.email_signup) &&
            login.fullname &&
            isPassIdentical()) {
            return true;
        }
        return false;
    }

    // Save credentials in state
    const onHandleChange = (e) => {
        const { id, value } = e.target;
        setLogin({
            ...login,
            [id]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.mode === 'signup' && isSignupFormValid()) {
            dispatch(registerAction(
                login.fullname,
                login.email_signup,
                login.createpassword))
                .then(() => {
                    navigate(`/signup_confirm/${login.email_signup}`);
                })
                .catch(() => {
                    console.error('something goes wrong...');
                });
        } else {
            dispatch(loginAction(login.email, login.password))
                .then(() => {
                    navigate('/');
                })
                .catch(() => {
                    setLogin({
                        ...login,
                        email: '',
                        password: '',
                    });
                });
        }
    }
    const emailSignUpClass = isValidEmail(login.email_signup) ? 'form-group__input' : 'form-group__input error__input';
    const emailLoginClass = isValidEmail(login.email) ? 'form-group__input' : 'form-group__input error__input';
    let submitClass = 'buttonLogin button-login--primary full-width';
    if (props.mode === 'signup' && !isSignupFormValid()) {
        submitClass += ' button-login-disabled';
    } else if (props.mode === 'login' && !isLoginFormValid()) {
        submitClass += ' button-login-disabled';
    }

    const repeatClass = isPassIdentical() ? 'form-group__input' : 'form-group__input error__input';
    const errorMessage = message ? <h5 className="login-message">{message}</h5> : null;

    return (
        <>
            <form>
                <input checked="<%= true %>" id="signin" name="action" type="radio" value="signin"></input>
                <label for="signin">Sign in</label>
                <input id="signup" name="action" type="radio" value="signup"></input>
                <label for="signup">Sign up</label>
                <input id="reset" name="action" type="radio" value="reset"></input>
                <label for="reset">Reset</label>
                <div className="arrow_wrapper">
                    <div className="arrow_icon"></div>
                    <input id="email" placeholder="Email" type="text"></input>
                    <input id="pass" placeholder="Password" type="password"></input>
                    <input id="repass" placeholder="Repeat password" type="password"></input>
                </div>
                <button type="submit">
                    <span>
                        Reset password
                        <br />
                        Sign in
                        <br />
                        Sign up
                    </span>
                </button>
            </form>
            <div id="hint">Click on the tabs</div>
        </>
    )
}

export default LoginComponent2;
