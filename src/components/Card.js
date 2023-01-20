import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const onLikeButtonClick = () => {
    console.log(props.card_id);
    props.likeCard(props.card_id);
  };

  const onDeleteButtonClick = () => {
    console.log(props.card_id);
    props.deleteCard(props.card_id);
  };

  //   const updatedMessage = {
  //     id: props.id,
  //     message: props.message,
  //     liked: !props.liked,
  //     board_id: props.board_id,
  //   };

  //   props.onLikeMessage(updatedMessage.id);
  // };

  // const heartColor = props.liked ? '❤️' : '🤍';

  return (
    <div className="card-entry">
      <p className="card-entry-message">{props.message}</p>
      <section className="cards_buttons">
        <p> {props.likes_count} 💕 </p>
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

// Card.propTypes = {
//   cardId: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likesCount: PropTypes.number.isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default Card;
