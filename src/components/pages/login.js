import LoginComponent from '../LoginComponent/loginComponent';

const Login = () => {
    return (
        <LoginComponent
            mode={'login'}
            onSubmit={
                function() {
                    console.log('submit');
                }
            }
        />
    )
}

export default Login;
