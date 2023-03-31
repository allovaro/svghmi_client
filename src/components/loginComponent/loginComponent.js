import { Component, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { sendMetrics } from '../../services/ga.service';
import { registerAction, loginAction } from '../../store/actions/auth';
import './loginComponent.css';

const mode = 'login';

function LoginForm(props) {
    const { message } = useSelector(state => state.message);
    const [ login, setLogin ] = useState({
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

    const isPassIdentical = () =>  {
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
        setLogin({...login, 
            [id]: value,
        })
    }

    const onForgot = () => {
        navigate(`/forgot_password`);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (props.mode === 'signup' && isSignupFormValid()) {
            try {
                await dispatch(registerAction(
                    login.fullname,
                    login.email_signup,
                    login.createpassword));
                sendMetrics('sign_up', { method: 'svghmi' });
                navigate(`/email_sent`);
            } catch (err) {
                sendMetrics('sign_up_error', { method: 'svghmi' });
            }
        } else {
            try {
                await dispatch(loginAction(login.email, login.password));
                sendMetrics('login', { method: 'svghmi' });
                navigate('/');
            } catch (err) {
                setLogin({...login, 
                    email: '',
                    password: '',
                });
            }
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
        <form onSubmit={onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">                  
                    <input className={emailLoginClass} type="text" id="email" label="email" disabled={props.mode !== 'login'} value={login.email} onChange={onHandleChange} placeholder='email'/>
                    <input className="form-group__input" type="password" id="password" label="password" disabled={props.mode !== 'login'} value={login.password} onChange={onHandleChange} placeholder='password' />
                </div>
                <div className="form-group form-group--signup">
                    <input className="form-group__input" type="text" id="fullname" label="full name" disabled={props.mode !== 'signup'} value={login.fullname} onChange={onHandleChange} placeholder='full name' />
                    <input className={emailSignUpClass} type="email" id="email_signup" label="email" disabled={props.mode !== 'signup'} value={login.email_signup} onChange={onHandleChange} placeholder='email' />
                    <input className="form-group__input" type="password" id="createpassword" label="password" disabled={props.mode !== 'signup'} value={login.createpassword} onChange={onHandleChange} placeholder='password' />
                    <input className={repeatClass} type="password" id="repeatpassword" label="repeat password" disabled={props.mode !== 'signup'} value={login.repeatpassword} onChange={onHandleChange} placeholder='repeat password' />
                </div>
            </div>
            <button className={submitClass} type="submit">{props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
            { errorMessage }
            { props.mode === 'login' ? <button className="button-forgot" onClick={onForgot} >Forgotten your password?</button> : null }
        </form>
    )
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode,
        }
    }

    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }

    render() {
        return (
            <div className={`login-form-app login-form-app--is-${mode}`}>
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                <section className={`form-block form-block--is-${this.state.mode}`}>
                    <header className="form-block__header">
                        <h1>{this.state.mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
                        <div className="form-block__toggle-block">
                            <span>{this.state.mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                            <input className="in-log-checkbox" id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                            <label htmlFor="form-toggler"></label>
                        </div>
                    </header>
                    <LoginForm mode={this.state.mode}/>
                </section>
            </div>
        )
    }
}

export default LoginComponent;
