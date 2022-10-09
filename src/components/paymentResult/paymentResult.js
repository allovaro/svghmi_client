import { NavLink as Link } from "react-router-dom";
import MessageTemplate from "../messageTemplate/messageTemplate";

import './paymentResult.css';

function PaymentResult(props) {
    let iconClass = '';
    let bgColorClass = 'payment_header';
    let HeaderText = '';
    if (props.type === 'success') {
        iconClass = 'fa fa-check';
        bgColorClass += ' payment_successed';
        HeaderText = 'Payment Success !';
    }
    if (props.type === 'fail') {
        iconClass = 'fa fa-times';
        bgColorClass += ' payment_failed';
        HeaderText = 'Payment Failed';
    }
    return (
        <MessageTemplate>
            <div className="payment">
            <div className={bgColorClass} >
               <div className="payment_check"><i className={iconClass} aria-hidden="true"></i></div>
            </div>
            <div className="payment_content">
               <h1>{HeaderText}</h1>
               <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
               <Link to="/">Go to Home</Link>
            </div>
         </div>
        </MessageTemplate>
    )
}

export default PaymentResult;