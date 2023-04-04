import { NavLink as Link } from 'react-router-dom';
import MessageTemplate from '../messageTemplate/messageTemplate';

import './paymentResult.css';

function PaymentResult(props) {
  const { type } = props;
  let iconClass = '';
  let bgColorClass = 'payment_header';
  let HeaderText = '';
  if (type === 'success') {
    iconClass = 'fa fa-check';
    bgColorClass += ' payment_successed';
    HeaderText = 'Payment Success !';
  }
  if (type === 'fail') {
    iconClass = 'fa fa-times';
    bgColorClass += ' payment_failed';
    HeaderText = 'Payment Failed';
  }

  const text = type === 'success' ? 'Thank you for purchaise, now you have a premium subscription.'
    : 'Sorry, something went wrong, you can write me a letter and we will deal with it.';
  return (
    <MessageTemplate>
      <div className="payment">
        <div className={bgColorClass}>
          <div className="payment_check"><i className={iconClass} aria-hidden="true" /></div>
        </div>
        <div className="payment_content">
          <h1>{HeaderText}</h1>
          <p>{text}</p>
          {type === 'fail' ? <a href="mailto: cirillsokolov@proton.me">cirillsokolov@proton.me</a> : null}
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </MessageTemplate>
  );
}

export default PaymentResult;
