import './card.css';

const Card = (props) => (
    <div className='card-wrapper'>
        {props.children}
    </div>
)

export default Card;