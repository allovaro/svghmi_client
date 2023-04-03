import { useNavigate } from 'react-router-dom';
import MessageTemplate from '../messageTemplate/messageTemplate';
import './notFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <MessageTemplate is404>
      <div className="error__title">404</div>
      <div className="error__subtitle">Hmmm...</div>
      <div className="error__description">It looks like one of the  developers fell asleep</div>
      <button type="button" className="error__button error__button--active" onClick={onClick}>HOME</button>
    </MessageTemplate>
  );
}

export default NotFoundPage;
