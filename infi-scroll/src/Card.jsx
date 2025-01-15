// Card.js
import './Card.css';

const Card = (props) => {
  const { title, body } = props.data;

  return (
    <div className="card-cntr">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Card;
