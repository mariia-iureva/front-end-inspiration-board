import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = ({ onAddCardCallback }) => {
  const [cardMessage, setCardMessage] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setCardMessage({ message: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onAddCardCallback(cardMessage.message);

    setCardMessage({ message: "" });
  };

  // const [cardMessage, setCardMessage] = useState('enter card message');

  // const updateCard = (changeEvent) => {
  //   console.log(
  //     'Details about the element that fired the event:',
  //     changeEvent.target
  //   );

  //   console.log('The value of that element:', changeEvent.target.value);
  //   setCardMessage(changeEvent.target.value);
  // };

  //   return (
  //     <section>
  //       <h2>{cardMessage}</h2>
  //       <input type='text' value={cardMessage} onChange={updateCard} />
  //     </section>
  //   );
  // };

  return (
    <form className="form--card" onSubmit={onFormSubmit}>
      <h2>Message:</h2>
      <input
        name="cardMessage"
        value={cardMessage.message}
        onChange={onMessageChange}
        maxLength="40"
        required
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

NewCardForm.propTypes = {
  onAddCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
