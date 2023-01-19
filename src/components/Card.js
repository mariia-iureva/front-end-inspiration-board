import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <li>
      <h3>Message: {props.message}</h3>
      <h3>Likes Count: {props.likesCount}</h3>
      <button onClick={() => props.onUpdateLikes(props.id)}>Likes Count</button>
      <button onClick={() => props.onUpdateMessage(props.id)}>
        Edit Message
      </button>
      <button onClick={() => props.onDeleteCard(props.id)}>Delete Card</button>
    </li>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
  onUpdateMessage: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default Card;
