import { NavLink as Link, useParams } from 'react-router-dom';
import MessageTemplate from '../messageTemplate/messageTemplate';

import './commonMessage.css';

function CommonMessage(props) {
  const { header, message } = props;
  const params = useParams();

  return (
    <MessageTemplate>
      <div className="message_container">
        <div className="message_header">
          <div className="message_check"><i className="fa fa-check" aria-hidden="true" /></div>
        </div>
        <div className="message_content">
          {params.email ? <h5>{params.email}</h5> : null}
          <h1>{header}</h1>
          <p>{message}</p>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </MessageTemplate>
  );
}

export default CommonMessage;
