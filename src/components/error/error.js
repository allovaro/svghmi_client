import './error.css';

function Error(props) {
  const { text } = props;
  return (
    <div className="error-message">
      <span className="error-text">{text}</span>
    </div>
  );
}

export default Error;
