import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/auth';
import { setPassword } from '../../services/users.service';

import MessageTemplate from '../messageTemplate/messageTemplate';

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
  };
  // Save credentials in state
  const onChange2 = (e) => {
    const { value } = e.target;
    setPass2(value);
  };

  const requestSetPassword = async () => await setPassword(params.token, params.id, pass1);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await requestSetPassword();
      dispatch(logoutAction());
      navigate('/reset_password_successfull');
    } catch (err) {
      setErrorMsg(err.message);
      setPass1('');
      setPass2('');
    }
  };

  const isPassIdentical = () => pass1 === pass2;

  const repeatClass = isPassIdentical() ? 'form-group__input' : 'form-group__input error__input';

  return (
    <MessageTemplate>
      <section className="form-block form-block--is-login">
        <form onSubmit={onSubmit}>
          <h3 className="form-block__header">Set new password</h3>
          <div className="form-group form-group--login">
            <input className="form-group__input" type="password" id="password" label="password" value={pass1} onChange={onChange1} placeholder="password" />
            <input className={repeatClass} type="password" id="repeatpassword" label="repeat password" value={pass2} onChange={onChange2} placeholder="repeat password" />
          </div>
          <button className="buttonLogin button-login--primary" type="submit">Set Password</button>
        </form>
      </section>
      {errorMsg ? <h5 className="login-message">{errorMsg}</h5> : null}
    </MessageTemplate>
  );
}

export default ResetPasswordForm;
