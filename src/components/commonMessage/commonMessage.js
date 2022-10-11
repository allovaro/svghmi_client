import { NavLink as Link } from "react-router-dom";
import MessageTemplate from "../messageTemplate/messageTemplate";
import { useParams } from 'react-router-dom';

import './commonMessage.css';

function CommonMessage(props) {
    const params = useParams();

    return (
        <MessageTemplate>
            <div className="message_container">
            <div className="message_header" >
               <div className="message_check"><i className="fa fa-check" aria-hidden="true"></i></div>
            </div>
            <div className="message_content">
                {params.email ? <h5>{params.email}</h5> : null}
                <h1>{props.header}</h1>
                <p>{props.message}</p>
                <Link to="/">Go to Home</Link>
            </div>
         </div>
        </MessageTemplate>
    )
}

export default CommonMessage;