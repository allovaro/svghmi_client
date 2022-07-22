import './error.css';

const Error = (props) => {
    return (
        <div className="error-message">
            <span className="error-text">{props.text}</span>
        </div>
    )
}

export default Error;
