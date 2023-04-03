import './card.css';

function Card(props) {
  const { children } = props;
  return (
    <div className="card-wrapper">
      { children }
    </div>
  );
}

export default Card;
