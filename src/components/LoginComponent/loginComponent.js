import { Component } from 'react';
// import LoginForm from '../LoginForm/loginForm';
import './loginComponent.css';

const mode = 'login';

class LoginForm extends Component {
    render() {
        const Input = ({ id, type, label, disabled }) => (
            <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
        );

        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-block__input-wrapper">
                    <div className="form-group form-group--login">
                        <Input type="text" id="username" label="user name" disabled={this.props.mode === 'signup'}/>
                        <Input type="password" id="password" label="password" disabled={this.props.mode === 'signup'}/>
                    </div>
                    <div className="form-group form-group--signup">
                        <Input type="text" id="fullname" label="full name" disabled={this.props.mode === 'login'} />
                        <Input type="email" id="email" label="email" disabled={this.props.mode === 'login'} />
                        <Input type="password" id="createpassword" label="password" disabled={this.props.mode === 'login'} />
                        <Input type="password" id="repeatpassword" label="repeat password" disabled={this.props.mode === 'login'} />
                    </div>
                </div>
                <button className="buttonLogin button-login--primary full-width" type="submit">{this.props.mode === 'login' ? 'Log In' : 'Sign Up'}</button>
            </form>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.mode
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
                    <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                </section>
            </div>
        )
    }
}

export default LoginComponent;



// const App = () => (
//     <div className={`app app--is-${mode}`}>
        
//     </div>
// );


