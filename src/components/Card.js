import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  const onLikeButtonClick = () => {
    const updatedMessage = {
      id: props.id,
      message: props.message,
      liked: !props.liked,
      board_id: props.board_id,
    };

    props.onLikeMessage(updatedMessage.id);
  };

  const heartColor = props.liked ? "❤️" : "🤍";

  return (
    <div className="card-entry">
      {/* <h2 className="entry-message">{props.message}</h2> */}
      {/* section to allow for future style choices */}
      {/* example <section className = "entry-bubble "/> */}
      <section>
        <p>{props.message}</p>
        <button className="like" onClick={onLikeButtonClick}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  timestamp: PropTypes.string,
  liked: PropTypes.number,
  board_id: PropTypes.number,
  onLikeMessage: PropTypes.func,
};

export default Card;