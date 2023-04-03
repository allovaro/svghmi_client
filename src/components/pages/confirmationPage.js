import { useState, useEffect } from 'react';
import { NavLink as Link, useParams } from 'react-router-dom';
import MessageTemplate from '../messageTemplate/messageTemplate';
import { confirmEmail } from '../../services/users.service';

function ConfirmationPage() {
  const params = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await confirmEmail(params.id);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <MessageTemplate>
      <div className="message_container">
        <div className="message_header">
          <div className="message_check"><i className="fa fa-check" aria-hidden="true" /></div>
        </div>
        <div className="message_content">
          <h1>{params.email}</h1>
          {!error ? <p><p>Your email successfully confirmed!</p></p> : null}
          {error ? <p>{error}</p> : null}
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </MessageTemplate>
  );
}

export default ConfirmationPage;
