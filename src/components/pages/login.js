import LoginComponent from '../loginComponent/loginComponent';

function Login(props) {
  const { mode } = props;
  return (
    <LoginComponent
      mode={mode}
    />
  );
}

export default Login;
