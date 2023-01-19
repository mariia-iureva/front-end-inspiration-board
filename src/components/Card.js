import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const onLikeButtonClick = () => {
    props.onLike(props.cardId);
  };

  const onDeleteButtonClick = () => {
    props.onDelete(props.cardId);
  };

  //   const updatedMessage = {
  //     id: props.id,
  //     message: props.message,
  //     liked: !props.liked,
  //     board_id: props.board_id,
  //   };

  //   props.onLikeMessage(updatedMessage.id);
  // };

  // const heartColor = props.liked ? "❤️" : "🤍";

  return (
    <div className="card-entry">
      <h3 className="entry-message">{props.message}</h3>
      {/* section to allow for future style choices */}
      {/* example <section className = "entry-bubble "/> */}
      <section classname="cards_buttons">
        <p> {props.likesCount} 💕 </p>
        <button
          className="like_button"
          type="button"
          onClick={onLikeButtonClick}
        >
          +1
        </button>

        <button
          className="delete_button"
          type="button"
          onClick={onDeleteButtonClick}
        >
          Delete
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
