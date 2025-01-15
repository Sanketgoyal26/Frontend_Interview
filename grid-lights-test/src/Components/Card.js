import './Card.css';

const Card = ({isClicked, onClick, isDisabled}) => {
    return (
        <button onClick={onClick} disabled={isDisabled} className={`${isClicked ? 'fill-cell card-cell' : 'card-cell'}`} />
    )
}

export default Card;