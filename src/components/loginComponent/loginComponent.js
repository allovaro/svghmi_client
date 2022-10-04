import { Component, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { registerAction, loginAction } from '../../store/actions/auth';
import './loginComponent.css';

const mode = 'login';

function LoginForm(props) {
    const [ login, setLogin ] = useState(
        {
            email_signup: '',
            password: '',
            fullname: '',
            email: '',
            createpassword: '',
            repeatpassword: '',
        }
    );
    const [ valid, setValid ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [loginError, setLoginError] = useState(null);
  
    const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    }

    const isPassIdentical = () =>  {
        return login.createpassword === login.repeatpassword;
    }

    const isFormValid = () => {
        if (isValidEmail(login.email_signup) && 
            login.fullname &&
            isPassIdentical()) {
                setValid(true);
                return true;
        }
        setValid(false);
        return false;
    }

    const onHandleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'email_signup') {
            if (!isValidEmail(value)) {
                setError('Email is invalid');
            } else {
                setError(null);
            }
        }
        setLogin({...login, 
            [id]: value,
        })
        if (isFormValid()) {
            setValid(true);
        } else {
            setValid(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.mode === 'signup' && isFormValid()) {
            dispatch(registerAction(
                login.fullname,
                login.email_signup,
                login.createpassword))
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                console.error('something goes wrong...');
            });
        } else {
            dispatch(loginAction(login.email, login.password))
            .then(() => {
                setLoginError(false);
                navigate('/');
            })
            .catch(() => {
                setLoginError(true);
                setLogin({...login, 
                    email: '',
                    password: '',
                });
            });
        }
    }
    const emailClass = error ? 'form-group__input error__input' : 'form-group__input';
    let submitClass = 'buttonLogin button-login--primary full-width';
    let repeatClass = 'form-group__input';
    if (props.mode === 'signup' && !valid) submitClass += ' button-login-disabled';
    if (!isPassIdentical()) repeatClass += ' error__input';

    return (
        <form onSubmit={onSubmit}>
            <div className="form-block__input-wrapper">
                <div className="form-group form-group--login">                        
                    <input className="form-group__input"type="text" id="email" label="email" disabled={props.mode === 'signup'} value={login.email} onChange={onHandleChange} placeholder='email'/>
                    <input className="form-group__input" type="password" id="password" label="password" disabled={props.mode === 'signup'} value={login.password} onChange={onHandleChange} placeholder='password' />
                </div>
                <div className="form-group form-group--signup">
                    <input className="form-group__input" type="text" id="fullname" label="full name" disabled={props.mode === 'login'} value={login.fullname} onChange={onHandleChange} placeholder='full name' />
                    <input className={emailClass} type="email" id="email_signup" label="email" disabled={props.mode === 'login'} value={login.email_signup} onChange={onHandleChange} placeholder='email' />
                    <input className="form-group__input" type="password" id="createpassword" label="password" disabled={props.mode === 'login'} value={login.createpassword} onChange={onHandleChange} placeholder='password' />
                    <input className={repeatClass} type="password" id="repeatpassword" label="repeat password" disabled={props.mode === 'login'} value={login.repeatpassword} onChange={onHandleChange} placeholder='repeat password' />
                </div>
            </div>
            <button className={submitClass} type="submit">{props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
            {loginError ? <h5 className="login-message">incorrect login or password</h5> : null }
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
