import { useState, useEffect } from "react";
import { NavLink as Link, useParams } from "react-router-dom";
import MessageTemplate from "../messageTemplate/messageTemplate";
import { API_SERVER } from '../../config/constant';

function ConfirmationPage(props) {
    const params = useParams();
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${API_SERVER}/users/email/confirm/${params.id}`, {})
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if (data.error) {
                setError(data.msg);
            } else {
                setError('');
            }
        })
        .catch((err) => {
            setError('Network error');
        })
    });


    return (
         <MessageTemplate>
            <div className="message_container">
                <div className="message_header" >
                    <div className="message_check"><i className="fa fa-check" aria-hidden="true"></i></div>
                </div>
                <div className="message_content">
                    <h1>{params.email}</h1>
                    {!error ? <p><p>Your email successfully confirmed!</p></p> : null}
                    {error ? <p>{error}</p> : null}
                    <Link to="/">Go to Home</Link>
                </div>
            </div> 
         </MessageTemplate>
    )
}

export default ConfirmationPage;
